import {ImageBackground, StyleSheet, View} from "react-native";
import {COLORS} from "../../constants/theme";
import ProfileHeader from "../../components/profile/header/ProfileHeader";
import ProfileBody from "../../components/profile/body/ProfileBody";
import SafeAreaViewBothOS from "../../components/common/SafeAreaViewBothOS";

export default function Profile(){
    return (
        <View style={styles.cont}>
            <ImageBackground source={require("../../assets/images/profile_back.jpg")} style={styles.header_cont_outer}>
                <SafeAreaViewBothOS style={styles.header_cont_inner}>
                    <ProfileHeader/>
                </SafeAreaViewBothOS>
            </ImageBackground>
            <View style={styles.bodyCont}>
                <ProfileBody/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
      backgroundColor: COLORS.white
    },
    header_cont_outer: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: "hidden",
        height: 435,
    },
    header_cont_inner: {
    },
    bodyCont: {
    }
});
