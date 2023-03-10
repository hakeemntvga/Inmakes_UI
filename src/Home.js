import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, FlatList, ImageBackground, } from 'react-native'

import { Picker } from '@react-native-picker/picker'

import Icon from 'react-native-vector-icons/MaterialIcons'
import CourseData from './Componenets/constants/CourseData'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      DATA: CourseData.COURSE_DATA,
    }
  }
  render() {

    const renderItem = ({ item }) => (

      <View style={styles.itemContainer}>
        <ImageBackground source={item.image} style={{ height: '100%', width: '100%', justifyContent: 'flex-end', borderRadius: 10, }}>
          <Text style={{ fontWeight: "bold", color: "#fff", marginLeft: 10, padding: 10, }}>{item.tittle}</Text>
        </ImageBackground>
       
      </View>
    )

    const renderItem1 = ({ item }) => (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('ClassScreen')} style={{ width: 100, height: 50, borderWidth: 1, borderRadius: 5, borderColor: 'green', flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 10, marginBottom:70 }}>
        <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: "green", }} />
        <Text style={{ marginLeft: 10 }}>{item.name}</Text>
      </TouchableOpacity>
    )

    const renderItem2 = ({ item }) => (
      <View style={styles.bottomflatlistContainer}>
        <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: "#212b45", marginLeft: 20 }}></View>
        <Text style={styles.headingText}>{item.heading}</Text>
        <Text style={styles.subtittleText}>{item.subtittle}</Text>
        <View style={ {width:"100%",alignItems:"center"}}></View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>{item.buttonText}</Text>
        </TouchableOpacity>

      </View>
      //
    )
    return (

      <ScrollView>
        <View style={styles.container}>

          <View style={styles.statusBarContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' size={35} color='green' style={{ height: 40, width: 40 }} ></Icon>
            </TouchableOpacity>
            <View style={styles.ImageContainer}>
              <Image source={require('../assets/logo.png')} style={styles.imageStyle}></Image>
            </View>

            <View style={styles.classContainer}>
              <View style={styles.roudShape}></View>
              <Text style={{ color: "green" }}>Classes</Text>
            </View>

          </View>

          <Text style={styles.morningText}> Goodmorning </Text>
          <Text style={styles.name}>Aron Taylor</Text>
          <View style={{ height: 83, width: "75%", margin: 20, alignSelf: "center",  }}>
            
            <ImageBackground style={{ height: "100%", width: "100%",  }} source={require('../assets/blue.jpg')}>
              <Text style={{ color: '#fff', fontSize: 14, marginLeft: 15, marginTop: 10 }}>Classes</Text>
              <View style={{ height: 40, width: 290 }}>
                <Picker 
                  dropdownIconColor='#eee'
                  mode="dropdown">
                  <Picker.Item style={{ backgroundColor: "#001429", }} label='Selct Class' color="#3e5b5b" value={'Selct Class'} ></Picker.Item>
                  <Picker.Item style={{ backgroundColor: "#212b45", }} label='One' color="#3e5b5b" value={'One'} placeholderTextColor="#3e5b5b"></Picker.Item>
                  <Picker.Item style={{ backgroundColor: "#212b45", }} label='Two ' color="#3e5b5b" value={'Two'} placeholderTextColor="#3e5b5b"></Picker.Item>
                  <Picker.Item style={{ backgroundColor: "#212b45", }} label='Three' color="#3e5b5b" value={'Three'} placeholderTextColor="#3e5b5b"></Picker.Item>
                  <Picker.Item style={{ backgroundColor: "#212b45", }} label='four' color="#3e5b5b" value={'four'} placeholderTextColor="#3e5b5b"></Picker.Item>
                </Picker>
              </View>
             
            </ImageBackground>
            
          </View>

          <FlatList
            data={this.state.DATA}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem1} />

          <Text style={{
            color: "#000", fontSize: 14, flexDirection: "row",
            marginTop: 20,
            marginBottom: 10,
          }}>Recent courses</Text>
          <View>
            <FlatList
              data={this.state.DATA}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem} />
          </View>
          <View>
            <FlatList
              data={this.state.DATA}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem2} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10
  },
  statusBarContainer: {
    height: "11%",
    width: "95%",
    backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 20,

  },
  ImageContainer: {
    height: "10%",
    width: "64%",
  },
  imageStyle: {
    width: "64%",
    height: 45,
    marginLeft: 5
  },
  classContainer: {
    height: 40,
    width: 80,
    borderWidth: 1,
    borderColor: "green",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  },
  roudShape: {
    height: 15,
    width: 15,
    backgroundColor: "green",
    borderRadius: 7.5,
    marginRight: 5
  },
  morningText: {
    color: "#000",
    marginTop: 30
  },
  name: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,

  },
  itemContainer: {
    width: 180,
    height: 100,
    marginLeft: 10,
    backgroundColor: '#26353b',
    borderRadius: 10,
    justifyContent: "flex-end"
  },
  bottomflatlistContainer: {
    backgroundColor: "#001429",
    height: 400,
    width: 250,
    borderRadius: 8,
    justifyContent: "space-evenly",
    marginLeft: 10,
    marginTop: 20,
    
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#fff',
    textAlign:"center"
  },
  subtittleText: {
    fontSize: 14,
    color: 'grey',
    textAlign: "center",
    margin:20
  },
  buttonStyle: {
    height: 45,
    width: "60%",
    borderRadius: 8,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center"
  },
  buttonTextStyle: {
    color: '#fff',
    fontWeight: "900",
    fontSize:14
  }
})



