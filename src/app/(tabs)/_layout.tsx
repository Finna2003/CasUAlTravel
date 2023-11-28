import {Redirect, Tabs} from "expo-router";
import {COLORS, FONT_SIZES} from "../../constants/theme";
import {useSession} from "../../auth/SessionProvider";
import ProjectLoadingScreen from "../../components/common/ProjectLoadingScreen";
import {Image} from "react-native"

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
                name={'profile'}
                options={{
                    tabBarLabel: 'Профіль',
                    headerShown: false,
                    tabBarLabelStyle: {
                        color: COLORS.black, // Колір тексту вкладки
                    },
                    tabBarIcon: () => (
                        <Image
                            source={require("../../assets/images/profile.jpg")}
                            style={{ width: 24, height: 24 }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name={"map"}
                options={{
                    tabBarLabel: "Створити",
                    headerTransparent: true,
                    headerTintColor: COLORS.white,
                    tabBarLabelStyle: {
                        color: COLORS.black, // Колір тексту вкладки
                    },
                    tabBarIcon: () => (
                        <Image
                            source={require("../../assets/images/plus.jpg")}
                            style={{ width: 24, height: 24 }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name={"tripsHistory"}
                options={{
                    tabBarLabel: "Мої подорожі",
                    headerTransparent: true,
                    headerTitle: '',
                    tabBarLabelStyle: {
                        color: COLORS.black, // Колір тексту вкладки
                    },
                    tabBarIcon: () => (
                        <Image
                            source={require("../../assets/images/point.jpg")}
                            style={{ width: 24, height: 30 }}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
