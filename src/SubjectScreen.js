import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { RadioButton } from 'react-native-paper';
import CourseData from './Componenets/constants/CourseData';

const SubjectScreen = () => {
    // const renderitem = ({ item }) => (
    //     <View style={{ height: 120, width: '90%', borderRadius: 10, borderWidth: 1, alignSelf: "center", marginVertical: 8, padding: 10 }}>
    //         <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>{item.subjectTittle}</Text>
    //         <View style={{
    //             flexDirection: "row",
    //             alignSelf: "flex-start",
    //             justifyContent: "center",
    //             alignItems: "center",
    //         }}>
    //             <RadioButton
    //                 color='grey'
    //                 value='first'
    //                 status='checked' />
    //             <Text style={{ color: "#grey", marginRight: 10, marginLeft: 0 }}>12 Chapters</Text>
    //             <RadioButton
    //                 color='grey'
    //                 value='first'
    //                 status='checked' />
    //             <Text style={{ color: "#grey", }}>124 hours</Text>
    //         </View>
    //     </View>
    // )
    return (

        <View style={styles.container}>

            <View style={{ flex: 2, backgroundColor: "#001429", }} >
                <View style={{
                    flexDirection: "row", alignItems: "center",
                    justifyContent: "center",
                }}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Icon name='md-chevron-back' size={35} color='green' ></Icon>
                    </TouchableOpacity>
                    <Text style={styles.heading}>Biology</Text>
                </View>
               
                <View style={{
                    justifyContent: "flex-end", height: "100%", width: "100%", position: "absolute", left: 20, bottom: 10
                }}>
                    <Text style={styles.longTittle}>Long chapter name can be shown here.</Text>
                    <View style={{
                        flexDirection: "row", alignSelf: "flex-start",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <RadioButton
                            color='green'
                            value='first'
                            status='checked' />
                        <Text style={{ color: "#fff", marginRight: 10, marginLeft: 0 }}>12 Chapters</Text>
                        <RadioButton
                            color='green'
                            value='first'
                            status='checked' />
                        <Text style={{ color: "#fff", }}>124 hours</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 3, backgroundColor: '#fff' }} >
                <ScrollView style={{ flex: 3 }}>
                    <Text style={{ color: "#fff", }}>124 hours</Text>
                    {/* <FlatList
                        data={CourseData.COURSE_DATA}
                        renderItem={renderitem} /> */}


                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    iconContainer: {
        height: 40,
        width: 40,
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 30,
        top: 20
    },
    heading: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 30,
        position: "absolute", top: 20
    
    },
    longTittle: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
        marginLeft: 10,
    }

});

export default SubjectScreen;