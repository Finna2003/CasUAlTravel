import {View} from "react-native";
import {Link} from "expo-router";
import {useSession} from "../../auth/sessionProvider";

export default function Login(){
    const {signIn} = useSession();

    return (
        <View>
            <Link href={'/'} onPress={() => signIn()}>Login</Link>
            <Link href={'/register'}>Go to register</Link>
        </View>
    )
}
