import { View, Text, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from './HomeTab'
import { useRoute } from '@react-navigation/native'
import { localImages } from '../resources/LocalImages'
import { PanelState, SpecificationType } from './HomeScreen'
import { appConstant } from '../resources/AppConstants'

interface DetailsScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'DetailsScreen'>
}

const DetailsScreen = ({ navigation }: DetailsScreenProps) => {
  const route = useRoute()
  const { panel } = route.params

  return (
    <ScrollView>
      <View style={styleSheet.container}>
        <Image
          source={localImages[panel.image]}
          style={styleSheet.imageBox} />
        <Text style={styleSheet.textStyle}>{panel.description}</Text>
        <Text style={styleSheet.sectionStyle}>{appConstant.feature}</Text>
        <FlatList
          scrollEnabled={false}
          data={panel.features}
          renderItem={({ item }: { item: String }) => {
            return <View style={styleSheet.listItem}>
              <Text style={styleSheet.dotStyle}>{'\u2022'}</Text>
              <Text style={{width: 20}}></Text>
              <Text style={styleSheet.featureStyle}>{item}</Text>
            </View>
          }}
        />

        <Text style={styleSheet.sectionStyle}>{appConstant.specifications}</Text>
        <FlatList
          scrollEnabled={false}
          data={panel.specification}
          renderItem={({ item }: { item: SpecificationType }) => {
            return <View style={styleSheet.specificationStyle}>
              <Text style={styleSheet.specificationKeyStyle}>{item.key}</Text>
              <Text style={{width: 50}}></Text>
               <Text style={styleSheet.specificationValueStyle}>{item.value}</Text>
             </View>
          }}
        />
      </View>

    </ScrollView>
  )
}

export default DetailsScreen

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  imageBox: {
    width: "100%",
    height: 220,
  },
  textStyle: {
    fontSize: 18,
    //fontFamily: 'Fuzzy Bubbles Regular',
    color: 'black'
  },
  sectionStyle: {
    fontSize: 22,
   // fontFamily: 'Fuzzy Bubbles Bold',
    color: 'black',
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlignVertical: 'top'
  },
  dotStyle: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  featureStyle: {
    fontSize: 18,
   // fontFamily: 'Fuzzy Bubbles Regular',
    color: 'black',
    textAlignVertical: 'top'
  },
  specificationStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  specificationKeyStyle: {
    fontSize: 18,
    fontWeight: '600',
    //fontFamily: 'Fuzzy Bubbles Bold'
    
  },
  specificationValueStyle: {
    fontSize: 18,
   // fontFamily: 'Fuzzy Bubbles Regular',
    color: 'black',
    width: '45%'
  }


})