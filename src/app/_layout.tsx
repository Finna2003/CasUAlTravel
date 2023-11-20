import {Slot} from "expo-router";
import {setStatusBarStyle} from "expo-status-bar";
import SessionProvider from "../auth/sessionProvider";
import {useFonts} from "expo-font";
import axios from "axios";

export default function AppLayout (){
    const [fontsLoaded, fontError] = useFonts({
        InterRegular: require('../assets/fonts/Inter-Regular.ttf'),
        InterBold: require('../assets/fonts/Inter-Bold.ttf')
    })

    axios.defaults.headers.post['Content-Type'] = 'application/json';

    if (!fontsLoaded && !fontError) {
        return null;
    }

    setStatusBarStyle("dark");

    return (
        <SessionProvider>
            <Slot></Slot>
        </SessionProvider>
    )
}
