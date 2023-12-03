import React, {useState} from "react";
import {
    Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle, Image, ImageSourcePropType,
} from "react-native";
import {COLORS, FONT, FONT_SIZES, SIZES} from "../../constants/theme";
import { forwardRef } from "react";

export type Answer = {
    id: number;
    text: string;
    value: any;
};

type QuestionProps = {
    text: string;
    answers: Answer[];
    onSelect: (val: any) => void;
};
const Question = forwardRef((props: QuestionProps, ref) => {
    const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

    const handleSelect = (e: Answer) => {
        props.onSelect(e.value);
        setSelectedAnswer(e);
    }

    return (
        <View>
            <View>
                <Text
                    style={{
                        fontFamily: FONT.bold,
                        fontSize: FONT_SIZES.sectionTitle
                    }}
                >
                    {props.text}
                </Text>
            </View>
            <View
                style={{
                    marginTop: 20,
                    backgroundColor: COLORS.white,
                    borderRadius: 15,
                    overflow: "hidden"
                }}
            >
                {props.answers.map(e => (
                    <Pressable
                        key={e.id}
                        style={{
                            padding: 15,
                            width: "100%",
                            backgroundColor: COLORS.white,
                            borderWidth: 1,
                            borderColor: COLORS.light_grey
                        }}
                        onPress={() => handleSelect(e)}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        fontFamily: FONT.regular,
                                        fontSize: 16
                                    }}
                                >
                                    {e.text}
                                </Text>
                            </View>
                            <View
                                style={{
                                }}
                            >
                                <View
                                    style={{
                                        width: 23,
                                        height: 23,
                                        borderRadius: 100,
                                        borderColor: selectedAnswer?.id === e.id ? COLORS.primary : COLORS.grey,
                                        borderWidth: 2,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    {selectedAnswer?.id === e.id && (
                                        <View
                                            style={{
                                                width: "80%",
                                                height: "80%",
                                                backgroundColor: COLORS.primary,
                                                borderRadius: 100
                                            }}
                                        />
                                    )}
                                </View>
                            </View>
                        </View>
                    </Pressable>
                ))}
            </View>
        </View>
    )
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
