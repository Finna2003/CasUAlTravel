import {Image, ImageSourcePropType, StyleSheet, View} from "react-native";
import Svg from "react-native-svg";
import {COLORS} from "../../../constants/theme";
import ProgressCircle, {ProgressCircleOptions} from "./ProgressCircle";
import LvlInfoCircle from "./LvlInfoCircle";

type CircularProgressOptions = {
    progress: number,
    img: ImageSourcePropType,
    size: number,
    strokeWidth: number,
    indent: number,
    lvl: number
}

export default function CircularProgressImage(props: CircularProgressOptions){

    const styles = createStyles(props)

    const radius = props.size / 2;
    const progressCircleOptions: ProgressCircleOptions = {
        radius: radius,
        width: props.strokeWidth,
        color: "#D3D3D3",
        progressColor: "#1E90FF",
        progress: 60
    }

    return (
        <View style={styles.cont}>
            <View style={styles.img_cont}>
                <Image source={props.img} style={styles.img}/>
            </View>
            <Svg width={2 * radius} height={2 * radius}>
                <ProgressCircle
                    {...progressCircleOptions}
                />
                <LvlInfoCircle
                    progressCircleOptions={progressCircleOptions}
                    lvl={props.lvl}
                    circleWidth={4}
                    backgroundColor={COLORS.black}
                    fontColor={COLORS.white}
                />
            </Svg>
        </View>
    );
}

function createStyles(props: CircularProgressOptions){
    const size = props.size
    const stroke_width = props.strokeWidth
    const indent = props.indent

    return StyleSheet.create({
        cont: {
            position: "relative",
            width: size,
            height: size
        },
        img_cont: {
            left: stroke_width + indent,
            top: stroke_width + indent,
            width: size - stroke_width * 2 - indent * 2,
            height: size - stroke_width * 2 - indent * 2,
            position: "absolute"
        },
        img: {
            borderRadius: size,
            width: "100%",
            height: "100%"
        }
    })
}
