import {
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
    FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { colors } from "../styles/global";
import data from "../assets/data/postData";
import Publication from "../components/Publication";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const ProfileScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Image
                source={require("../assets/images/bg_image.png")}
                resizeMode="cover"
                style={styles.image_bg}
            />

            <View style={styles.formContainer}>
                <View style={styles.avatarWrapper}>
                    <Image
                        source={require("../assets/images/avatar_icon.png")}
                        resizeMode="cover"
                        style={styles.avatarIcon}
                    />
                    <TouchableOpacity style={styles.avatarIconButton} onPress={() => console.log("delete avatar ProfileScreen")}>
                        <Icon
                            name="plus"
                            size="18"
                            style={{ color: colors.text_grey }}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Natali Romanova</Text>

                <View style={styles.publicationList}>
                    <FlatList data={data}
                        renderItem={({ item }) =>
                        (<Publication
                            image={item.image}
                            title={item.title}
                            location={item.location}
                            comments={item.comments}
                            likes={item.likes}
                            outerStyle={styles.publication}
                        />)}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>

    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
    },
    innerContainer: {
        gap: 16,
    },
    image_bg: {
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
    },
    avatarWrapper: {
        position: "absolute",
        top: -10,
        left: "50%",
        transform: [{ translateX: -50 }, { translateY: -50 }],
        width: 120,
        height: 120,
        backgroundColor: colors.light_grey,
        borderRadius: 16,
    },
    avatarIcon: {
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
    },
    avatarIconButton: {
        position: "absolute",
        transform: [{ rotate: "-45deg" }],
        top: 80,
        right: -12,
        width: 25,
        height: 25,

        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
        borderColor: colors.text_grey,
        borderRadius: 100,
        borderWidth: 1,
    },
    text: {
        alignSelf: "center",
        color: colors.white,
        fontSize: 30,
    },
    formContainer: {
        // flex: 1,
        position: "absolute",
        bottom: 0,
        backgroundColor: colors.white,
        width: SCREEN_WIDTH,
        height: "80%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 92,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 30,
        fontWeight: "500",
        lineHeight: 36,
        alignSelf: "center",
        marginBottom: 32,
    },
    publicationList: {
        width: "100%",
        height: 500,
    },
    likesWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },


});
