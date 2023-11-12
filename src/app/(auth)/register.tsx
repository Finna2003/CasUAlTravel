import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {Link} from "expo-router";
import {useSession} from "../../auth/sessionProvider";
import React from "react";
import {COLORS} from "../../constants/theme";
import ProjectTextInput from "../../components/common/ProjectTextInput";
import ProjectButtonDark from "../../components/common/ProjectButtonDark";

export default function Register(){
    const {signIn} = useSession();

    return (
           <View style={{flex: 0.5}}>
               <View style={styles.contentContainer}>
                   <Text style={styles.title}>
                       Заповніть основну{'\n'}
                         інформацію
                   </Text>
                   <ProjectTextInput placeholder={"Ім'я"}/>
                   <ProjectTextInput placeholder={"Електронна пошта"}/>
                   <ProjectTextInput placeholder={"Пароль"}/>
                   <Link href='/' asChild>
                       <ProjectButtonDark
                           text={"Зареєструватися"}
                           onPress={() => signIn()}
                       />
                   </Link>
                   <Link href={'/login'} style={styles.resetLogin}>
                       Вже маєте обліковий запис?
                   </Link>
               </View>
           </View>
     )
}
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        marginBottom: 40,
        justifyContent: "space-between"
    },
    resetLogin: {
        alignSelf: "center",
        borderBottomWidth: 0.6,
        borderBottomColor: COLORS.grey,
        color: COLORS.grey
    },
    title: {
        fontSize: 20,
        marginTop: 55,
        marginBottom: 35,
        alignSelf: "center",
        textAlign: 'center'
    }
})
