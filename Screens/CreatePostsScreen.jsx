import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

import { baseText, colors } from "../styles/global";
import CameraIcon from "../icons/CameraIcon";
import Input from "../components/Input";
import LocationIcon from "../icons/LocationIcon";
import Button from "../components/Button";
import DeleteIcon from "../icons/DeleteIcon";
import React, { useState, useRef, useEffect } from "react";

import Camera from "../components/Camera";
import { uid } from "uid";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapScreen from "./MapScreen";
import LocationPermission from "../components/LocationPermission";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const CreatePostsScreen = () => {
  const [photoUri, setPhotoUri] = useState(null);
  const [namePost, setNamePost] = useState("");
  const [location, setLocation] = useState(null);
  const [geocode, setGeocode] = useState(null);
  // const [isButtonActive, setButtonActive] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isCameraActive, setCameraActive] = useState(false);
  const [isDiabledButton, setIsDiabledButton] = useState(true);

  const navigation = useNavigation();
  const { params: { photo } = {} } = useRoute();
  const { params } = useRoute();

  if (location) {
    console.log("location", location);
  }

  const handleChangeNamePost = value => {
    setNamePost(value);
  };

  const reset = () => {
    setPhotoUri(null);
    setNamePost("");
  };

  const handleSelectPhoto = uri => {
    setPhotoUri(uri);
  };

  const onSubmit = () => {
    const newPost = {
      id: Date.now(),
      userId: uid(),
      namePost,
      imageURL: photoUri,
      comments: [],
      likes: 0,
      location: {
        geoPosition: geocode.coords,
        nameLocation: location,
      },
    };
    reset();
    console.log("submit pressed >>");
    console.log("newPost >>", newPost);
  };

  return (
    <View style={styles.container}>
      <LocationPermission setLocation={setLocation} setGeocode={setGeocode} />

      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        {photo ? (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: photo }} style={styles.photo} />
          </View>
        ) : (
          <View style={styles.imageWrapper}>
            <View style={styles.centerPhotoAriaCircle}>
              <CameraIcon />
            </View>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsGalleryOpen(true)}>
        <Text style={[baseText, styles.photoAriaTitle]}>Завантажте фото</Text>
      </TouchableOpacity>

      <View style={styles.inputWrapper}>
        <Input
          outerStyles={styles.input}
          placeholder="Назва..."
          value={namePost}
          onChange={handleChangeNamePost}
        />
        <Input
          outerStyles={[styles.input, styles.locationInput]}
          placeholder="Місцевість..."
          value={location}
          autoFocus="true"
          onChange={() => {}}
          rightButton={<LocationIcon />}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          outerStyles={[styles.buttonSubmit]}
          onPress={() => {
            navigation.navigate("Main");
            onSubmit();
          }}
        >
          <Text style={[baseText, styles.textButtonSubmit]}>Опубліковати</Text>
        </Button>
        <Button outerStyles={styles.buttonDelete} onPress={reset}>
          <DeleteIcon />
        </Button>
      </View>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: colors.white,
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    marginBottom: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: colors.border_grey,
  },
  photo: {
    width: "100%",
    height: 240,
  },
  centerPhotoAriaCircle: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: colors.text_grey,
  },
  photoAriaTitle: {
    color: colors.text_grey,
    marginBottom: 32,
  },
  subButtonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: colors.light_grey,
    marginBottom: 50,
  },
  isActive: {
    backgroundColor: colors.accent,
  },
  textButtonSubmit: {
    textAlign: "center",
    color: colors.text_grey,
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
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    width: SCREEN_WIDTH,
    height: "100%",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  deletePhotoButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
