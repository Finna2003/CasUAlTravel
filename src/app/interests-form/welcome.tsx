import {Text, View} from "react-native";
import ProjectButtonDark from "../../components/common/ProjectButtonDark";
import {router} from "expo-router";

export default function Welcome(){
    return (
        <View>
            <Text>
                Welcome
            </Text>
            <ProjectButtonDark text={"Перейти до Door1"} onPress={() => {

                router.push("/interests-form/door1");
            }}/>
        </View>
    )
}
