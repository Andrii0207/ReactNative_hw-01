import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CreatePostsScreen from "../../screens/CreatePostsScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import PostsScreen from "../../screens/PostsScreen";
import LogoutButton from "../../components/LogoutButton";
import GobackButton from "../../components/ButtonGoback";

import GoBackArrowIcon from "../../icons/GoBackArrowIcon";
import { colors } from "../../styles/global";

const Tabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabel: "",
        tabBarStyle: { height: 70 },
        headerTitleAlign: "center",
        tabBarStyle: {
          height: 83,
          paddingTop: 10,
          borderTopWidth: 1,
          borderTopColor: colors.text_grey,
        },
      }}
    >
      <Tabs.Screen
        name="Main"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <LogoutButton
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
          ),
          tabBarIcon: ({ focused }) => (
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
          headerLeft: () => (
            <GobackButton
              onPress={() => {
                navigation.navigate("Main");
              }}
            >
              <GoBackArrowIcon />
            </GobackButton>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.addButton}>
              <Ionicons name="add-outline" size={24} color={colors.white} />
            </View>
          ),
          tabBarStyle: { display: "none" },
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
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-outline"
              size={24}
              color={focused ? colors.accent : colors.black_primary}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.accent,
    borderRadius: 20,
  },
  isFocused: {
    position: "absolute",
    top: 0,
    backgroundColor: colors.light_grey,
  },
});
