import {Redirect, Tabs} from "expo-router";
import {COLORS, FONT_SIZES} from "../../constants/theme";
import {useSession} from "../../auth/SessionProvider";
import ProjectLoadingScreen from "../../components/common/ProjectLoadingScreen";

export default function TabsLayout () {
    const {isSession, isLoading} = useSession();

    if (isLoading){
        return <ProjectLoadingScreen/>
    }

    if(!isSession){
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
                    fontSize: FONT_SIZES.small,
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
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name={"map"}
                options={{
                    tabBarLabel: "Створити",
                    headerTransparent: true,
                    headerTintColor: COLORS.white
                }}
            />
            <Tabs.Screen
                name={"tripsHistory"}
                options={{
                    tabBarLabel: "Мої подорожі",
                    headerTransparent: true,
                    headerTitle: ''
                }}
            />
        </Tabs>
    )
}
