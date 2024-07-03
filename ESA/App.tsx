import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import AppTab from './src/components/AppTab'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { appColor } from './src/resources/AppColor'


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={appColor.themePrimayColor}
        hidden={false}
      />
      <NavigationContainer>
      <AppTab />
    </NavigationContainer>
    </SafeAreaView>
    

  )
}

export default App