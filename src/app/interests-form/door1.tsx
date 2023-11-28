import {ScrollView, StyleSheet, Text, View} from "react-native";
import Question from "../../components/common/Question";
import {COLORS, SIZES} from "../../constants/theme";
import React from "react";
import ProjectButtonDark from "../../components/common/ProjectButtonDark";
import {router} from "expo-router";

export default function Door1(){
    return (
        <ScrollView  style={styles.contentContainer}>
            <Text style={styles.title}>
                Двері номер 1
            </Text>
            <Question questionName={1}
                      text={"Що зображено на картині?"}
                      prefaceText={"Ти опиняєшся у великій світлій залі, і перше що бачиш – велике полотно."}
                      categoryName={"Мистецтво подорожі"}
                      answers={[  { answerName: "option1", text: "Варіант відповіді 1" },
                          { answerName: "option2", text: "Варіант відповіді 2" },
                          { answerName: "option3", text: "Варіант відповіді 3" },
                          { answerName: "option4", text: "Варіант відповіді 4" },]}
                      btnStyles={styles.container1}
                      btnTextStyles={styles.btnText}/>
            <Question questionName={2}
                      text={"Що зображено на картині?"}
                      prefaceText={"Ти опиняєшся у великій світлій залі, і перше що бачиш – велике полотно."}
                      categoryName={"Мистецтво подорожі"}
                      answers={[  { answerName: "option1", text: "Варіант відповіді 1" },
                          { answerName: "option2", text: "Варіант відповіді 2" },
                          { answerName: "option3", text: "Варіант відповіді 3" },
                          { answerName: "option4", text: "Варіант відповіді 4" },]}
                      btnStyles={styles.container1}
                      btnTextStyles={styles.btnText}/>
            <Question questionName={3}
                      text={"Що зображено на картині?"}
                      prefaceText={"Ти опиняєшся у великій світлій залі, і перше що бачиш – велике полотно."}
                      categoryName={"Мистецтво подорожі"}
                      answers={[  { answerName: "option1", text: "Варіант відповіді 1" },
                          { answerName: "option2", text: "Варіант відповіді 2" },
                          { answerName: "option3", text: "Варіант відповіді 3" },
                          { answerName: "option4", text: "Варіант відповіді 4" },]}
                      btnStyles={styles.container1}
                      btnTextStyles={styles.btnText}/>
            <Question questionName={4}
                      text={"Що зображено на картині?"}
                      prefaceText={"Ти опиняєшся у великій світлій залі, і перше що бачиш – велике полотно."}
                      categoryName={"Мистецтво подорожі"}
                      answers={[  { answerName: "option1", text: "Варіант відповіді 1" },
                          { answerName: "option2", text: "Варіант відповіді 2" },
                          { answerName: "option3", text: "Варіант відповіді 3" },
                          { answerName: "option4", text: "Варіант відповіді 4" },]}
                      btnStyles={styles.container1}
                      btnTextStyles={styles.btnText}/>
            <Question questionName={5}
                      text={"Що зображено на картині?"}
                      prefaceText={"Ти опиняєшся у великій світлій залі, і перше що бачиш – велике полотно."}
                      categoryName={"Мистецтво подорожі"}
                      answers={[  { answerName: "option1", text: "Варіант відповіді 1" },
                          { answerName: "option2", text: "Варіант відповіді 2" },
                          { answerName: "option3", text: "Варіант відповіді 3" },
                          { answerName: "option4", text: "Варіант відповіді 4" },]}
                      btnStyles={styles.container1}
                      btnTextStyles={styles.btnText}/>
            <ProjectButtonDark text={"Наступні двері"} onPress={() => {
                router.push("/interests-form/door2");
            }}/>
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

