import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen"
import CreatePostsScreen from "./screens/CreatePostsScreen";
import CommentsScreen from "./screens/CommentsScreen";
import PublicationScreen from "./screens/PublicationScreen";

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


    // <RegistrationScreen />
    // < LoginScreen />
    <PublicationScreen />
    // <CreatePostsScreen />
    // <CommentsScreen />


  );
}
