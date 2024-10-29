import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import { baseText, colors } from "../styles/global";
import CameraIcon from "../icons/CameraIcon";
import Input from "../components/Input";
import LocationIcon from "../icons/LocationIcon";
import Button from "../components/Button";
import DeleteIcon from "../icons/DeleteIcon";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const CreatePostsScreen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <View style={styles.centerPhotoAriaCircle}>
          <Image source={require("../assets/images/postImage_1.png")} />
        </View>
      </View>
      <Text style={[baseText, styles.photoAriaTitle]}>Завантажте фото</Text>
      <View style={styles.inputWrapper}>
        <Input outerStyles={styles.input} placeholder="Ліс" />
        <Input
          outerStyles={[styles.input, styles.locationInput]}
          placeholder="Ivano-Frankivs'k Region, Ukraine"
          rightButton={<LocationIcon />}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button buttonStyle={styles.buttonSubmit}>
          <Text style={[baseText, styles.textButtonSubmit]}>Опубліковати</Text>
        </Button>
        <Button buttonStyle={styles.buttonDelete}>
          <DeleteIcon />
        </Button>
      </View>
    </View>
  );
};

export default CreatePostsScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 76,
  },
  imageWrapper: {
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

  photoAriaTitle: {
    color: colors.text_grey,
    marginBottom: 32,
  },
  inputWrapper: {
    gap: 16,
    marginBottom: 32,
  },
  input: {
    paddingHorizontal: 0,
    borderColor: "transparent",
    borderBottomWidth: 1,
    borderRadius: 0,
    borderBottomColor: colors.border_grey,
    backgroundColor: colors.white,
  },
  locationInput: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 4,
  },
  buttonWrapper: {
    alignItems: "center",
  },
  buttonSubmit: {
    width: "100%",
    backgroundColor: colors.accent,
    marginBottom: 120,
  },
  textButtonSubmit: {
    textAlign: "center",
    color: colors.white,
  },
  buttonDelete: {
    flexDirection: "row",
    justifyContent: "center",
    width: 0,
    paddingVertical: 8,
    paddingHorizontal: 35,
    backgroundColor: colors.light_grey,
    marginBottom: 32,
  },
});
