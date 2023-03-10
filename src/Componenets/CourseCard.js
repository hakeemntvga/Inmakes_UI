import { StyleSheet, Text, View,Image, } from 'react-native'
import React from 'react'


const CourseCard = (tittle,id,image)=> {
  return (
    <View style={styles.container}>
          {/* <Image style={styles.imageStyle}></Image> */}
          <Text style={styles.tittleText}>{tittle }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // height: "30%",
        // width: "50%",
        flex:1,
        backgroundColor: "red",
        borderWidth: 1,
        borderColor:"#000"
    },
    imageStyle: {
        height: "100%",
        width:"100%"
    },
    tittleText: {
        fontSize: 16,
        fontWeight:"600"
    }
})

export default CourseCard;