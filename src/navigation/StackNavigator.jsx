import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import CameraScreen from "../screens/CameraScreen";
import CommentsScreen from "../screens/CommentsScreen";
import MapScreen from "../screens/MapScreen";

import GobackButton from "../components/ButtonGoback";
import GoBackArrowIcon from "../components/ButtonGoback";
import BottomTabNavigator from "./BottomTabNavigtion";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        presentation: "card",
        headerLeftContainerStyle: { padding: 16 },
        headerRightContainerStyle: { padding: 16 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SingUp" component={RegistrationScreen} />
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: true,
          title: "Карта",
          headerLeft: () => (
            <GobackButton
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <GoBackArrowIcon />
            </GobackButton>
          ),
        }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerShown: true,
          title: "Коментарі",
          headerLeft: () => (
            <GobackButton
              onPress={() => {
                navigation.goBack();
              }}
            >
              <GoBackArrowIcon />
            </GobackButton>
          ),
        }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          headerShown: true,
          title: "Камера",
          headerLeft: () => (
            <GobackButton
              onPress={() => {
                navigation.goBack();
              }}
            >
              <GoBackArrowIcon />
            </GobackButton>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
