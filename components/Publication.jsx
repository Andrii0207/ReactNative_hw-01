import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CommentsIcon from "../icons/CommentsIcon";
import { baseText, colors } from "../styles/global";
import LikesIcon from "../icons/LikesIcon";
import LocationIcon from "../icons/LocationIcon";

const Publication = ({
  image,
  title,
  location,
  comments,
  likes = 0,
  outerStyle,
}) => {
  return (
    <View style={[styles.container]}>
      <Image source={image} style={styles.image} />
      <Text style={[baseText, styles.title]}>{title}</Text>
      <View style={styles.statisticWrapper}>
        <View style={styles.commentsWrapper}>
          <CommentsIcon isActive={comments && comments} />
          <Text style={[baseText, !comments && styles.commentsCounter]}>
            {comments}
          </Text>
        </View>
        {likes !== 0 && (
          <TouchableOpacity style={styles.likesWrapper}>
            <LikesIcon />
            <Text style={baseText}>{likes}</Text>
          </TouchableOpacity>
        )}
        <View style={styles.locationWrapper}>
          <LocationIcon />
          <Text style={[baseText, styles.location]}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Publication;

const styles = StyleSheet.create({
  container: {
    marginBottom: 34,
  },
  statisticWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "100%",
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    fontWeight: "500",
    marginBottom: 8,
  },
  commentsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  commentsCounter: {
    color: colors.text_grey,
  },
  likesWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  location: {
    textDecorationLine: "underline",
  },
});
