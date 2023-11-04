import {createContext, ReactNode, useContext} from "react";
import {useStorageState} from "./storage";

const AuthContext = createContext<
    {session: string | null, isLoading: boolean, signIn: () => void, signOut: () => void} | null>(null)

export function useSession(){
    const value = useContext(AuthContext);
    if (!value){
        throw new Error("useSession must be wrapped in a <SessionProvider />");
    }

    return value;
}

export default function SessionProvider({children}: {children: ReactNode}){
    const [[isLoading, session], setSession] = useStorageState('session');

    return (
        <AuthContext.Provider value={{
            session: session,
            isLoading: isLoading,
            signIn: () => setSession('xxx'),
            signOut: () => setSession(null)
        }}>
            {children}
        </AuthContext.Provider>
    )
}
