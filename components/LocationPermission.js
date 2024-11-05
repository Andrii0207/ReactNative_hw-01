import React, { useEffect, useState } from "react";
import { Alert, Platform } from "react-native";
import * as Location from "expo-location";

const LocationPermission = ({ setLocation, setGeocode }) => {
    useEffect(() => {
        const fetchLocation = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();

                if (status !== "granted") {
                    Alert.alert(
                        "Дозвіл на локацію",
                        "Додаток потребує доступу до вашого місцеположення. Увімкніть доступ у налаштуваннях пристрою."
                    );
                    return;
                }

                let geoLocation = await Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.High,
                });
                console.log("geoLocation >>", geoLocation)
                setGeocode(geoLocation);

                const grantedLocation = await Location.reverseGeocodeAsync(
                    geoLocation.coords
                );
                const country = grantedLocation[0]?.country || "Невідомо";
                const city = grantedLocation[0]?.city || "Невідомо";
                setLocation(`${country}, ${city}`);
            } catch (error) {
                Alert.alert(
                    "Помилка отримання локації",
                    "Переконайтеся, що GPS увімкнено та надано доступ до локації для додатку."
                );
                console.error("Помилка отримання локації:", error);
            }
        };
        fetchLocation();
    }, []);

    return null;
};

export default LocationPermission;