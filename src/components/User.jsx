import { Image, StyleSheet, Text, View } from "react-native";

import { colors } from "../../styles/global";

const User = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/avatar_icon.png")}
        resizeMode="cover"
        style={styles.avatarImage}
      />
      <View style={styles.userDataWrapper}>
        <Text style={styles.userName}>Natali Romanova</Text>
        <Text style={styles.userEmail}>email@example.com</Text>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    marginBottom: 32,
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userDataWrapper: {
    height: 60,
    justifyContent: "center",
  },
  userName: {
    fontSize: 13,
    fontWeight: "700",
    lineHeight: "normal",
    color: colors.black_primary,
  },
  userEmail: {
    fontSize: 11,
    lineHeight: "normal",
    color: (33, 33, 33, 0.8),
  },
});
