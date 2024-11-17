import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CameraIcon from "../../icons/CameraIcon";
import { colors } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";

const CameraScreen = ({ route }) => {
  const [facing, setFacing] = useState("back");
  const [photoUri, setPhotoUri] = useState(null);
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [libraryPermission, requestLibraryPermission] =
    MediaLibrary.usePermissions();

  const cameraRef = useRef();
  const navigation = useNavigation();

  useEffect(() => {
    const requestPermissions = async () => {
      if (!cameraPermission || !libraryPermission) {
        await requestCameraPermission();
        await requestLibraryPermission();
      }
    };
    setPhotoUri();
    requestPermissions();
  }, [cameraPermission, libraryPermission]);

  if (!cameraPermission) {
    return <View />;
  }

  if (!cameraPermission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Надайте дозвіл на вмикання камери</Text>
        <Button onPress={requestCameraPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === "back" ? "front" : "back"));
  }

  const createPhoto = async () => {
    if (!cameraRef.current) return;

    const image = await cameraRef.current.takePictureAsync();
    console.log("image", image);
    console.log("image", image.uri);
    await MediaLibrary.saveToLibraryAsync(image.uri);
    setPhotoUri(image.uri);
    navigation.navigate("CreatePost", { photo: image.uri });
  };

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={createPhoto}>
            <View style={styles.centerPhotoAriaCircle}>
              <CameraIcon width={40} height={40} />
            </View>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
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
});
