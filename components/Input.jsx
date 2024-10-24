import { StyleSheet, TextInput, View } from "react-native"
import { colors } from "../styles/global";

const Input = ({ placeholder, outerStyles, isSecure, rightButton}) => { 
    return (
        <View style={[styles.input, outerStyles]}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={isSecure}
                autoCapitalize="none"
            />
            {rightButton}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.border_grey,
        backgroundColor: colors.light_grey,
        padding: 16,
    }

})


export default Input;