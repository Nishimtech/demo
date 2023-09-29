import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Header = ({ headerText, headerIcon }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{headerText}</Text>
            <FontAwesome name={headerIcon} size={20} color='#f96163' style={styles.bellIcon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',

    },
    headerText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 14
    },
    bellIcon: {
        marginRight: 10
    }
})

export default Header;