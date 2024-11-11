import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/LoginScreen";
import RegistrationScreen from "../../screens/RegistrationScreen";
import BottomTabNavigator from "./BottomTabNavigtion";
import CommentsScreen from "../../screens/CommentsScreen";
import GoBackArrowIcon from "../../icons/GoBackArrowIcon";
import GobackButton from "../../components/ButtonGoback";
import { useNavigation } from "@react-navigation/native";
import MapScreen from "../../screens/MapScreen";
import CameraScreen from "../../screens/CameraScreen";

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