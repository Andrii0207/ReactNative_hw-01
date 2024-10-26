import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../styles/global";
import { useState } from "react";

const Input = ({ placeholder, outerStyles, isSecure, rightButton }) => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => {
    console.log("isFocus", isFocus);
    setIsFocus(true);
  };

  const onBlur = () => {
    console.log("onBlur", onBlur);
    setIsFocus(false);
  };

  return (
    <View style={[styles.input, { borderColor: colors.accent }, outerStyles]}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {rightButton}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border_grey,
    backgroundColor: colors.light_grey,
    padding: 16,
  },
});

export default Input;
