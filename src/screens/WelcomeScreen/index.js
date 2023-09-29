import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import image from "../../config/Image";
import styles from './styles'

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={image.splashimage} style={styles.splashStyle} />
            <Text style={styles.recipeText}>40K+ Premium Recipies</Text>
            <Text style={styles.chefStyle}>Cook Like A Chef</Text>
            <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate("ReceipeList")}>
                <Text style={styles.btnText}>Let's Go</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen;