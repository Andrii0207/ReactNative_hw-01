import { StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

import { baseText, colors } from "../../styles/global";

const Input = ({
  placeholder,
  outerStyles,
  isSecure,
  rightButton,
  autoFocus = "false",
  onChange,
  value,
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
        onChangeText={onChange}
        value={value}
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
