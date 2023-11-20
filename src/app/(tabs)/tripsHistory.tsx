import {StyleSheet, Text, View} from "react-native";
import {COLORS, SIZES} from "../../constants/theme";
import React from "react";
import TripHistoryField from "../../components/common/TripHistoryField";


export default function TripsHistory (){
    return (
        <View style={{flex: 1}}>
        <View style={styles.contentContainer}>
            <Text style={styles.title}>
                Мої відвідування
            </Text>
            <TripHistoryField
                text="Батьківщина-Мати"
                btnStyles={styles.container}
                date="23.03.2023"
                btnTextStyles={styles.btnText}
                imagePath={require("../../assets/images/main.jpg")}/>
            <TripHistoryField
                text="Батьківщина-Мати"
                btnStyles={styles.container}
                date="24.03.2023"
                btnTextStyles={styles.btnText}
                imagePath={require("../../assets/images/main.jpg")}/>
            <TripHistoryField
                text="Батьківщина-Мати"
                btnStyles={styles.container}
                date="25.03.2023"
                btnTextStyles={styles.btnText}
                imagePath={require("../../assets/images/main.jpg")}/>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {},
    btnText: {},
    contentContainer: {
        flex: 1,
        marginBottom: 40,
        justifyContent: "flex-start",
        alignSelf: "center",
    },

    title: {
        fontSize: 20,
        marginTop: 55,
        marginBottom: 35,
        alignSelf: "center",
        textAlign: 'center'
    }
})