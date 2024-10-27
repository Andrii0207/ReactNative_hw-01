import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen";
import { Text, View } from "react-native";

const Tabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Login" component={LoginScreen} />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={
          <View>
            <Text>CreatePostsScreen</Text>
          </View>
        }
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={
          <View>
            <Text>ProfileScreen</Text>
          </View>
        }
      />
    </Tabs.Navigator>
  );
};
