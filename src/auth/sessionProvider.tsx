import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {useStorageState} from "./storage";
import axios, {AxiosError, AxiosResponse} from "axios";
import {
    RegisterRequestData,
    RegisterResponse201,
    SignInRequestData,
    SignInResponse201
} from "./dto";

const AuthContext = createContext<
    {
        isSession: boolean,
        isLoading: boolean,
        register: (data: RegisterRequestData) => Promise<void | AxiosError>,
        signIn: (data: SignInRequestData) => Promise<void | AxiosError>,
        signOut: () => void}
    | null>(null)

export function useSession(){
    const value = useContext(AuthContext);
    if (!value){
        throw new Error("useSession must be wrapped in a <SessionProvider />");
    }

    return value;
}


type useSessionHook = [
    [boolean, boolean],
    (sessionToken: string | null) => void
]
function useSessionState() : useSessionHook{
    const [[isLoading, storageValue], setStorageValue] = useStorageState('session');
    const [isSession, setIsSession] = useState<boolean>(false);

    useEffect(() => {
       if (storageValue){
           setIsSession(true);
           axios.defaults.headers.common['Authorization'] = `Bearer ${storageValue}`;
       }
    });

    const setSessionToken = (value: string | null) => {
        setStorageValue(value)
        if (value){
            setIsSession(true);
            axios.defaults.headers.common['Authorization'] = `Bearer ${value}`;
        }
        else {
            setIsSession(false);
            axios.defaults.headers.common['Authorization'] = null;
        }
    }

    return [[isLoading, isSession], setSessionToken]
}

export default function SessionProvider({children}: {children: ReactNode}){
    const [[isLoading, isSession], setSession] = useSessionState();

    return (
        <AuthContext.Provider value={{
            isSession: isSession,
            isLoading: isLoading,
            register: (data: RegisterRequestData) => new Promise((resolve, reject) => {
                axios.post<RegisterResponse201>("http://192.168.0.103:8081/user-management/register", data)
                    .then((response: AxiosResponse<RegisterResponse201>) => {
                        setSession(response.data.token);
                        resolve();
                    })
                    .catch((error: AxiosError) => {
                        reject(error)
                    })
            }),
            signIn: (data: SignInRequestData) => new Promise((resolve, reject) => {
                axios.post<SignInResponse201>("http://192.168.0.103:8081/user-management/sign-in", data)
                    .then((response: AxiosResponse<SignInResponse201>) => {
                        setSession(response.data.token);
                        resolve();
                    })
                    .catch((error: AxiosError) => {
                        reject(error)
                    })
            }),
            signOut: () => setSession(null)
        }}>
            {children}
        </AuthContext.Provider>
    )
}
