import {StyleSheet, View} from "react-native";
import {Link} from "expo-router";
import {useSession} from "../../../auth/sessionProvider";

export default function ProfileBody(){
    const {signOut} = useSession();

    return (
        <View style={styles.body}>
            <Link href={'/login'} onPress={() => signOut()}>Вийти</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        marginTop: 20
    },
})
