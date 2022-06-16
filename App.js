import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import BookList from "./screens/BookList";
import BookDetails from "./screens/BookDetails";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "./screens/Login";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNest() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BookList"
        component={BookList}
        options={{
          headerStyle: {
            backgroundColor: "#6200EE",
          },
          title: "",
        }}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#6200EE",
          },
          title: "",
        }}
        name="BookDetails"
        component={BookDetails}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={BookList}
        screenOptions={{
          tabBarStyle: { backgroundColor: "#6200EE" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "grey",
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "BookList",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book" color={color} size={size} />
            ),
          }}
          name="TabNest"
          component={TabNest}
        />
        <Tab.Screen
          options={{
            headerStyle: {
              backgroundColor: "#6200EE",
            },
            title: "",
            tabBarLabel: "User",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
          }}
          name="Login"
          component={Login}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
