import { useState } from "react";
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Button, Alert, Image } from "react-native"
import { colors } from "../styles/global"
import ImageBG from "../assets/images/bg_image.png"

const RegistrationScreen = () => { 
     const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    <Image
                    source={ImageBG}
                    resizeMode="cover"
                    style={styles.image_bg}
                />
            </KeyboardAvoidingView>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default RegistrationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image_bg: {
        width: "100%",
        height: "100%"
    }
})