import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Categories from '../data/Categories'
import color from '../constant/color'

const CategoriesFilter = ({ index }) => {


    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                {Categories.map((category, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                backgroundColor:
                                    index === 0 ? color.COLOR_PRIMARY : color.COLOR_LIGHT,
                                marginRight: 10,
                                borderRadius: 8,
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.1,
                                shadowRadius: 7,
                                marginVertical: 6,
                                marginHorizontal: 12
                            }}
                        >
                            <Text
                                style={{
                                    color: index === 0 && color.COLOR_LIGHT,
                                    fontSize: 18,
                                }}
                            >
                                {category.category}
                            </Text>
                        </View>
                    );
                })}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
    }

})

export default CategoriesFilter;