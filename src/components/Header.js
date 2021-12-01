import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from "react-native";
import profile from "../../assets/profile.jpg";
import Icon from "react-native-vector-icons/MaterialIcons";
import { vh, vw } from "./Dimension";



const Header = () => {

    return (
        <View style={styles.header}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#128C7E"
            />
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                <Image source={profile} style={styles.profile} />
                <Text style={styles.name}>Prashant Singh</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                <TouchableOpacity
                    onPress={() => {
                        alert("Video Call")
                    }}
                    style={styles.icon}>
                    <Icon name="videocam" size={25} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        alert("Audio Call")
                    }}
                    style={styles.icon1}>
                    <Icon name="call" size={25} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        alert("More Option")
                    }}
                >
                    <Icon name="more-vert" size={25} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#128C7E",
        height: vh(62)
    },
    profile: {
        width: vw(42),
        height: vh(45),
        borderRadius: vh(50) / 2,
        marginHorizontal: vw(10)
    },
    name: {
        fontSize: 22,
        color: "#fff",
        marginRight: 10
    },
    icon: {
        marginLeft: vw(35),
        marginRight: vw(10)

    },
    icon1: {
        marginHorizontal: vw(10)
    }
})

export default Header;