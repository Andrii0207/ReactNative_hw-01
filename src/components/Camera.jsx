import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import { colors } from "../../styles/global";

const Camera = ({ onCapture }) => {
  const [facing, setFacing] = useState("back");
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [libraryPermission, requestLibraryPermission] =
    MediaLibrary.usePermissions();
  const camera = useRef();

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

  const takePhoto = async () => {
    if (!camera.current) return;

    const image = await camera.current.takePictureAsync();
    await MediaLibrary.saveToLibraryAsync(image.uri);
    onCapture(image.uri);
    // console.log("image", image);
  };

  function toggleCameraFacing() {
    setFacing(current => (current === "back" ? "front" : "back"));
  }

  return (
    <CameraView style={styles.camera} facing={facing} ref={camera}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <View style={styles.centerPhotoAriaCircle}>
            <CameraIcon width={40} height={40} />
          </View>
        </TouchableOpacity>
      </View>
    </CameraView>
  );
};

export default Camera;

const styles = StyleSheet.create({
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    width: "100%",
    height: 489,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 15,
  },
  button: {
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.whites,
  },
});
