import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import { baseText, colors } from "../styles/global";
import CameraIcon from "../icons/CameraIcon";
import Input from "../components/Input";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.photoAria}>
        <View style={styles.centerPhotoAriaCircle}>
          <CameraIcon />
        </View>
      </View>
      <Text style={[baseText, styles.photoAriaTitle]}>Завантажте фото</Text>
      <View style={styles.inputWrapper}>
        <Input outerStyles={styles.input} placeholder="Назва..." />
        <Input outerStyles={styles.input} placeholder="Місцевість..." />
      </View>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 76,
  },
  photoAria: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    marginBottom: 8,
    backgroundColor: colors.light_grey,
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: colors.border_grey,
  },
  centerPhotoAriaCircle: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: colors.white,
  },
  photoAriaTitle: {
    color: colors.text_grey,
    marginBottom: 32,
  },
  inputWrapper: {
    gap: 16,
  },
  input: {
    paddingHorizontal: 0,
    borderColor: "transparent",
    borderBottomWidth: 1,
    borderRadius: 0,
    borderBottomColor: colors.border_grey,
    backgroundColor: colors.white,
  },
});
