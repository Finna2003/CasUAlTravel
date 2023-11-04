import {View} from "react-native";
import {Link} from "expo-router";
import {useSession} from "../../auth/sessionProvider";

export default function Register(){
    const {signIn} = useSession();

    return (
        <View>
            <Link href={'/'} onPress={() => signIn()}>Register</Link>
        </View>
    )
}
