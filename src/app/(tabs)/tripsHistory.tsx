import {StyleSheet, Text, View} from "react-native";
import {COLORS} from "../../constants/theme";
import React from "react";
import {Tabs} from "expo-router";

export default function TripsHistory (){
    return (
        <View style={{flex: 1}}>
        <View style={styles.contentContainer}>
            <Text style={styles.title}>
                Мої відвідування
            </Text>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        marginBottom: 40,
        justifyContent: "space-between"
    },
    title: {
        fontSize: 20,
        marginTop: 55,
        marginBottom: 35,
        alignSelf: "center",
        textAlign: 'center'
    }
})