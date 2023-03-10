import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native'

export default class NumberScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image style={styles.logoStyle} source={require("../assets/logo.png")}></Image>
                </View>
                <View style={styles.middleTextContainer} >
                    <Text style={{ fontSize: 22, color: "#212b45", fontWeight: "900" }}>Enter your mobile number</Text>
                    <Text style={{ color: "#eeeeee", fontSize: 16, fontWeight: "900" }}>We will send you an OTP to verify</Text>

                </View>
                <View style={styles.numberContainer}>
                    <View style={styles.textFieldContainer}>

                        <TextInput style={styles.countryCodeFeild} placeholder='+91' placeholderTextColor='#fff'
                       >
                        </TextInput>
                        <TextInput style={styles.numberInputFeild} placeholder='Mobile Number'
                            keyboardType='phone-pad' onChangeText={(phoneNumber) => this.setState({ phoneNumber })}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate("OtpScreen",{mobile:this.state.phoneNumber})}>
                        <Text style={styles.buttonTextStyle}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end"
    },

    numberContainer: {
        height: "30%",
        width: "100%",
        backgroundColor: "red",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#001429",
        alignItems: "center",
        justifyContent: 'center'
    },
    textFieldContainer: {
        flexDirection: "row",
    },
    countryCodeFeild: {
        height: 50,
        width: 50,
        borderRadius: 7,
        backgroundColor: "#212b45",
        marginRight: 10,
        paddingLeft: 10,
    },
    numberInputFeild: {
        height: 50,
        width: "60%",
        borderRadius: 7,
        backgroundColor: "#212b45",
        paddingLeft: 10,
    },
    buttonStyle: {
        height: 50,
        width: "75%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        backgroundColor: "green",
        marginTop: 20
    },
    buttonTextStyle: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 16,
    },
    middleTextContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    headerContainer: {
        height: "60%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",

    },
    logoStyle: {
        height: 100,
        width: "90%"
    }
})
