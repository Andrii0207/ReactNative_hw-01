import { PersistGate } from "redux-persist/integration/react";
import { ActivityIndicator, Text } from 'react-native';
import { Provider, useDispatch } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import store from "./src/redux/store/store";
import StackNavigator from "./src/navigation/StackNavigator";

SplashScreen.preventAutoHideAsync();
const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
  })

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <AuthListener />
      </PersistGate>
    </Provider>
  );
}


const AuthListener = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   authStateChanged(dispatch);
  // }, [dispatch]);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackNavigator />
    </NavigationContainer>
  );
};