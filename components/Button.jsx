import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../styles/global";

const Button = ({ children, onPress, outerStyles, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, outerStyles]}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    borderRadius: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
});

export default Button;
