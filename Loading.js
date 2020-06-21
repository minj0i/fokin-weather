import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Loading() {
    return (
    <View style={styles.conatiner}>
            <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyCOntent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30
    }
})