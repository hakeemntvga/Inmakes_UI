import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity,} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Profile extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={{ flexDirection: 'row', width: '100%', height: 45, padding: 10, }}>
              <View style={{ height: 45, width: '55%', justifyContent: "center", }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", color: '#fff', alignSelf: "flex-end" }}>Profile</Text>
              </View>
              <View style={{ height: 45, width: '45%', }}>
                <View style={{ flexDirection: 'row', marginRight: 10, alignSelf: "flex-end" }}>
                  <Icon name='notifications-outline' size={35} color='#fff' ></Icon>
                  <View style={{ marginLeft: 10, height: 40, width: 40, borderColor: '#fff', borderWidth: 1, alignItems: "center", borderRadius: 8, justifyContent: "center", }}>
                    <Icon name='apps' size={30} color='green' ></Icon>
                  </View>
                </View>
              </View>
            </View>



            <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 8, alignSelf: "center", marginTop: 70, zIndex: 1 }}>

              <View style={{ width: '100%', backgroundColor: '#fff', borderRadius: 8, alignSelf: "center", elevation: 4, padding: 10, }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ height: 100, width: 100, borderRadius: 50, borderColor: "green", borderWidth: 1 }}>
                    <Image style={{ height: 100, width: 100, borderRadius: 50, borderColor: "green", borderWidth: 1, }} source={require('../assets/profile.jpg')}></Image>
                  </View>
                  <View style={{ justifyContent: "center", marginLeft: 10, }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "#000" }}>Aaron Taylor</Text>
                    <Text style={{ color: 'grey', fontSize: 14, }}>ID:123</Text>
                  </View>
                </View>

                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 20, marginTop: 30 }}>Personal Info</Text>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
                  <Text style={{ color: "#000", fontSize: 14, }}>Account Settings</Text>
                  <Text style={{ color: "#000", fontSize: 14, }}>Aaron Taylor</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
                  <Text style={{ color: "#000", fontSize: 14, }}>Email</Text>
                  <Text style={{ color: "#000", fontSize: 14, }}>emaidid123@server.com</Text>
                </View>

                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Course Info</Text>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
                  <Text style={{ color: "#000", fontSize: 14, }}>Course Info</Text>
                  <Text style={{ color: "#000", fontSize: 14, }}>Inmakes edu</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
                  <Text style={{ color: "#000", fontSize: 14, }}>Course</Text>
                  <Text style={{ color: "#000", fontSize: 14, }}>Plus Two Science</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
                  <Text style={{ color: "#000", fontSize: 14, }}>Payment Status</Text>
                  <Text style={{ color: "#000", fontSize: 14, }}>Free</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
                  <Text style={{ color: "#000", fontSize: 14, }}>Expiry Data</Text>
                  <Text style={{ color: "#000", fontSize: 14, }}>Not Applicable</Text>
                </View>
              </View>

              <TouchableOpacity style={{ height: 60, width: "100%", justifyContent: "center", borderRadius: 8, backgroundColor: "green", marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ height: 30, width: 30, backgroundColor: '#ded6d5', alignItems: 'center', justifyContent: 'center', marginStart: 10 }}>
                    <Icon name='card-outline' size={20} color='#fff' ></Icon>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 10, marginEnd: 10, alignItems: 'center', width: "80%", }}>
                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700', }}> Custom Payment</Text>
                    <Icon name='chevron-forward' size={20} color='#fff' ></Icon>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{ height: 60, width: "100%", justifyContent: "center", borderRadius: 8, backgroundColor: "green", marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ height: 30, width: 30, backgroundColor: '#ded6d5', alignItems: 'center', justifyContent: 'center', marginStart: 10 }}>
                    <Icon name='laptop-outline' size={20} color='#fff' ></Icon>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 10, marginEnd: 10, alignItems: 'center', width: "80%", }}>
                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700', }}>Referals</Text>
                    <Icon name='chevron-forward' size={20} color='#fff' ></Icon>
                  </View>
                </View>
              </TouchableOpacity>



            </View>







          </View>


        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  topContainer: {
    width: "100%",
    height: '40%',
    backgroundColor: "#212b45"
  }
})
