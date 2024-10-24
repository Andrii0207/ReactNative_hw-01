import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../styles/global';

const Button = ({ children, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    color: colors.white,
    backgroundColor: colors.accent,
    borderRadius: '100%',
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
});

export default Button;
