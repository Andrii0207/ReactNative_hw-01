import { useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";
import { baseText, colors } from "../../styles/global";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const LoginScreen = ({ navigation, route }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const showInputPassword = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const SingIn = () => {
    console.log("singin pressed");
    navigation.navigate("Home");
  };

  const SingUp = () => {
    console.log("singup pressed");
    navigation.navigate("SingUp");
  };

  const showButton = (
    <TouchableOpacity onPress={showInputPassword}>
      <Text style={[baseText, styles.baseButtonText]}>
        {isPasswordVisible ? "Показати" : "Сховати"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/images/bg_image.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "height" : "padding"}
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Увійти</Text>
            <View style={styles.inputWrapper}>
              <Input placeholder="Адреса електронної пошти" autoFocus="true" />
              <Input
                placeholder="Пароль"
                rightButton={showButton}
                isSecure={isPasswordVisible}
                outerStyles={styles.showPassword}
              />
            </View>
            <Button outerStyles={{ marginBottom: 16 }} onPress={SingIn}>
              <Text
                style={[baseText, styles.baseButtonText, styles.logInButton]}
              >
                Увійти
              </Text>
            </Button>

            <View style={styles.singUpContainer}>
              <Text style={[baseText, styles.baseButtonText]}>
                Немає акаунту?{" "}
                <TouchableWithoutFeedback onPress={SingUp}>
                  <Text style={styles.singUpText}>Зареєструватися</Text>
                </TouchableWithoutFeedback>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  formContainer: {
    position: "absolute",
    bottom: 0,
    width: SCREEN_WIDTH,
    height: "63%",
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginBottom: 32,
    color: colors.black_primary,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
  },
  inputWrapper: {
    gap: 16,
    marginBottom: 43,
  },
  showPassword: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  baseButtonText: {
    color: colors.blue,
  },
  logInButton: {
    textAlign: "center",
    color: colors.white,
  },
  singUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  singUpText: {
    textDecorationLine: "underline",
  },
});
