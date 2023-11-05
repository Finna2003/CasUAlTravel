import {View, TouchableOpacity, Text, Pressable, TextInput} from "react-native";
import {Link} from "expo-router";
import {useSession} from "../../auth/sessionProvider";
import {COLORS, SIZES, STYLE} from "../../constants/theme";
import React from "react";


export default function Login(){
    const {signIn} = useSession();

    return (
        <View>
            <TextInput
                style={{
                    ...STYLE.defaultPlaceForText,
                    position: 'absolute',
                    top: 330,
                    alignSelf: 'center',
                }}
                placeholder="Електронна пошта"
            />
            <TextInput
                style={{
                    ...STYLE.defaultPlaceForText,
                    position: 'absolute',
                    top: 400,
                    alignSelf: 'center',
                }}
                placeholder="Пароль"
            />
            <Link href='/' asChild>
                <Pressable onPress={() => signIn()}
                           style={{
                               ...STYLE.defaultButton,
                               position: 'absolute',
                               top: 480,
                               alignSelf: 'center',
                           }}
                >
                    <Text style={{...STYLE.defaultButtonText,         textAlign: 'center'}}>Увійти</Text>
                </Pressable>
            </Link>

            <Link href='/register' asChild>
                <Pressable
                    onPress={() => console.log('Натиснуто на кнопку')}
                    style={{
                        ...STYLE.defaultButton2,
                        position: 'absolute',
                        top: 590,
                        alignSelf: 'center',
                    }}
                >
                    <Text style={{...STYLE.defaultButtonText2,         textAlign: 'center'}}>Створити обліковий запис</Text>
                </Pressable>
            </Link>
            <Link href={'/register'}  style={{...STYLE.defaultLinkText, position: 'absolute', top: 530, textDecorationLine: 'underline', alignSelf: 'center',}}>Забули пароль?</Link>
        </View>

    )
}
