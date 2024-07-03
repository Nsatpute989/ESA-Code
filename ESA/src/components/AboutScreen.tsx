import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const AboutScreen = () => {
  
  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.sectionTitle}>Energy Solutions and Associates</Text>
      <Text style={styleSheet.contentStyle}>Energy Solutions and Associates in Bhopal is one of the leading businesses in the Electrical Control Panel Manufacturers. Also known for Electrical Goods Repair &amp; Services, Electrical Control Panel Manufacturers, Apfc Panel Manufacturers, Star Delta Starter Control Panel Manufacturers, Power Distribution Panel Manufacturers, Changeover Panel Manufacturers, ACB Distribution Panel Manufacturers, Amf Panel Manufacturers and much more. Find Address, Contact Number, Reviews &amp; Ratings, Photos, Maps of Energy Solutions and Associates, Bhopal.</Text>
    </View>
  )

  useEffect(() => {
    console.log("AboutScreen")
  })
}

export default AboutScreen

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  sectionTitle: {
    fontSize: 26,
 //   fontFamily: 'Fuzzy Bubbles Bold',
    fontWeight: 'bold'
  },
  contentStyle: {
    fontSize: 18,
   // fontFamily: 'Fuzzy Bubbles Regular',
    color: 'black',
    paddingTop: 20
  }

})