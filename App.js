import React from "react";
import { View, TouchableOpacity, StyleSheet, Text,  } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
//import Icon from 'react-native-vector-icons/Ionicons'


import NumberScreen from "./src/NumberScreen";
import OtpScreen from "./src/OtpScreen";
import Splash1 from "./src/Splash1";
import Splash2 from "./src/Splash2";
import Splash3 from "./src/Splash3";
import Splash4 from "./src/Splash4";
import Splash5 from "./src/Splash5";
import RegistorScreen from "./src/RegistorScreen";
import SelectSchoolScreen from "./src/SelectSchoolScreen";

import Exam from "./src/Exam";
import Contact from "./src/Contact";
import Home from "./src/Home";
import Recent from "./src/Recent";
import Profile from "./src/ProfileScreen";
import DrawerContent from "./src/Componenets/DrawerContent";
import ClassScreen from "./src/ClassScreen";
import SubjectScreen from "./src/SubjectScreen";
import Videos from "./src/topTabs/Videos";
import ChapterTest from "./src/topTabs/ChapterTest";
import Resources from "./src/topTabs/ChapterTest";
import QNBank from "./src/topTabs/ChapterTest";



const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator()


function MyStack() {
  return (
    <Stack.Navigator>



      <Stack.Screen
        name="NumberScreen"
        component={NumberScreen}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="RegistorScreen"
        component={RegistorScreen}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="SelectSchoolScreen"
        component={SelectSchoolScreen}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Splash1"
        component={Splash1}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Splash2"
        component={Splash2}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Splash3"
        component={Splash3}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Splash4"
        component={Splash4}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Splash5"
        component={Splash5}
        options={{ headerShown: false }} />





      <Stack.Screen
        name="MyDrawer"
        component={MyDrawer}
        options={{ headerShown: false }} />

    </Stack.Navigator>
  )
};

function MyTabs() {
  return (
    <View style={{ height: "100%", width: "100%", }}>
      <Tab.Navigator barStyle={{
        width: "90%", height: "10%",
        backgroundColor: "#fff",
        alignSelf: "center", marginBottom: 20,
        borderRadius: 1,
        borderWidth: 0.7,
        borderColor: "grey",
        overflow: 'hidden',
      }}>

        <Tab.Screen name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Icon name='home' size={20} />)
          }} />

        <Tab.Screen name="Recent"
          component={Recent}
          options={{
            tabBarIcon: () => (
              <Icon name='play' size={20} />)
          }} />

        <Tab.Screen name="Exam"
          component={Exam}
          options={{
            tabBarIcon: () => (
              <Icon name='tasks' size={20} />)
          }} />



        <Tab.Screen name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <Icon name='user' size={20} />)
          }} />


        <Tab.Screen name="Contact"
          component={Contact}
          options={{
            tabBarIcon: () => (
              <Icon name='envelope' size={20} />)
          }} />

      </Tab.Navigator>
    </View>

  );
}



function MyDrawer() {
  return (

    <View style={{ height: "100%", width: "100%", }}>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}>

        <Drawer.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }} />

        <Drawer.Screen
          name="MyTopTab"
          component={MyTopTab}
          options={{ headerShown: false }} />


        <Drawer.Screen name='ClassScreen'
          component={ClassScreen}
          options={{ headerShown: false }} />

        <Drawer.Screen name='SubjectScreen'
          component={SubjectScreen}
          options={{ headerShown: false }} />



        {/* <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} /> */}
      </Drawer.Navigator>
    </View>

  )
}
function MyTopTab({navigation}) {
  return (
    <View
      style={{ flex: 1, }}
    >
      <View style={{ flex: 2, backgroundColor: "#001429", }}>
        <View style={{
          flexDirection: "row", alignItems: "center",
          justifyContent: "center",
        }}>
          <TouchableOpacity style={styles.iconContainer} onPress={() =>navigation.navigate('ClassScreen')}>
            <Icon name='chevron-left' size={30} color='green' ></Icon>
          </TouchableOpacity>
          <Text style={styles.heading}>Biology</Text>
        </View>
        <View style={{
          justifyContent: "flex-end", height: "100%", width: "100%", position: "absolute", left: 20, bottom: 10
        }}>
          <Text style={styles.longTittle}>Long chapter name can be shown here.</Text>
          <View style={{
            flexDirection: "row", alignSelf: "flex-start",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <RadioButton
              color='green'
              value='first'
              status='checked' />
            <Text style={{ color: "#fff", marginRight: 10, marginLeft: 0 }}>12 Chapters</Text>
            <RadioButton
              color='green'
              value='first'
              status='checked' />
            <Text style={{ color: "#fff", }}>124 hours</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 3, }} >


        <TopTab.Navigator
          screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: "#001429" },
            tabBarActiveTintColor: "#000",
            tabBarInactiveTintColor: "grey",
            tabBarLabelStyle: { fontSize: 10 },
            tabBarItemStyle: { width: 100 },
          }}
        >
          <TopTab.Screen

            name='Videos'
            component={Videos}
          />

          <TopTab.Screen
            name='ChapterTest'
            component={ChapterTest} />
          <TopTab.Screen
            name='Resources'
            component={Resources} />
          <TopTab.Screen
            name='QNBank'
            component={QNBank} />
        </TopTab.Navigator>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  iconContainer: {
    height: 40,
    width: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 30,
    top: 20
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 30,
    position: "absolute", top: 20

  },
  longTittle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 10,
  }

})



export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

