import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";

import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostsScreen from "../screens/PublicationScreen";
import LogoutIcon from "../icons/LogoutIcon";
import ArrowGoBackIcon from "../icons/ArrowGoBackIcon";

const Tabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator initialRouteName="Home" screenOptions={{}}>
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => <LogoutIcon />,
          headerRightContainerStyle: { padding: 16 },
          headerLeftContainerStyle: { padding: 16 },
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          headerLeft: () => <ArrowGoBackIcon />,
          headerRightContainerStyle: { padding: 16 },
          headerLeftContainerStyle: { padding: 16 },
        }}
      />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
