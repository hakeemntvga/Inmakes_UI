import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class DrawerContent extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={{ height: 40, width: 40, borderRadius: 8, borderWidth: 1, borderColor: "green", justifyContent: "center", alignItems: "center" }}>
                        <Icon name='close' size={20} color='green' ></Icon>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 30 }}>
                        <View style={{ marginLeft: 15, height: 60, width: 60, borderRadius: 30, borderWidth: 2, borderColor: "green", backgroundColor: "red" }}></View>
                        <View style={{ marginLeft: 15, marginTop: 5 }}>
                            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>Aron Taylor</Text>
                            <Text style={{ color: "grey" }}>ID:1234</Text>
                        </View>
                    </View>
                </View>
                <View>

                </View>
                <View style={{ flexDirection: "row", marginTop: 30, margin: 15, alignItems: "center" }}>
                    <View style={{ height: 40, width: 40, borderRadius: 8, borderWidth: 1, borderColor: "green", }} />
                    <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15, marginLeft: 15 }}>Subscriptions</Text>
                </View>
                <View style={{ height: 1, width: "90%", borderRadius: 5, backgroundColor: "grey", marginLeft: 10 }}></View>

                <View style={{ flexDirection: "row", marginTop: 30, margin: 15, alignItems: "center" }}>
                    <View style={{ height: 40, width: 40, borderRadius: 8, borderWidth: 1, borderColor: "green", }} />
                    <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15, marginLeft: 15 }}>Downloads</Text>
                </View>
                <View style={{ height: 1, width: "90%", borderRadius: 5, backgroundColor: "grey", marginLeft: 10 }}></View>
                <View style={{ flexDirection: "row", marginTop: 30, margin: 15, alignItems: "center" }}>
                    <View style={{ height: 40, width: 40, borderRadius: 8, borderWidth: 1, borderColor: "green", }} />
                    <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15, marginLeft: 15 }}>Notifications</Text>
                </View>
                <View style={{ height: 1, width: "90%", borderRadius: 5, backgroundColor: "grey", marginLeft: 10 }}></View>

                <View style={{ flexDirection: "row", marginTop: 30, margin: 15, alignItems: "center" }}>
                    <View style={{ height: 40, width: 40, borderRadius: 8, borderWidth: 1, borderColor: "green", }} />
                    <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15, marginLeft: 15 }}>Referals</Text>
                </View>
                <View style={{ height: 1, width: "90%", borderRadius: 5, backgroundColor: "grey", marginLeft: 10 }}></View>

                <View style={{ flexDirection: "row", marginTop: 30, margin: 20, alignItems: "center" }}>
                    <View style={{ height: 40, width: 40, borderRadius: 8, borderWidth: 1, borderColor: "green", }} />
                    <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15, marginLeft: 15 }}>Share app</Text>
                </View>
                <View style={{ height: 1, width: "90%", borderRadius: 5, backgroundColor: "grey", marginLeft: 10 }}></View>

                <View style={{ flexDirection: "row", marginTop: 30, margin: 20, alignItems: "center" }}>
                    <View style={{ height: 40, width: 40, borderRadius: 8, borderWidth: 1, borderColor: "green", }} />
                    <Text style={{ color: "red", fontWeight: "700", fontSize: 15, marginLeft: 15 }}>Logout</Text>
                </View>
                <View style={{ height: 1, width: "90%", borderRadius: 5, backgroundColor: "grey", marginLeft: 10 }}></View>

            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#001429",
    },
    menuStyle: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 10,
        color: "#000",
        borderBottomWidth: 1
    },
    profileContainer: {
        width: "100%",
        height: "25%",
        backgroundColor: "#001429",
        padding: 15,
        marginTop:10



    },
   

})