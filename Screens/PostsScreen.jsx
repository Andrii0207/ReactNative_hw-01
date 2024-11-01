import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import Publication from "../components/Publication";
import User from "../components/User";

import data from "../assets/data/postData";
import { colors } from "../styles/global";

const PostsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
        <User style={styles.user} />
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({ item }) => (
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
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: colors.white,
  },
  user: {
    marginBottom: 32,
  },
});
