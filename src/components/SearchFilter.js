import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SearchFilter = ({ icon, placeholder }) => {
    return (
        <View style={styles.container}>
            <FontAwesome name={icon} size={20} color="#f96163" style={styles.searchIcon} />

            <TextInput style={styles.inputStyle}>{placeholder}

            </TextInput>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 4,
        marginVertical: 12,
        marginHorizontal: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    inputStyle: {
        paddingLeft: 10,
        color: "#808080",
        fontsize: 15,
    },
    searchIcon: {
        paddingVertical: 14,
        paddingLeft: 10
    }
})

export default SearchFilter;