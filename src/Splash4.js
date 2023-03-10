import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class Splash1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={require("../assets/rain.jpg")}></Image>

        <Text style={styles.headrStyle}> Full Screen Page</Text>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Text style={styles.subtext}>Pages can be full screen as well.</Text>
          <Text
            style={{
              marginTop: 5, fontSize: 16,
              color: "grey", textAlign: 'center',
            }}>
            There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..
          </Text>
        </View>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Splash5')}>
          <Icon name='east' size={20} color='#fff'></Icon>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageStyle: {
    height: "55%",
    width: "80%",
    marginTop: 50,
    borderRadius: 7
  },
  headrStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginTop: 30,
  },
  subtext: {
    fontSize: 16,
    color: "grey",
    textAlign: 'center',
  },
  buttonStyle: {
    height: 60,
    width: 60,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 20,
    bottom: 35
  },
})
