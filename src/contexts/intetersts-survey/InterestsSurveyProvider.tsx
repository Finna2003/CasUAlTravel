import React, {createContext, ReactNode, useContext, useEffect, useRef, useState} from "react";
import {SURVEYS} from "../../constants/response";
import {Text, View} from "react-native";
import ProjectBlock from "../../components/common/ProjectBlock";
import {FONT} from "../../constants/theme";
import ProjectQuestion from "../../components/common/ProjectQuestion";
import ProjectButtonDark from "../../components/common/ProjectButtonDark";
import {Href, router} from "expo-router";
import ProjectButtonLight from "../../components/common/ProjectButtonLight";

const InterestsSurveyContext = createContext<
    {
        artOfTravel: interestsSurveyDoor | null,
        ageMysteries: interestsSurveyDoor | null,
        naturalExperiment: interestsSurveyDoor | null,
        symphonyImpressions: interestsSurveyDoor | null,
        getNextDoorQuestion: () => React.JSX.Element
    } | null>(null);

type interestsSurveyQuestion = {
    id: number,
    prefaceText: string | null,
    text: string,
    answerOptions: {
        id: number,
        text: string,
        interest: "Historical" | "Naturialical" | "Artistic" | "Entertainment"
    }[]
}

export type interestsSurveyDoor = {
    id: number,
    nameForUser: string,
    questions: interestsSurveyQuestion[]
}

function splitText(text: string): {text: string, prefaceText: string | null}{
    if (text != "" && text){
        const split = text.split('.');
        return {
            text: split[split.length - 1].trim(),
            prefaceText: split.length > 1 ? split.slice(0, split.length - 1).map(e => e.trim()).join('. ') : null
        }
    }
    else {
        throw new Error("text is empty")
    }
}

function getNextDoorThreeRemain(avalDoors: { text: string; href: Href<unknown> }[]){
    return (
        <View>
            <ProjectBlock>
                <View>
                    <Text style={{fontSize: 16, fontFamily: FONT.regular, lineHeight: 24}}>
                        Прямо перед собою ти знову бачиш 3 двері
                    </Text>
                </View>
            </ProjectBlock>
            <View style={{marginTop: 30}}>
                {avalDoors.map(e => (
                    <View>
                        <ProjectButtonLight text={e.text} onPress={() => router.push(e.href)}/>
                    </View>
                ))}
            </View>
        </View>
    )
}

export function useInterestsSurvey(){
    const context = useContext(InterestsSurveyContext);

    if (!context){
        throw new Error("Provide Context");
    }

    return context;
}

export default function InterestsSurveyProvider({children}: {children: ReactNode}){
    const [survey, setSurvey] = useState<interestsSurveyDoor[] | null>(null);
    const [doorsIsEnter, setDoorsIsEnter] = useState<{id: number, is: boolean} | null>(null);

    useEffect(() => {
        setSurvey(
            JSON.parse(SURVEYS)
                .map((e: any) => ({
                    id: e.surveyId,
                    nameForUser: e.surveyName,
                    questions: e.questions.map((e2: any) => ({
                        id: e2.questionId,
                        ...splitText(e2.text),
                        answerOptions: e2.answerOptions.map((e3: any) => ({
                            id: e3.answerId,
                            text: e3.answerText,
                            interest: e3.interestName
                        }))
                    }))
                }))
        )
    }, [])

    const findDoor = (id: number) => {
        if (survey){
            const door = survey.find(e => e.id === id);
            if (door){
                return door
            }
        }
        return null;
    }

    return (
        <InterestsSurveyContext.Provider
            value={{
                artOfTravel: findDoor(1),
                ageMysteries: findDoor(2),
                naturalExperiment: findDoor(3),
                symphonyImpressions: findDoor(4),
                getNextDoorQuestion: () => {
                    return <View/>
                }
            }}
        >
            {children}
        </InterestsSurveyContext.Provider>
    )
}
