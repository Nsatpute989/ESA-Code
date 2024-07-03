import { View, Text, Button, RootTagContext, FlatList, Image, StyleSheet, Alert, ImageSourcePropType, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from './HomeTab'
import appData from '../resources/appData.json'
import { localImages } from '../resources/LocalImages'
import { appColor } from '../resources/AppColor'

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>
}

export interface PanelState {
  name: string,
  thumbnailImage: string,
  image: string,
  id: number,
  description: string,
  features: string[],
  specification: SpecificationType[]
}

export type SpecificationType = {
  [key: string]: string;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [panelList, setPanelList] = useState<PanelState[]>([])
  const { container, list, listItem, viewTextStyle, title } = stylesheet;

  useEffect(() => {
    setPanelList(appData)
  }, []);


  return (
    <View style={container}>
      <FlatList
        style={list}
        data={panelList}
        renderItem={({ item }: { item: PanelState }) => {
          return <TouchableWithoutFeedback onPress={() => {
            navigation.navigate('DetailsScreen', { panel: item })
          }}>
            <View style={listItem}>

              <Image
                source={localImages[item.image]}
                style={stylesheet.imageBox} />
              <View style={viewTextStyle}>
                <Text style={title}>{item.name}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>


        }}
      />
    </View>
  )
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.bgColor,
  },
  list: {
    paddingHorizontal: 10,
    backgroundColor: appColor.bgColor,

  },
  listItem: {
    marginVertical: 20,
    borderRadius: 15,
   borderColor: 'black',
   borderWidth: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
   elevation: 14,
    alignItems: 'center',
    width: '100%',
    //height: 260,
    overflow: "hidden"
  },

  imageBox: {
    width: "100%",
    height: 200,

  },
  title: {
    fontSize: 36,
    color: 'white',
    //fontFamily: 'Fuzzy Bubbles Bold'
  },
  viewTextStyle: {
     justifyContent: 'center',
    width: '100%',
    backgroundColor: appColor.themePrimayColor,
    alignItems: 'center'
  }

})

export default HomeScreen