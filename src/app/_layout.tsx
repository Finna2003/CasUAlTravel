import {Slot} from "expo-router";
import {setStatusBarStyle} from "expo-status-bar";
import SessionProvider from "../auth/sessionProvider";

export default function AppLayout (){

    setStatusBarStyle("dark");

    return (
        <SessionProvider>
            <Slot></Slot>
        </SessionProvider>
    )
}
