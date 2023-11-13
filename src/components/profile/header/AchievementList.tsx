import {Image, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../../../constants/theme";

type AchievementListOptions = {
    itemSize: number
}

export default function AchievementList(props: AchievementListOptions){

    const images = [
        {id: '1', img: require("../../../assets/images/ach1.png"), name: "Дослідник"},
        {id: '2', img: require("../../../assets/images/ach2.png"), name: "Історик"},
        {id: '3', img: require("../../../assets/images/ach3.png"), name: "Мандрівник"},
        {id: '4', img: require("../../../assets/images/q.png"), name: "Скаутер"},
        {id: '5', img: require("../../../assets/images/q.png"), name: "Спортсмен"},
    ]

    const styles = createStyles(props)

    return (
        <View style={styles.cont}>
            {images.map(item => (
                <View key={item.id} style={styles.item_cont}>
                    <View style={styles.img_cont}>
                        <Image style={styles.img} source={item.img}/>
                    </View>
                    <View style={styles.name_cont}>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                </View>
            ))}
        </View>
    )
}

function createStyles(props: AchievementListOptions){
    return StyleSheet.create({
        cont: {
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-start",
        },
        item_cont: {
            marginHorizontal: 9,
            alignItems: "center",
        },
        img_cont: {
            borderRadius: props.itemSize,
            borderWidth: 4,
            borderColor: COLORS.black,
            width: props.itemSize * 0.6,
            height: props.itemSize * 0.6,
        },
        img: {
            height: "100%",
            width: "100%"
        },
        name_cont: {
            marginTop: 5
        },
        name: {
            color: COLORS.white,
            alignSelf: "center",
        }
    })
}
