import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function OtpScreen({navigation,route:{params:{mobile},}}) {

  const firstInput = useRef()
  const secondInput = useRef()
  const thirdInput = useRef()
  const fourthInput = useRef()
  const fifthInput = useRef()
  const sixthInput = useRef()

  return (
    <ScrollView style={{ width: "100%", height: "100%", }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/logo.png")} style={{ height: 50, width: "50%" }}></Image>
        </View>
        <View style={styles.iconStyle}>
          <Image style={styles.iconImage} source={require('../assets/logo1.png')}></Image>
        </View>

        <Text style={{ marginTop: "5%", fontWeight: "bold", fontSize: 22, color: "#212b45" }}>Verification code</Text>
        <Text>Please type the verification code send to </Text>
        <Text style={{ marginTop: "5%", color: "#212b45", fontWeight: "bold", fontSize: 16 }}>+91 {mobile}</Text>
        <View style={styles.otpContainer}>


          <View style={styles.otpContainerBox}>
            <View style={styles.otpBox}>
              <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}
                ref={firstInput}
                onChangeText={(text) => {
                  text && secondInput.current.focus()
                }} />
            </View>
            <View style={styles.otpBox}>
              <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}
                ref={secondInput}
                onChangeText={(text) => {
                  text ? thirdInput.current.focus() : firstInput.current.focus()
                }} />
            </View>
            <View style={styles.otpBox}>
              <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}
                ref={thirdInput}
                onChangeText={(text) => {
                  text ? fourthInput.current.focus() : secondInput.current.focus()
                }} />
            </View>
            <View style={styles.otpBox}>
              <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}
                ref={fourthInput}
                onChangeText={(text) => {
                  text ? fifthInput.current.focus() : thirdInput.current.focus()
                }} />
            </View>
            <View style={styles.otpBox}>
              <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}
                ref={fifthInput}
                onChangeText={(text) => {
                  text ? sixthInput.current.focus() : fourthInput.current.focus()
                }} />
            </View>
            <View style={styles.otpBox}>
              <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}
                ref={sixthInput}
                onChangeText={(text) => {
                  !text && fifthInput.current.focus()
                }} />
            </View>
          </View>


          <TouchableOpacity style={styles.otpButton} onPress={() => navigation.navigate("RegistorScreen")}>
            <Text style={styles.otpButtonText}>Resend OTP</Text>
          </TouchableOpacity>

          <Text style={{ marginTop: 10, color: "grey", fontSize: 12 }}> Resend after 28s</Text>
          <View style={{ flexDirection: "row", marginTop: 10,  }}>
            {/* <View><Icon name='call' size={14} color='green' ></Icon></View> */}
            <Text style={{ marginTop: 8, color: "grey", fontSize: 14, color: "green", fontWeight: "bold" }}>Contact Us</Text>
          </View>

        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  imageContainer: {
    marginTop: "20%",
    width: "100%",
    alignItems: "center"
  },
  iconStyle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: "10%",
  },
  iconImage: {
    height: "100%",
    width: "100%"
  },
  otpContainer: {
    width: "95%",
    height: "50%",
    backgroundColor: "#001429",
    borderRadius: 10,
    marginTop: "10%",
    alignItems: "center",
    paddingBottom: 50
  },
  otpContainerBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 25,
    width: "100%"
  },
  otpBox: {
    height: 50,
    width: 45,
    borderRadius: 5,
    backgroundColor: "#212b45",
  },
  otpText: {
    fontSize: 18,
    color: "#000",
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  otpButton: {
    marginTop: 20,
    height: 55,
    width: "90%",
    borderRadius: 5,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  },
  otpButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }


})