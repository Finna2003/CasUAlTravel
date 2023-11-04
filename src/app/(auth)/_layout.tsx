import {Stack} from 'expo-router'
import {COLORS} from "../../constants/theme";

export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: COLORS.white
                },
                headerTintColor: COLORS.black,
                contentStyle:{
                    backgroundColor: COLORS.white
                },
                fullScreenGestureEnabled: true
            }}
        ></Stack>
    )
}
