import {View, Text, Image, StyleSheet} from "react-native";
import {Link} from "expo-router";
import {useSession} from "../../auth/sessionProvider";
import {COLORS} from "../../constants/theme";
import React from "react";
import ProjectButtonLight from "../../components/common/ProjectButtonLight";
import ProjectButtonDark from "../../components/common/ProjectButtonDark";
import ProjectTextInput from "../../components/common/ProjectTextInput";


export default function Login(){
    const {signIn} = useSession();

    return (
        <View style={{flex: 1}}>
            <View>
                <Image
                    source={require("../../assets/images/main.jpg")}
                    style={styles.img}
                    resizeMode={"cover"}
                />
            </View>
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.title}>
                        Cas
                        <Text style={{color: COLORS.primary}}>U</Text>
                        <Text style={{color: "#F2D601"}}>A</Text>
                        LTravel
                    </Text>
                    <ProjectTextInput placeholder={"Електронна пошта"}/>
                    <ProjectTextInput placeholder={"Пароль"}/>
                    <Link href='/' asChild>
                        <ProjectButtonDark
                            text={"Увійти"}
                            onPress={() => signIn()}
                        />
                    </Link>

                    <Link href={'/register'} style={styles.resetPassword}>
                        Забули пароль?
                    </Link>
                </View>
                <View>
                    <Link href='/register' asChild>
                        <ProjectButtonLight
                            text={"Створити обліковий запис"}
                            onPress={() => {}}
                        />
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: 350
    },
    contentContainer: {
        flex: 1,
        marginBottom: 40,
        justifyContent: "space-between"
    },
    resetPassword: {
        alignSelf: "center",
        borderBottomWidth: 0.6,
        borderBottomColor: COLORS.grey,
        color: COLORS.grey
    },
    title: {
        fontSize: 45,
        marginVertical: 15,
        alignSelf: "center"
    }
})
