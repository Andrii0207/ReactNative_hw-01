import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Publication from "../components/Publication";
import User from "../components/User";

import data from "../assets/data/postData";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <User style={styles.user} />

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

export default HomeScreen;

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
