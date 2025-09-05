import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ProfileScreen from "../screens/ProfileScreen";

import Ionicons from "react-native-vector-icons/Ionicons";
import { RootStackParamList } from "./types";
import { Button, Text, View } from "react-native";
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
// import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

// ✅ Bottom Tabs
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle:{backgroundColor:'#DCF9FA'},
        tabBarLabelStyle:{color:'green'},
        tabBarActiveTintColor:"red",
  
         headerShown: false, 
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarInactiveTintColor: "gray",
      })}>
      <Tab.Screen name="Home" component={DashboardScreen}   />
      
      <Tab.Screen name="Profile" component={ProfileScreen}     initialParams={{ name: "default" }}/>
    </Tab.Navigator>
  );
}

//Drawer Navigator (includes Tabs + About)
function DrawerNavigator() {
  return (
    <Drawer.Navigator 
    screenOptions={{
             headerTitle: () => (
       <View style={{ flex: 1, alignItems: "center", justifyContent: "center",flexDirection:"row" }}>
        <Text style={{ fontSize: 18,color:'white' }}>My Title</Text>

      </View>
    ),
    // headerLeft: () => <Text>👈</Text>,
    headerRight: () => <Button title="?" />,
    headerTitleAlign: "center",
    headerStyle:{
      backgroundColor:'white',
      
    },
    headerTintColor:"green",
    headerTitleStyle:{
      color:'white'
    },
    drawerStyle:{
      backgroundColor:'white',
      
    },
    drawerPosition:"left",
    drawerActiveTintColor:"red",
    drawerContentStyle:{padding:0}
     // still keep it
  }}
    >
      <Drawer.Screen
        name="Home"
        component={Tabs}
      />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Entire drawer sits inside Stack */}
        <Stack.Screen
          name="Home" 
          
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
