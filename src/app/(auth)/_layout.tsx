import {Stack} from 'expo-router'
import {COLORS, FONT_SIZES} from "../../constants/theme";



export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                // Ваші налаштування заголовка тут
                headerBackTitleVisible: false,
                headerTransparent: true,
                headerStyle: {
                },
                headerShadowVisible: false,
                headerTintColor: COLORS.black,
                contentStyle: {
                    backgroundColor: COLORS.white
                },
                fullScreenGestureEnabled: true
            }}
        >
            <Stack.Screen
    name="login"
    options={{
        headerTitle: '' // Порожній заголовок для сторінки "Login"
    }}
    />
            <Stack.Screen
    name="register"
    options={{
        headerTitle: ''
    }}
    />
        </Stack>
    )
}
