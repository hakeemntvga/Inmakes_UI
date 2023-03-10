 import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'



export default class Splash1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={require("../assets/rain.jpg")}></Image>

        <Text style={styles.headrStyle}> Another title page </Text>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Text style={styles.subtext}>Another beautiful body text for this example</Text>
          <Text style={styles.subtext}>onboarding</Text>
        </View>

        <TouchableOpacity style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate('MyDrawer')}
        >
         <Text style={{color:"#000",fontWeight:"bold",fontSize:14}}>Done</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#fff"
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
    backgroundColor: "#fff",
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 20,
    bottom: 35
  },
})


