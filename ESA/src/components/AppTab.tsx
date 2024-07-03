import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import AboutScreen from './AboutScreen'
import ContactUsScreen from './ContactUsScreen'
import HomeTab from './HomeTab'
import { appColor } from '../resources/AppColor'
import { Image } from 'react-native'

const Tab = createBottomTabNavigator()

const AppTab = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeTab'
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: appColor.themePrimayColor,
        tabBarInactiveBackgroundColor: appColor.darkGray,
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarShowLabel: true,
        headerStyle: {
          backgroundColor: appColor.themePrimayColor
        },
        headerTintColor: 'white'

      }}>
      <Tab.Screen name='HomeTab' component={HomeTab} options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('../resources/images/home.png')}
            style={{ width: size, height: size, marginTop: 5, tintColor: color }}
          />
        )
      }} />
      <Tab.Screen name='AboutScreen' component={AboutScreen} options={{ 
        headerShown: true, 
        title: 'About Us', 
        tabBarLabel: 'About',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('../resources/images/about.png')}
            style={{ width: size, height: size, marginTop: 5, tintColor: color }}
          />
        )
         }} />
      <Tab.Screen name='ContactUsScreen' component={ContactUsScreen} options={{ 
        headerShown: true, 
        title: 'Contact Us', 
        tabBarLabel: 'Contact',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('../resources/images/contact.png')}
            style={{ width: size, height: size, marginTop: 5, tintColor: color }}
          />
        ) 
        }} />
    </Tab.Navigator>

  )
}

export default AppTab