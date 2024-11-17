import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
// import { NavigationContainer } from "@react-navigation/natrive";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import LoginScreen from "./src/screens/LoginScreen";
import CommentsScreen from "./src/screens/CommentsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";
// import StackNavigator from "./src/navigation/StackNavigator";

SplashScreen.preventAutoHideAsync();
const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (

    <RegistrationScreen />


    // <Provider store={store.store}>
    //   <PersistGate
    //     loading={<Text>Loading...</Text>}
    //     persistor={store.persistor}
    //   >
    //     <NavigationContainer>
    //       <StatusBar style="auto" />
    //       {/* <StackNavigator /> */}
    //     </NavigationContainer>
    //   </PersistGate>
    // </Provider>
  )
}
