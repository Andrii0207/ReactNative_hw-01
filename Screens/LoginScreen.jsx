import { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { colors } from "../styles/global";
import Input from "../components/Input";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const LoginScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const showInputPassword = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const showButton = (
    <TouchableOpacity onPress={showInputPassword}>
      <Text style={styles.baseButtonText}>
        {isPasswordVisible ? "Показати" : "Сховати"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../assets/images/bg_image.png")}
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
              <Input placeholder="Адреса електронної пошти" />
              <Input
                placeholder="Пароль"
                rightButton={showButton}
                isSecure={isPasswordVisible}
                outerStyles={styles.showPassword}
              />
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
    height: "50%",
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
  },
  showPassword: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  baseButtonText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
    color: colors.blue,
  },
});
