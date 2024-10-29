import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
import { colors } from "../styles/global";

import Comment from "../components/Comment";
import Input from "../components/Input";
import Button from "../components/Button";
import ArrowUp from "../icons/ArrowUp";
import comments from "../assets/data/postComment";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const CommentsScreen = () => {
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

      <View style={styles.inputWrapper}>
        <Input placeholder="Коментувати..." outerStyles={styles.input} />
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => console.log("Comment sent")}
            buttonStyle={styles.button}
          >
            <ArrowUp style={styles.icon} />
          </Button>
        </View>
      </View>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 76,
    position: "relative",
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
    // position: "absolute",
    // top: 0,
    // right: 0,
    width: SCREEN_WIDTH,
    height: "100%",
  },

  inputWrapper: {
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    right: 10,
    top: 8,
    marginBottom: 16,
  },
  input: {
    justifyContent: "center",
    borderRadius: 100,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    padding: 8,
    paddingLeft: 16,
  },
  buttonWrapper: {
    position: "absolute",
    right: 10,
    top: 8,
  },
  button: {
    width: 34,
    height: 34,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  icon: {
    // position: "absolute",
  },
});
