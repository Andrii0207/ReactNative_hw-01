import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Publication from "../components/Publication";
import User from "../components/User";

import data from "../assets/data/postData";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <User style={styles.user} />

      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Publication
            title={item.title}
            image={item.image}
            comments={item.comments}
            location={item.location}
            likes={item.likes}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 88,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  user: {
    marginBottom: 32,
  },
});

{
  /* <FlatList
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
/>; */
}

// {
//     id: "data-1",
//     name: "Natali Romanova",
//     email: "email@example.com",
//     avatar: require("../images/avatar_icon.png"),
//     title: "Ліс",
//     image: require("../images/postImage_1.png"),
//     comments: 8,
//     likes: "153",
//     location: "Ivano-Frankivs'k Region, Ukraine",
// }
