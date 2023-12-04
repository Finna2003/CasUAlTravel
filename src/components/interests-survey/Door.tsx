import {Image, ImageSourcePropType, Text, View} from "react-native";
import {interestsSurveyDoor} from "../../contexts/intetersts-survey/InterestsSurveyProvider";
import ProjectBlock from "../common/ProjectBlock";
import {FONT, FONT_SIZES} from "../../constants/theme";
import ProjectQuestion from "../common/ProjectQuestion";
import ProjectButtonDark from "../common/ProjectButtonDark";
import {router} from "expo-router";
import React from "react";

export default function Door({door, img}: {door: interestsSurveyDoor, img: ImageSourcePropType}){
    return (
        <View>
            <View style={{
                marginTop: 30,
            }}>
                <ProjectBlock>
                    <View style={{alignItems: "center"}}>
                        <Text
                            style={{
                                fontSize: FONT_SIZES.pageTitle,
                                fontFamily: FONT.bold
                            }}
                        >
                            {`${door.nameForUser}`}
                        </Text>
                    </View>
                    <View style={{
                        marginTop: 30,
                        borderRadius: 20,
                        overflow: "hidden",
                        backgroundColor: "red"
                    }}>
                        <Image
                            style={{
                                width: "100%",
                                resizeMode: "stretch"
                            }}
                            source={img}
                        />
                    </View>
                </ProjectBlock>
            </View>
            {door.questions.map(e => (
                <View key={e.id}>
                    <View style={{marginTop: 30}}>
                        <ProjectBlock>
                            <View>
                                <Text style={{
                                    fontFamily: FONT.regular,
                                    fontSize: FONT_SIZES.medium,
                                    lineHeight: 24
                                }}>
                                    {e.prefaceText}
                                </Text>
                            </View>
                        </ProjectBlock>
                    </View>
                    <View style={{marginTop: 30}}>
                        <ProjectQuestion
                            titleFontSize={18}
                            text={e.text}
                            answers={e.answerOptions.map(e2 => ({
                                id: e2.id,
                                text: e2.text,
                                value: e2.interest
                            }))}
                            onSelect={() => {}}
                        />
                    </View>
                </View>
            ))}
        </View>
    )
}
