import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, Image } from "react-native";
import ReceipeList from '../data/ReceipeList'
import color from '../constant/color';
import image from "../config/Image";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const ReceipeCard = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <FlatList
                data={ReceipeList}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReceipeDetail', { item : item })}
                        style={styles.imageContainer}>

                        <Image source={item.image} style={styles.imageStyle} />

                        <Text>{item.name}</Text>
                        <View style={styles.itemContainer}>
                            <Text style={styles.time}>{item.time}</Text>
                            <Text> | </Text>

                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.rating}>{item.rating}</Text>
                                <FontAwesome
                                    name="star"
                                    size={16}
                                    color={color.COLOR_PRIMARY}
                                    style={styles.star}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                )}

            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 10,
        // flexDirection: 'row',
    },
    imageStyle: {
        height: 150,
        width: 150,
        resizeMode: 'center'
    },
    imageContainer: {
        backgroundColor: color.COLOR_LIGHT,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 16,
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 16,
        marginHorizontal: 10,

    },
    rating: {
        alignSelf: 'center',
        // marginTop:5
    },
    time: {
        marginRight: 5
    },
    star: {
        alignSelf: 'center',
        // marginTop:5,
        padding: 1
    },
    itemContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    }

})

export default ReceipeCard;