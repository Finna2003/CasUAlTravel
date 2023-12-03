import {ScrollView, StyleSheet, Text, View} from "react-native";
import Question from "../../../../components/interests-form/Question";
import {COLORS, SIZES} from "../../../../constants/theme";
import React from "react";
import ProjectButtonDark from "../../../../components/common/ProjectButtonDark";
import {router} from "expo-router";

export default function Door1(){
    return (
        <ScrollView  style={{
            paddingHorizontal: 15,
            backgroundColor: COLORS.light_grey
        }}>
            <View style={{marginTop: 50}}>
                <Question
                    text={"Ти опиняєшся у великій світлій залі, і перше що бачиш – велике полотно. Що зображено на картині?"}
                    answers={[  { id: 1, text: "Варіант відповіді 1" },
                        { id: 2, text: "Варіант відповіді 2" },
                        { id: 3, text: "Варіант відповіді 3" },
                        { id: 4, text: "Варіант відповіді 4" },]}
                />
            </View>
            <View style={{marginTop: 50}}>
                <ProjectButtonDark text={"Наступні двері"} onPress={() => {
                    router.push("/interests-form/door2");
                }}/>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container1: {
        marginBottom: 100,
        alignSelf: "center"
    },
    contentContainer: {
        backgroundColor: COLORS.white,
        marginBottom: 20,
        alignSelf: "center"
    },
    btnText: {        fontSize: 18},
    title: {
        fontSize: 20,
        marginTop: 55,
        marginBottom: 35,
        alignSelf: "center",
        textAlign: 'center'
    }
})

