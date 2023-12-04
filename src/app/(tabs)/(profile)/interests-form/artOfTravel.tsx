import {Image, ScrollView, Text, View} from "react-native";
import ProjectQuestion from "../../../../components/common/ProjectQuestion";
import {COLORS, FONT, FONT_SIZES,} from "../../../../constants/theme";
import React from "react";
import ProjectButtonDark from "../../../../components/common/ProjectButtonDark";
import {router} from "expo-router";
import {useInterestsSurvey} from "../../../../contexts/intetersts-survey/InterestsSurveyProvider";
import ProjectLoadingScreen from "../../../../components/common/ProjectLoadingScreen";
import ProjectBlock from "../../../../components/common/ProjectBlock";

export default function ArtOfTravel(){
    const {artOfTravel} = useInterestsSurvey();

    if (!artOfTravel){
        return <ProjectLoadingScreen/>;
    }

    return (
        <ScrollView  style={{
            paddingHorizontal: 15,
            backgroundColor: COLORS.light_grey
        }}>
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
                            {`${artOfTravel.nameForUser}`}
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
                            source={require('../../../../assets/images/door-artOfTravel.jpg')}
                        />
                    </View>
                </ProjectBlock>
            </View>
            {artOfTravel.questions.map(e => (
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
            <View style={{marginTop: 30}}>
                <ProjectButtonDark text={"Наступні двері"} onPress={() => {
                    router.push("/interests-form/door2");
                }}/>
            </View>
        </ScrollView>
    )
}

