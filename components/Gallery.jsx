import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import PhotoGallery from "./PhotoGallery";
import Buttons from "../components/Buttons";
import colors from "../../styles/global";

const Gallery = () => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.listContainer}></View>
        <Buttons onPress={onClose} isButtonActive={true} buttonSize="large">
          Закрити
        </Buttons>
      </View>
    </Modal>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 1,
    width: "100%",
    paddingVertical: 16,
  },
  lists: {
    flex: 1,
    width: "100%",
  },
});
