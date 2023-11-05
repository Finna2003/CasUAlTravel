import {Text, View} from "react-native";
import MapView from "react-native-maps";
import {Tabs} from "expo-router";
import {COLORS} from "../../constants/theme";

export default function Map(){
    return (
        <View>
            <Tabs.Screen options={{
                headerTransparent: true,
                headerTintColor: COLORS.white
            }}/>
            <MapView style={{width: '100%', height: '100%'}}/>
        </View>
    )
}
