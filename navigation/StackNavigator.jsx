import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import HomeScreen from "../screens/PostsScreen";
import BottomTabNavigator from "./BottomTabNavigtion";
import PostsScreen from "../screens/HomeScreen";
import CommentsScreen from "../screens/CommentsScreen";
import GoBackArrowIcon from "../icons/GoBackArrowIcon";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native";
import GobackButton from "../components/ButtonGoback";
import { useNavigation } from "@react-navigation/native";

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
        name="Comments"
        component={CommentsScreen}
        options={{
          headerShown: true,
          title: "Коментарі",
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
    </Stack.Navigator>
  );
};

export default StackNavigator;
