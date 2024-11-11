import { View, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import { colors } from "../../styles/global";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const MapScreen = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      const grantedLocation = await Location.reverseGeocodeAsync(
        location.coords,
      );

      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: location ? location.latitude : 48.5058,
          longitude: location ? location.longitude : 35.0699,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        onMapReady={() => console.log("Map is ready")}
        mapType="standard"
        minZoomLevel={15}
        cameraZoomRange={{
          minCenterCoordinateDistance: 30,
          maxCenterCoordinateDistance: 10,
        }}
      >
        {location && (
          <Marker
            title="Місцезнаходження"
            description="Тут знаходиться маркер"
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            onPress={() => console.log("marker is pressed")}
          />
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
