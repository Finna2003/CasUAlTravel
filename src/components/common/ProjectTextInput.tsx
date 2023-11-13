import {StyleSheet, TextInput} from "react-native";
import {COLORS, SIZES} from "../../constants/theme";

type projectTextInputOptions = {
    placeholder: string
}

export default function ProjectTextInput(props: projectTextInputOptions){
    return (
        <TextInput
            placeholder={props.placeholder}
            placeholderTextColor={COLORS.grey}
            style={styles.input}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        alignSelf: "center",
        width: SIZES.pressable.defaultWidth,
        padding: SIZES.pressable.defaultPadding,
        borderBottomWidth: 0.6,
        marginTop: SIZES.pressable.defaultMargin, //Не забувай про 'margin collapsing'
        marginBottom: SIZES.pressable.defaultMargin, //Не забувай про 'margin collapsing'
        color: COLORS.black,
        borderBottomColor: COLORS.grey,
        backgroundColor: COLORS.light_grey
    }
})
