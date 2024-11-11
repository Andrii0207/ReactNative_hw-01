import { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { baseText, colors } from "../styles/global";
import Input from "../components/Input";
import Button from "../components/Button";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const RegistrationScreen = ({ navigation, route }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleLoginChange = () => {
    console.log("login input");
    setLogin(login);
  };

  const handleEmailChange = () => {
    console.log("email input");
    setEmail(email);
  };

  const handlePasswordChange = () => {
    console.log("password input");
    setPassword(password);
  };

  const reset = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };

  const showPassword = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const onSingUp = () => {
    console.log("Зареєстуватися pressed");
    navigation.navigate("Home");
  };

  const onLogin = () => {
    console.log("login pressed!");
    navigation.navigate("Login");
  };

  const showButton = (
    <TouchableOpacity onPress={showPassword}>
      <Text style={[baseText, styles.baseButtonText]}>
        {isPasswordVisible ? "Показати" : "Сховати"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../assets/images/bg_image.png")}
          resizeMode="cover"
          style={styles.image_bg}
        />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "height" : "padding"}
        >
          <View style={styles.formContainer}>
            <View style={styles.avatarWrapper}>
              <Image
                source={require("../assets/images/avatar_icon.png")}
                resizeMode="cover"
                style={styles.avatarIcon}
              />
              <TouchableOpacity
                style={styles.avatarIconButton}
                onPress={() => console.log("delete avatar RegistrationScreen")}
              >
                <Icon
                  name="plus"
                  size="18"
                  style={{ color: colors.text_grey }}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Реєстрація</Text>

            <View style={styles.innerContainer}>
              <Input
                value={login}
                onChangeText={handleLoginChange}
                placeholder="Логін"
                autoFocus="true"
              />
              <Input
                value={email}
                onChangeText={handleEmailChange}
                placeholder="Адреса електронної пошти"
              />
              <Input
                value={password}
                onChangeText={handlePasswordChange}
                placeholder="Пароль"
                rightButton={showButton}
                isSecure={isPasswordVisible}
                outerStyles={styles.passwordButton}
              />
            </View>
            <Button outerStyles={styles.regitrationButton} onPress={onSingUp}>
              <Text style={[styles.baseButtonText, styles.loginButtonText]}>
                Зареєстуватися
              </Text>
            </Button>

            <View style={styles.singUpContainer}>
              <Text style={[styles.baseButtonText, baseText]}>
                Вже є акаунт?{" "}
                <TouchableWithoutFeedback onPress={onLogin}>
                  <Text style={styles.singUpText}>Увійти</Text>
                </TouchableWithoutFeedback>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    top: 55,
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
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.white,
    width: SCREEN_WIDTH,
    height: "73%",
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
  baseButtonText: {
    color: colors.blue,
  },
  loginButtonText: { color: colors.white, alignSelf: "center" },
  passwordButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  regitrationButton: {
    marginTop: 43,
    marginBottom: 16,
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
