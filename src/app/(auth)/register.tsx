import {Pressable, Text, TextInput, View} from "react-native";
import {Link, Stack} from "expo-router";
import {useSession} from "../../auth/sessionProvider";
import {STYLE} from "../../constants/theme";
import React from "react";

export default function Register(){
    const {signIn} = useSession();

    return (
        <View>
            <Text style={{...STYLE.defaultBigText,         textAlign: 'center'}}>Заповніть основну</Text>
            <Text style={{...STYLE.defaultBigText,         textAlign: 'center'}}>інформацію</Text>
            <TextInput
                style={{
                    ...STYLE.defaultPlaceForText,
                    position: 'absolute',
                    top: 100,
                    alignSelf: 'center',
                }}
                placeholder="Ім'я"
            />
            <TextInput
                style={{
                    ...STYLE.defaultPlaceForText,
                    position: 'absolute',
                    top: 170,
                    alignSelf: 'center',
                }}
                placeholder="Електронна пошта"
            />
            <TextInput
                style={{
                    ...STYLE.defaultPlaceForText,
                    position: 'absolute',
                    top: 250,
                    alignSelf: 'center',
                }}
                placeholder="Пароль"
            />
            <Link href='/' asChild>
                <Pressable onPress={() => signIn()}
                           style={{
                               ...STYLE.defaultButton,
                               position: 'absolute',
                               top: 330,
                               alignSelf: 'center',
                           }}
                >
                    <Text style={{...STYLE.defaultButtonText,         textAlign: 'center'}}>Зареєструватися</Text>
                </Pressable>
            </Link>
            <Link href={'/login'}  style={{...STYLE.defaultLinkText, position: 'absolute', top: 390, textDecorationLine: 'underline', alignSelf: 'center',}}>Вже маєте обліковий запис?</Link>
        </View>
    )
}
