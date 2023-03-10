
import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'


export default class DataComponent extends Component {
    render() {
        Data = [
            {
                id: "1",
                name: "Classes"
            },
            {
                id: "2",
                name: "Classes2"
            },
            {
                id: "3",
                name: "Classes3"
            },
            {
                id: "4",
                name: "Classes4"
            },
            {
                id: "5",
                name: "Classes5"
            },
            {
                id: "6",
                name: "Classes6"
            },
        ]
        return (
            
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    style={{ width: "95%", marginTop: 5, flexDirection: "row" }}
                    horizontal
                    data={Data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (

                        <View style={{ width: "100%", padding: 10, flexDirection: "row", height: "100%" }}>


                            <View style={{ width: 100, height: 50, borderWidth: 1, borderRadius: 5, borderColor: 'green', flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
                                <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: "green", }} />
                                <Text key={item.id} style={{ marginLeft: 10 }}>{item.name}</Text>
                            </View>


                            <View style={{ width: 100, height: 50, borderWidth: 1, borderRadius: 5, borderColor: 'green', flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
                                <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: "green", }} />
                                <Text key={item.id} style={{ marginLeft: 10 }}>{item.name}</Text>
                            </View>


                            <View style={{ width: 100, height: 50, borderWidth: 1, borderRadius: 5, borderColor: 'green', flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
                                <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: "green", }} />
                                <Text key={item.id} style={{ marginLeft: 5 }}>{item.name}</Text>
                            </View>


                            <View style={{ width: 100, height: 50, borderWidth: 1, borderRadius: 5, borderColor: 'green', flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
                                <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: "green", }} />
                                <Text key={item.id} style={{ marginLeft: 5 }}>{item.name}</Text>
                            </View>


                            <View style={{ width: 100, height: 50, borderWidth: 1, borderRadius: 5, borderColor: 'green', flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
                                <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: "green", }} />
                                <Text key={item.id} style={{ marginLeft: 5 }}>{item.name}</Text>
                            </View>


                            <View style={{ width: 100, height: 50, borderWidth: 1, borderRadius: 5, borderColor: 'green', flexDirection: "row", alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
                                <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: "green", }} />
                                <Text key={item.id} style={{ marginLeft: 5 }}>{item.name}</Text>
                            </View>

                        </View>

                    )
                    }
                />
            
            
        )
    }
}

const styles = StyleSheet.create({})
