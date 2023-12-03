import {SafeAreaView, ScrollView, Text, View} from "react-native";
import SafeAreaViewBothOS from "../../../components/common/SafeAreaViewBothOS";
import Question from "../../../components/interests-form/Question";
import React, {useRef} from "react";
import {COLORS} from "../../../constants/theme";
import ProjectButtonDark from "../../../components/common/ProjectButtonDark";
import {useAutoRoute} from "../../../contexts/AutoRouteProvider";
import {PLACES, ROUTE_PLACES} from "../../../constants/response";
import {router} from "expo-router";

export default function AutomaticRouteForm(){
    const priceLevel = useRef<number | null>(null);
    const locationsCount = useRef<number | null>(null);
    const mustVisitWeight = useRef<boolean | null>(null);
    const restPreffered = useRef<string | null>(null);
    const outdoorAction = useRef<boolean | null>(null)
    const {setRoutePlaces} = useAutoRoute();

    return (
        <ScrollView
            contentContainerStyle={{
                marginTop: 30,
                paddingHorizontal: 15,
                paddingBottom: 30
            }}
        >
            <View>
                <Question
                    text={"Скільки часу я маю на найближчий відпочинок"}
                    answers={[  { id: 1, text: "До 1 години", value: 1},
                        { id: 2, text: "Від 1 до 3 годин", value: 2},
                        { id: 3, text: "Від 3 до 5 годин", value: 4},
                        { id: 4, text: "Маю весь вільний день", value: 6}]}
                    onSelect={(val: any) => locationsCount.current = val}
                />
            </View>
            <View style={{marginTop: 70}}>
                <Question
                    text={"Скільки грошей я готовий витратити на свій відпочинок сьогодні"}
                    answers={[
                        { id: 1, text: "300 гривень", value: 300 },
                        { id: 2, text: "800 гривень", value: 800 },
                        { id: 3, text: "2000 гривень", value: 2000 },
                        { id: 4, text: "Не готовий витрачати кошти", value: 0 }]}
                    onSelect={(val: any) => priceLevel.current = val}
                />
            </View>
            <View style={{marginTop: 70}}>
                <Question
                    text={"Як добре я знаю місто?"}
                    answers={[
                        { id: 1, text: "Місцевий", value: false },
                        { id: 2, text: "Нещодавно тут", value: true }]}
                    onSelect={(val: any) => mustVisitWeight.current = val}
                />
            </View>
            <View style={{marginTop: 70}}>
                <Question
                    text={"Зазвичай я надаю перевагу:"}
                    answers={[
                        { id: 1, text: "Активний відпочинок", value: "sports" },
                        { id: 2, text: "Пізнавальний відпочинок", value: "educationalAction" },
                        { id: 3, text: "Пасивний відпочинок", value: "passiveAction" }]}
                    onSelect={(val: any) => restPreffered.current = val}
                />
            </View>
            <View style={{marginTop: 70}}>
                <Question
                    text={"Сьогодні погода в місті дозволяє прогулянки на вулиці?"}
                    answers={[
                        { id: 1, text: "Так", value: true },
                        { id: 2, text: "Ні", value: false }]}
                    onSelect={(val: any) => outdoorAction.current = val}
                />
            </View>
            <View style={{marginTop: 30}}>
                <ProjectButtonDark text={"Побудувати маршрут"} onPress={() => {
                    if (priceLevel.current && locationsCount.current
                        && mustVisitWeight.current != null
                        && restPreffered.current
                        && outdoorAction.current != null
                    ){
                        // @ts-ignore
                        const res = JSON.parse(ROUTE_PLACES);
                        // @ts-ignore
                        setRoutePlaces(res.map(e => ({
                            id: e.placeId,
                            visitTime: e.visitTime,
                            visitCost: e.visitCost,
                            name: e.nameForUser,
                            coords: e.location
                        })));
                        router.replace('/map')
                    }
                }}/>
            </View>
        </ScrollView>
    )
}