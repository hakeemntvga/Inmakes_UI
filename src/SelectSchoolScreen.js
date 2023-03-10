import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

import { Picker } from '@react-native-picker/picker'

export default class SelectSchoolScreen extends Component {
  render() {
    return (
      <View style={{ flex: 2 }}>
        <View style={{ flex: 2, backgroundColor: "#fff", justifyContent: "space-between" }}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image source={require('../assets/logo.png')} style={{ width: "90%", height: 100, marginTop: 100, alignItems: "center" }} ></Image>
          </View>
          <Text style={styles.headerText}> Select you school board </Text>
        </View>
        <View style={{
          flex: 1.2, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "#001429",
          alignItems: "center", justifyContent: "center"
        }}>
          <View style={{
            height: 55,
            width: "80%",
            marginTop: 15,
            backgroundColor: "#212b45",
            borderRadius: 8

          }}>
            <Picker
              style={{

              }}
              mode="dropdown">
              <Picker.Item style={{ backgroundColor: "#212b45", }} label='Selct Board' color="#3e5b5b" value={'Selct Board'} ></Picker.Item>
              <Picker.Item style={{ backgroundColor: "#212b45", }} label='CBSE' color="#3e5b5b" value={'CBSE'} placeholderTextColor="#3e5b5b"></Picker.Item>
              <Picker.Item style={{ backgroundColor: "#212b45", }} label='STATE ' color="#3e5b5b" value={'STATE'} placeholderTextColor="#3e5b5b"></Picker.Item>
              <Picker.Item style={{ backgroundColor: "#212b45", }} label='ICSE' color="#3e5b5b" value={'ICSE'} placeholderTextColor="#3e5b5b"></Picker.Item>
             
            </Picker>

          </View>
          <View style={{
            height: 55,
            width: "80%",
            marginTop: 15,
            backgroundColor: "#212b45",
            borderRadius: 8

          }}>
            <Picker
              style={{

              }}
              mode="dropdown">
              <Picker.Item style={{ backgroundColor: "#212b45", }} label='Selct Class' color="#3e5b5b" value={'Selct Class'} ></Picker.Item>
              <Picker.Item style={{ backgroundColor: "#212b45", }} label='One' color="#3e5b5b" value={'One'} placeholderTextColor="#3e5b5b"></Picker.Item>
              <Picker.Item style={{ backgroundColor: "#212b45", }} label='Two ' color="#3e5b5b" value={'Two'} placeholderTextColor="#3e5b5b"></Picker.Item>
              <Picker.Item style={{ backgroundColor: "#212b45", }} label='Three' color="#3e5b5b" value={'Three'} placeholderTextColor="#3e5b5b"></Picker.Item>
              <Picker.Item style={{ backgroundColor: "#212b45", }} label='four' color="#3e5b5b" value={'four'} placeholderTextColor="#3e5b5b"></Picker.Item>
            </Picker>

          </View>
          <TouchableOpacity style={styles.otpButton}
          onPress={() => this.props.navigation.navigate('Splash1')}
          >
            <Text style={styles.otpButtonText}>Registor</Text>
          </TouchableOpacity>

        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerText: {
    alignItems: "center",
    marginBottom: 10,
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
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
