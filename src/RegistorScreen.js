
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
//import { Picker } from '@react-native-picker/picker'
import DropdownScreen from './Componenets/Dropdown'

export default class RegistorScreen extends Component {
  render() {
    return (
      <View style={styles.conatiner}>
        <Image source={require('../assets/logo.png')} style={{ width: "90%", height: 100, marginTop: 100 }} ></Image>
        <Text style={styles.headerText}> Enter your mobile number </Text>
        <Text> We will send you an OTP to verify</Text>

        <View style={styles.bottomContainer}>

          <TextInput style={styles.textFeild} placeholder='Mobile Number' placeholderTextColor="#3e5b5b"></TextInput>
          <TextInput style={styles.textFeild} placeholder='Email' placeholderTextColor="#3e5b5b"></TextInput>
          <DropdownScreen>
         
          </DropdownScreen>
         





          <TextInput style={styles.textFeild} placeholder='Pin Code ' placeholderTextColor="#3e5b5b"></TextInput>
          <TouchableOpacity style={styles.otpButton}
            onPress={() => this.props.navigation.navigate('SelectSchoolScreen')}
          >
            <Text style={styles.otpButtonText}>Registor</Text>
          </TouchableOpacity>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#red",
    alignItems: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#001429",
    marginTop: 100
  },
  bottomContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#001429",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "space-evenly",
    flexGrow: 1,
  },
  textFeild: {
    height: 55,
    width: "80%",
    marginTop: 15,
    paddingLeft: 10,
    backgroundColor: "#212b45",
    borderRadius: 7
  },
  otpButton: {
    marginTop: 20,
    height: 55,
    width: "80%",
    borderRadius: 5,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  },
  otpButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },


})
