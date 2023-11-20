import React from "react";
import {
    Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle, Image, ImageSourcePropType,
} from "react-native";
import {COLORS, SIZES} from "../../constants/theme";
import { forwardRef } from "react";


type TripHistoryFieldProps = {
    text: string;
    btnStyles: StyleProp<ViewStyle>;
    btnTextStyles: StyleProp<TextStyle>;
    imagePath: ImageSourcePropType; // Доданий новий параметр для шляху до зображення
    date: string; // Параметр для дати
};

const TripHistoryField = forwardRef((props: TripHistoryFieldProps, ref) => {
    return (
        <Pressable
            style={StyleSheet.compose(styles.container, props.btnStyles)}
        >
            <View style={styles.leftContainer}>
                {/* Кружок із зображенням */}
                <View style={styles.circle}>
                    <Image
                           style={styles.image}
                           source={props.imagePath}
                    />
                </View>
            </View>
            {/* Текст */}
            <Text style={StyleSheet.compose(styles.btnText, props.btnTextStyles)}>
                {props.text}{'\n'}
                {props.date}
            </Text>
        </Pressable>
    );
});

export default TripHistoryField;

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
    leftContainer: {
        marginRight: 10, // Відступ між кружком і текстом
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: "hidden",
        backgroundColor: COLORS.black
    },
    image: {
        width: "100%",
        height: "100%",
    },
    btnText: {
        alignSelf: "center",
    },
});
