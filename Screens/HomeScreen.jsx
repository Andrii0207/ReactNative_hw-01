import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/global";
import User from "../components/User";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("user pressed")}>
        <User />
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
});
