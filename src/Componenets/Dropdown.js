import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'


export default function Dropdown(label, value) {
    return (
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
                <Picker.Item style={{ backgroundColor: "#212b45", }} label='Selct State' color="#3e5b5b" value={'Selct State'} ></Picker.Item>
                <Picker.Item style={{ backgroundColor: "#212b45", }} label='One' color="#3e5b5b" value={'One'} placeholderTextColor="#3e5b5b"></Picker.Item>
                <Picker.Item style={{ backgroundColor: "#212b45", }} label='Two ' color="#3e5b5b" value={'Two'} placeholderTextColor="#3e5b5b"></Picker.Item>
                <Picker.Item style={{ backgroundColor: "#212b45", }} label='Three' color="#3e5b5b" value={'Three'} placeholderTextColor="#3e5b5b"></Picker.Item>
            </Picker>

        </View>
    )
}

const styles = StyleSheet.create({})