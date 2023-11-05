import {Stack} from 'expo-router'
import {COLORS, SIZES} from "../../constants/theme";
import { Text } from 'react-native';



export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                // Ваші налаштування заголовка тут
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerShadowVisible: false,
                headerTintColor: COLORS.black,
                contentStyle: {
                    backgroundColor: COLORS.primary
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
