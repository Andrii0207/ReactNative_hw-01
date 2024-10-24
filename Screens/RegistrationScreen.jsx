import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors } from "../styles/global";
import Input from "../components/Input";
import Button from "../components/Button";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  // const [inputQuery, setInputQuery] = useState({login: "", email: "", password: ""});

  // const handleInputChange = () => {
  //     console.log("get input data")
  //     setInputQuery((prev) => ({...prev, [input]:value}))
  // }

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

  // const singUp = () => {
  //     Alert.alert("Credentials", `${login} + ${email}+${password}`);
  //     console.log("login ->", login)
  //     console.log("email ->", email)
  //     console.log("password ->", password)
  //     reset();
  //     navigator.navigate("Start")
  // };

  const showButton = (
    <TouchableOpacity onPress={showPassword}>
      <Text style={[styles.baseButonText, styles.passwordButtonText]}>
        {isPasswordVisible ? "Показати" : "Сховати"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <Image
          source={require("../assets/images/bg_image.png")}
          resizeMode="cover"
          style={styles.image_bg}
        />

        <View style={styles.formContainer}>
          <Text style={styles.title}>Реєстрація</Text>

          <View style={styles.innerContainer}>
            <Input
              value={login}
              onChangeText={handleLoginChange}
              placeholder="Логін"
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
              outerStyles={styles.passwordButton}
              isSecure={isPasswordVisible}
            />
          </View>
          <Button buttonStyle={styles.regitrationButton} onPress={() => {}}>
            <Text style={[styles.baseButonText, styles.loginButtonText]}>
              Зареєстуватися
            </Text>
          </Button>

          <View style={styles.singUpContainer}>
            <Text style={styles.baseButonText}>
              Вже є акаунт?{" "}
              <TouchableWithoutFeedback>
                <Text style={styles.singUpText}>Увійти</Text>
              </TouchableWithoutFeedback>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
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
    height: "60%",
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
  baseButonText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
    color: colors.blue,
  },
  passwordButtonText: {
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
