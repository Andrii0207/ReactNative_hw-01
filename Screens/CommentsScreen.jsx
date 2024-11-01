import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../styles/global";

import Comment from "../components/Comment";
import Input from "../components/Input";
import Button from "../components/Button";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import comments from "../assets/data/postComment";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const CommentsScreen = ({ navigate, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../assets/images/postImage_3.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>

      <FlatList
        data={comments}
        renderItem={({ item, index }) => (
          <Comment
            text={item.text}
            date={item.date}
            avatar={item.userAvatar}
            isEven={index % 2 === 1}
          />
        )}
        keyExtractor={item => item.id}
      />

      <KeyboardAvoidingView
        style={styles.commentContainer}
        behavior={Platform.OS === "ios" ? "height" : "padding"}
      >
        <View style={styles.inputWrapper}>
          <Input outerStyles={styles.input} placeholder="Коментувати..." />
          <Button
            outerStyles={styles.button}
            onPress={() => console.log("comment submit")}
          >
            <ArrowUpIcon />
          </Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    position: "relative",
    backgroundColor: colors.white,
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    marginBottom: 32,
    backgroundColor: colors.light_grey,
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: colors.border_grey,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  commentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  inputWrapper: {
    marginBottom: 16,
  },
  input: {
    borderRadius: 100,
    fontFamily: "Inter-Medium",
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    top: 8,
    right: 16,
    width: 34,
    height: 34,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});

// formContainer: {
//     position: "absolute",
//     bottom: 0,
//     backgroundColor: colors.white,
//     width: SCREEN_WIDTH,
//     height: "75%",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     paddingTop: 92,
//     paddingHorizontal: 16,
//   },
