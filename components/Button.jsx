import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../styles/global";

const Button = ({ children, onPress, outerStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, outerStyle]}>
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
