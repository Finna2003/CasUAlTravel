import {Image, ImageBackground, ScrollView, StyleSheet, View} from "react-native";
import {COLORS} from "../../constants/theme";
import ProfileHeader from "../../components/profile/header/ProfileHeader";
import ProfileBody from "../../components/profile/body/ProfileBody";
import SafeAreaViewBothOS from "../../components/common/SafeAreaViewBothOS";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {moderateAdaptive} from "../../utility/metrics";

export default function Profile(){
    const insets = useSafeAreaInsets();
    return (
        <ScrollView
            style={styles.cont}
            showsVerticalScrollIndicator={false}
        >
            <Image source={require("../../assets/images/inna.jpg")} style={styles.inna}/>
            <View style={styles.backImg_cont}>
                <ImageBackground source={require("../../assets/images/profile_back.jpg")} style={styles.header_cont_outer}>
                    <SafeAreaViewBothOS style={styles.header_cont_inner}>
                        <ProfileHeader/>
                    </SafeAreaViewBothOS>
                </ImageBackground>
            </View>
            <View style={styles.bodyCont}>
                <ProfileBody/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inna: {
        position: "absolute",
        top: -365,
        width: "100%",
        resizeMode: "contain"
    },
    backImg_cont: {
        top: -20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        overflow: "hidden"
    },
    cont: {
        backgroundColor: COLORS.white,
    },
    header_cont_outer: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        height: 420
    },
    header_cont_inner: {
    },
    bodyCont: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: "100%",
        height: "100%",
        marginTop: moderateAdaptive(-80),
        backgroundColor: COLORS.light_grey
    }
});
