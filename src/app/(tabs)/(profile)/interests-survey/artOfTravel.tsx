import {Image, ScrollView, Text, View} from "react-native";
import ProjectQuestion from "../../../../components/common/ProjectQuestion";
import {COLORS, FONT, FONT_SIZES,} from "../../../../constants/theme";
import React from "react";
import ProjectButtonDark from "../../../../components/common/ProjectButtonDark";
import {router} from "expo-router";
import {useInterestsSurvey} from "../../../../contexts/intetersts-survey/InterestsSurveyProvider";
import ProjectLoadingScreen from "../../../../components/common/ProjectLoadingScreen";
import ProjectBlock from "../../../../components/common/ProjectBlock";
import Door from "../../../../components/interests-survey/Door";

export default function ArtOfTravel(){
    const {artOfTravel, get} = useInterestsSurvey();

    if (!artOfTravel){
        return <ProjectLoadingScreen/>;
    }

    return (
        <ScrollView  style={{
            paddingHorizontal: 15,
            backgroundColor: COLORS.light_grey
        }}>
            <Door door={artOfTravel} img={require('../../../../assets/images/door-artOfTravel.jpg')}/>

            <ProjectBlock>
                <View>
                    <Text style={{fontSize: 16, fontFamily: FONT.regular, lineHeight: 24}}>
                        Прямо перед собою ти знову бачиш 3 двері
                    </Text>
                </View>
            </ProjectBlock>
            <View style={{marginTop: 30}}>
                <ProjectQuestion
                    text={'Яку відкриєш тепер?'}
                    answers={[{}]}
                    onSelect={}
                />
                <ProjectButtonDark text={"Наступні двері"} onPress={() => {
                    router.push("/interests-survey/ageMysteries");
                }}/>
            </View>
        </ScrollView>
    )
}

