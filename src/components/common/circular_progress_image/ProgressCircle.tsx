import {ColorValue} from "react-native";
import {Fragment} from "react";
import {Circle} from "react-native-svg";

export type ProgressCircleOptions = {
    radius: number,
    width: number,
    color: ColorValue,
    progressColor: ColorValue,
    progress: number
}

export default function ProgressCircle(props: ProgressCircleOptions){
    const circumference = 2 * Math.PI * props.radius;
    const progressValue = (props.progress / 100) * circumference;
    return (
        <Fragment>
            <Circle
                cx={props.radius}
                cy={props.radius}
                r={props.radius - props.width / 2}
                fill="transparent"
                stroke={props.color}
                strokeWidth={props.width}
            />
            <Circle
                cx={props.radius}
                cy={props.radius}
                r={props.radius - props.width / 2}
                fill="transparent"
                stroke={props.progressColor}
                strokeWidth={props.width}
                strokeDasharray={`${progressValue} ${circumference}`}
                strokeLinecap="round"
            />
        </Fragment>
    )
}
