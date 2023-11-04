import {SafeAreaView, Text} from "react-native";
import {COLORS} from "../../constants/theme";
import {useSession} from "../../auth/sessionProvider";
import {Link} from "expo-router";

export default function Profile(){
    const {signOut} = useSession();

    return (
        <SafeAreaView style={{backgroundColor: COLORS.white}}>
            <Text>Profile</Text>
            <Link href={'/login'} onPress={() => signOut()}>Вийти</Link>
        </SafeAreaView>
    )
}
