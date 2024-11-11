import { StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../styles/global";

const Comment = ({ text, avatar, date, isEven }) => {
  return (
    <View
      style={[
        styles.container,
        isEven ? styles.evenComment : styles.oddComment,
      ]}
    >
      {!isEven && (
        <Image source={avatar} style={[styles.avatar, styles.avatarLeft]} />
      )}
      <View
        style={[
          styles.commentWrapper,
          !isEven ? styles.commentWrapperLeft : styles.commentWrapperRight,
        ]}
      >
        <Text style={styles.text}>{text}</Text>
        <Text style={[styles.date, !isEven && styles.dateLeft]}>{date}</Text>
      </View>
      {isEven && (
        <Image source={avatar} style={[styles.avatar, styles.avatarRight]} />
      )}
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 24,
  },
  evenComment: {
    justifyContent: "flex-end",
  },
  oddComment: {
    justifyContent: "flex-start",
  },
  commentWrapper: {
    width: 300,
    backgroundColor: colors.light_grey,
    padding: 16,
    borderRadius: 6,
  },
  commentWrapperLeft: {
    alignSelf: "flex-end",
    borderTopLeftRadius: 0,
  },
  commentWrapperRight: {
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },
  avatar: {
    width: 28,
    height: 28,
  },
  avatarLeft: {
    marginRight: 16,
  },
  avatarRight: {
    marginLeft: 16,
  },
  text: {
    marginBottom: 8,
    color: colors.black_primary,
    fontSize: 13,
    lineHeight: 18,
  },
  date: {
    color: colors.text_grey,
    fontSize: 10,
    lineHeight: "normal",
  },
  dateLeft: {
    alignSelf: "flex-end",
  },
});
