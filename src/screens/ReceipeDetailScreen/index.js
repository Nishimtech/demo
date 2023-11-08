import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ReceipeDetailScreen = ({ navigation, route }) => {
  const item = route?.params?.item

  console.log(item)
  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView style={styles.subInnerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leftIconStyle}>
          <FontAwesome name='arrow-circle-left' size={28} color='white' />
        </TouchableOpacity>
        <FontAwesome name='heart-o' size={28} color='white' />
      </SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <Image source={item.image} style={styles.image}></Image>



        </View>
        <Text style={styles.nameStyle}>{item.name}</Text>
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.desText}>{item.description}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.timeContainer}>
                <Text style={{ fontSize: 40 }}>⏰</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <View style={styles.diffContainer}>
                <Text style={{ fontSize: 40 }}>🥣</Text>
                <Text style={styles.time}>{item.difficulty}</Text>
              </View>
              <View style={styles.calContainer}>
                <Text style={{ fontSize: 40 }}>🔥</Text>
                <Text style={styles.time}>{item.calories}</Text>
              </View>
            </View>
            <View style={styles.ingredientStyle}>
              <Text style={styles.ingText}>Ingredients: </Text>
              {item.ingredients.map((ingredient) => {
                return (
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 6 }}>
                    <View style={styles.ingContainer}>
                      <Text style={{ fontSize: 15, marginLeft: 10 }}>{ingredient}</Text>
                    </View>
                  </View>
                )
              })}
            </View>
            <View style={styles.ingredientStyle}>
              <Text style={styles.ingText}>Steps: </Text>
              {item.steps.map((step, index) => {
                return (
                  <Text style={{ fontSize: 15, marginLeft: 10, marginVertical: 6 }}>{`${index + 1} ) ${step}`}</Text>

                )
              })}
            </View>
          </ScrollView>
        </View>

      </View>

    </View>
  )
}

export default ReceipeDetailScreen;