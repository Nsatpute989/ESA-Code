import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import { appColor } from '../resources/AppColor'
import { PanelState } from './HomeScreen'
import { appConstant } from '../resources/AppConstants'

export type RootStackParamList = {
  HomeScreen: undefined,
  DetailsScreen: {
    panel: Readonly<PanelState>
  }
};

const Stack = createNativeStackNavigator<RootStackParamList>()

const HomeTab = () => {
  return (
    <Stack.Navigator screenOptions={{ 
      title: appConstant.appShortName,
      headerStyle: {
        backgroundColor: appColor.themePrimayColor
         },
         headerTintColor: 'white' 
  }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  )

  useEffect(() => {
    console.log("HomeTab")
  },[])
}

export default HomeTab