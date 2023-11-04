import {Redirect, Tabs} from "expo-router";
import {COLORS, SIZES} from "../../constants/theme";
import {useSession} from "../../auth/sessionProvider";
import {ActivityIndicator} from "react-native";

export default function TabsLayout () {
    const {session, isLoading} = useSession();

    if (isLoading){
        return <ActivityIndicator/>
    }

    if(!session){
        return <Redirect href={'/login'}/>
    }

    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.white,
                },
                tabBarStyle: {
                    backgroundColor: COLORS.white
                },
                tabBarLabelStyle: {
                    fontSize: SIZES.small,
                },
                tabBarActiveTintColor: COLORS.black
            }}
            sceneContainerStyle={{
                backgroundColor: COLORS.white,
            }}
        >
            <Tabs.Screen
                name={"index"}
                options={{
                    href: null
                }}
            />
            <Tabs.Screen
                name={"profile"}
                options={{
                    tabBarLabel: "Профіль",
                }}
            />
            <Tabs.Screen
                name={"map"}
                options={{
                    tabBarLabel: "Створити",
                }}
            />
            <Tabs.Screen
                name={"tripsHistory"}
                options={{
                    tabBarLabel: "Мої подорожі",
                }}
            />
        </Tabs>
    )
}
