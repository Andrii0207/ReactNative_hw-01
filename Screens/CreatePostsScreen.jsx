import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { baseText, colors } from "../styles/global";
import CameraIcon from "../icons/CameraIcon";
import Input from "../components/Input";
import LocationIcon from "../icons/LocationIcon";
import Button from "../components/Button";
import DeleteIcon from "../icons/DeleteIcon";
import React, { useState, useRef, useEffect } from "react";
import Entypo from "@expo/vector-icons/Entypo";

import Camera from "../components/Camera";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const CreatePostsScreen = () => {
  const [photoUri, setPhotoUri] = useState(null);
  const [namePost, setNamePost] = useState("");
  const [location, setLocation] = useState(null);
  const [geocode, setGeocode] = useState(null);
  // const [isButtonActive, setButtonActive] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isCameraActive, setCameraActive] = useState(false);

  const [facing, setFacing] = useState("back");
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [libraryPermission, requestLibraryPermission] =
    MediaLibrary.usePermissions();
  const camera = useRef();

  // const userId = user.uid;

  useEffect(() => {
    const requestPermissions = async () => {
      if (!cameraPermission || !libraryPermission) {
        await requestCameraPermission();
        await requestLibraryPermission();
      }
    };
    requestPermissions();
  }, [cameraPermission, libraryPermission]);

  if (!cameraPermission) {
    return <View />;
  }

  if (!cameraPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Ми потребуємо вашого дозволу для використання камери
        </Text>
        <Button onPress={requestCameraPermission} title="Надати дозвіл" />
      </View>
    );
  }

  const handleChangeNamePost = value => {
    setNamePost(value);
  };

  const takePhoto = async () => {
    if (!camera.current) return;
    console.log("namePost", namePost);

    const image = await camera.current.takePictureAsync();
    await MediaLibrary.saveToLibraryAsync(image.uri);
    setPhotoUri(image.uri);
    // onCapture(image.uri);
  };

  function toggleCameraFacing() {
    setFacing(current => (current === "back" ? "front" : "back"));
  }

  const clearAllInfo = () => {
    console.log(namePost);
    if (!photoUri || !namePost) return;
    setPhotoUri(null);
    setNamePost("");
    // setLocation(null);
    // setGeocode(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        {photoUri ? (
          <View style={styles.photoWrapper}>
            <Image
              source={{ uri: photoUri }}
              style={{ width: SCREEN_WIDTH, height: "100%" }}
            />
            <TouchableOpacity
              style={styles.deletePhotoButton}
              onPress={() => setPhotoUri(null)}
            >
              <Entypo name="cross" size={24} color={colors.accent} />
            </TouchableOpacity>
          </View>
        ) : (
          <CameraView style={styles.camera} facing={facing} ref={camera}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={toggleCameraFacing}
              >
                <Text style={styles.text}>Flip Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={takePhoto}>
                <View style={styles.centerPhotoAriaCircle}>
                  <CameraIcon width={40} height={40} />
                </View>
              </TouchableOpacity>
            </View>
          </CameraView>
        )}

        {/* <View style={styles.centerPhotoAriaCircle}>
            <CameraIcon />
          </View> */}
      </View>

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
        <Button outerStyles={styles.buttonSubmit}>
          <Text style={[baseText, styles.textButtonSubmit]}>Опубліковати</Text>
        </Button>
        <Button outerStyles={styles.buttonDelete} onPress={clearAllInfo}>
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
