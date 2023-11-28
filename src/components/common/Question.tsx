import React, {useState} from "react";
import {
    Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle, Image, ImageSourcePropType,
} from "react-native";
import {COLORS, SIZES} from "../../constants/theme";
import { forwardRef } from "react";

type Answer = {
    answerName: string;
    text: string;
};

type QuestionProps = {
    questionName: number;
    text: string;
    prefaceText: string;
    categoryName: string;
    answers: Answer[];
    btnStyles: StyleProp<ViewStyle>
    btnTextStyles: StyleProp<TextStyle>
};
const Question = forwardRef((props: QuestionProps, ref) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const handlePress = (answerName: string) => {
        setSelectedAnswer(answerName);
    };

    return (
        <View>
            <Text style={StyleSheet.compose(styles.btnText, props.btnTextStyles)}>
                {props.questionName}{". "}
                {props.prefaceText}{'\n'}
                {props.text}
            </Text>
            {props.answers.map((answer, index) => (
                <Pressable
                    key={index}
                    style={{
                        ...styles.container,
                        backgroundColor: selectedAnswer === answer.answerName ? COLORS.grey : COLORS.light_grey
                    }}
                    onPress={() => handlePress(answer.answerName)}
                    disabled={selectedAnswer !== null}
                >
                    <Text style={StyleSheet.compose(styles.btnText, props.btnTextStyles)}>
                        {answer.text}
                    </Text>
                </Pressable>        ))}
            <Text style={StyleSheet.compose(styles.btnText, props.btnTextStyles)}>
                {" "}{'\n'}
            </Text>
        </View>
);
});
export default Question;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: SIZES.pressable.defaultWidth,
        padding: SIZES.pressable.defaultPadding,
        borderRadius: SIZES.pressable.defaultBorderRadius,
        marginBottom: SIZES.pressable.defaultMargin,
        marginTop: SIZES.pressable.defaultMargin,
        backgroundColor: COLORS.light_grey
    },
    btnText: {
        alignSelf: "center",
    },
});
