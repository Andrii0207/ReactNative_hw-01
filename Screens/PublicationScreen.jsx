import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/global";
import User from "../components/User";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <User />
    </View>
  );
};
export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
});
