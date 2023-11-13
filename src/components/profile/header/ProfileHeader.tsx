import {StyleSheet, Text, View} from "react-native";
import {COLORS, FONT_SIZES} from "../../../constants/theme";
import AchievementList from "./AchievementList";
import CircularProgressImage from "../../common/circular_progress_image/CircularProgressImage";

export default function ProfileHeader(){

    return (
        <View style={styles.profile}>
            <View style={styles.profile_header_top}>
                <View style={styles.profile_header_img_cont}>
                    <CircularProgressImage
                        progress={60}
                        img={require("../../../assets/images/photo.jpg")}
                            size={160}
                        strokeWidth={12}
                        indent={6}
                        lvl={1}
                    />
                </View>
                <View style={styles.profile_header_top_name_cont}>
                    <Text style={styles.profile_header_top_name}>
                        Юлія Рак
                    </Text>
                </View>
            </View>
            <View style={styles.profile_header_achievement_list_cont}>
                <AchievementList itemSize={120}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        marginTop: 15
    },
    profile_header_top:{
      alignSelf: "center"
    },
    profile_header_img_cont: {

    },
    profile_header_top_name_cont: {
        marginTop: 10,
        alignSelf: "center"
    },
    profile_header_top_name: {
        color: COLORS.white,
        fontSize: FONT_SIZES.xLarge,
        fontWeight: "bold"
    },
    profile_header_achievement_list_cont: {
        marginTop: 45,
        width: "100%",
    }

})
