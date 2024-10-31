import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/AntDesign";

import CreatePostsScreen from "../screens/CreatePostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostsScreen from "../screens/PublicationScreen";
import LogoutButton from "../components/LogoutButton";
import GoBackArrowIcon from "../icons/GoBackArrowIcon";
import { colors } from "../styles/global";
import GobackButton from "../components/ButtonGoback";
import UserIcon from "../icons/UserIcon";
import Button from "../components/Button";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Tabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarLabel: "",
        tabBarStyle: { height: 70 },
        headerTitleAlign: "center",
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
        },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <LogoutButton onPress={() => console.log("logout pressed")} />
          ),
          tabBarIcon: () => (
            <Ionicons
              name="grid-outline"
              size={24}
              color={colors.black_primary}
            />
          ),
          headerRightContainerStyle: { padding: 16 },
          headerLeftContainerStyle: { padding: 16 },
          headerTitle: "Публікації",
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: colors.text_grey,
          },
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          headerLeft: () => <GobackButton onPress={() => {}} />,
          tabBarIcon: () => (
            <Button
              outerStyles={styles.addButton}
              onPress={() => console.log("add pressed")}
            >
              <Ionicons name="add-outline" size={24} color={colors.white} />
            </Button>
          ),
          // tabBarStyle: { display: "none" },
          headerRightContainerStyle: { padding: 16 },
          headerLeftContainerStyle: { padding: 16 },
          headerTitle: "Створити публікацію",
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons
              name="person-outline"
              size={24}
              color={colors.black_primary}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  addButton: {
    paddingVertical: 8,
    paddingHorizontal: 23,
    width: 70,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
