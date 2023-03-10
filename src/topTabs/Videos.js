import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CourseData from '../Componenets/constants/CourseData'

import { RadioButton } from 'react-native-paper';

export default function Videos() {

  const renderitem = ({item }) => (
    <View style={{ width: "95%", borderWidth: 1, borderRadius: 5, alignSelf: "center", marginTop: 15 }}>
    <View style={{ width: "100%", height: 150, }}>
        <ImageBackground source={item.abcImage} style={{ height: "100%", width: "100%", justifyContent: "flex-end", alignItems: "flex-end", position: "absolute",}}>
          <View style={{ height: 45, width: 55, backgroundColor: "green", alignItems: "center", justifyContent: "center", }}>
          <Text style={{color:"#fff",fontSize:12 ,}}>Biology</Text>
        </View>
        </ImageBackground>


      </View>
      <Text style={styles.longTittle}>Long chapter name can be shown here.</Text>
      <View style={{
        flexDirection: "row", alignSelf: "flex-start",
        justifyContent: "center", marginTop: 10,
        alignItems: "center",
      }}>
        <RadioButton
          color='grey'
          value='first'
          status='checked' />
        <Text style={{ color: "grey", marginRight: 10, marginLeft: 0 }}>12 Chapters</Text>
        <RadioButton
          color='grey'
          value='first'
          status='checked' />
        <Text style={{ color: "grey", }}>124 hours</Text>
      </View>
    </View>
    )
  
  return (
    <View style={{flex:1}}>
      <FlatList data={CourseData.COURSE_DATA}
        renderItem={ renderitem} />
    </View>
  )
}

const styles = StyleSheet.create({
  longTittle: {
    color: "#001429",
    fontSize: 28,
    fontWeight: "bold",
   // marginLeft: 10,
    marginTop:10
  }

})