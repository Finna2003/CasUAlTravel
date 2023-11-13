import {ColorValue} from "react-native";
import {Fragment} from "react";
import {Circle, Text} from "react-native-svg";
import {ProgressCircleOptions} from "./ProgressCircle";

type LvlInfoOptions = {
    progressCircleOptions: ProgressCircleOptions
    lvl: number,
    circleWidth: number
    fontColor: ColorValue,
    backgroundColor: ColorValue
}

export default function LvlInfoCircle(props: LvlInfoOptions){
    const coord = props.progressCircleOptions.radius * 2 - props.progressCircleOptions.width * 2;

    return (
        <Fragment>
            <Circle
                cx={coord}
                cy={coord}
                r={props.progressCircleOptions.radius / 4}
                stroke={props.progressCircleOptions.progressColor}
                strokeWidth={props.circleWidth}
                fill={props.backgroundColor}
            />
            <Text
                x={coord}
                y={coord}
                textAnchor="middle"
                dy=".3em"
                fill={props.fontColor}
                fontSize={props.progressCircleOptions.radius * 0.3}
                fontWeight={"bolder"}
            >
                {props.lvl}
            </Text>
        </Fragment>
    )
}
