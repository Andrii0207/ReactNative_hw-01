import { useState } from "react";
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Button, Alert, Image, Text, Dimensions, TouchableOpacity } from "react-native"
import { colors } from "../styles/global"
import Input from "../components/Input";

const { width: SCREEN_WIDTH} = Dimensions.get("screen")

const RegistrationScreen = () => { 
     const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
    };
    
    const showButton = (
        <TouchableOpacity>
            <Text style={styles.showButton}>Показати</Text>
        </TouchableOpacity>
    )

    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {/* <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}> */}
                    <Image
                        source={require("../assets/images/bg_image.png")}
                        resizeMode="cover"
                        style={styles.image_bg}
                    />
                {/* </KeyboardAvoidingView> */}
            
            <View style={styles.formContainer}>
                <Text style={styles.title}>Реєстрація</Text>
                <View style={styles.innerContainer}>
                    <Input placeholder="Логін"/>
                    <Input placeholder="Адреса електронної пошти"/>
                    <Input
                        placeholder="Пароль"
                        rightButton={showButton}
                        outerStyles={styles.passwordButton}
                    />
                </View>
                <View ></View>
                <View></View>
                <View></View>
            </View>
            </View>
        // </TouchableWithoutFeedback>
    )
}

export default RegistrationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
        zIndex: -1,
    },
    text: {
        alignSelf: "center",
        color: colors.white,
        fontSize: 24,
    },
    formContainer: {
        position: "absolute",
        bottom: 0,
        backgroundColor: colors.white,
        width: SCREEN_WIDTH,
        height: "55%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 92,
        paddingHorizontal: 16,
    },
    title: {
        fontWeight: "500",
        lineHeight: 36,
        fontSize: 30,
        alignSelf: "center",
        marginBottom: 32,
    },
    showButton: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 18,
        color: colors.blue,
        
    },
    passwordButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
    }
})