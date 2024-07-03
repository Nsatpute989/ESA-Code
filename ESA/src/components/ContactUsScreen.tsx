import { View, Text, StyleSheet, TextInput, Button, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { appColor } from '../resources/AppColor'
import { Alert } from 'react-native'

const ContactUsScreen = () => {

  const handleSendMessage = () => {
    showAlert()
  }

  const showAlert = () => {
    Alert.alert(
      'Thank You',
      'Out team will shortly in touch with you!!!',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Contact US</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Full Name"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mobile Number"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Write you query"
          placeholderTextColor="white"
        />
      </View>
      <Button title='Request Quote' onPress={handleSendMessage}></Button>
    </View>
  )


}

export default ContactUsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  sectionTitle: {
    fontSize: 26,
   // fontFamily: 'Fuzzy Bubbles Bold',
    fontWeight: 'bold',
    paddingBottom: 10
  },
  inputView: {
    width: "100%",
    backgroundColor: appColor.darkGray,
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  buttonStyle: {
    backgroundColor: appColor.themePrimayColor,
    color: 'white'
  }
})