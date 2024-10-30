import { StyleSheet, TextInput, View } from "react-native";
import { baseText, colors } from "../styles/global";
import { useState } from "react";

const Input = ({
  placeholder,
  outerStyles,
  isSecure,
  rightButton,
  autoFocus = "false",
}) => {
  const [isFocuses, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.input,
        { borderColor: isFocuses ? colors.accent : colors.border_grey },
        outerStyles,
      ]}
    >
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        // autoFocus={autoFocus}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={baseText}
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
