import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from "../screens/WelcomeScreen/index";
import ReceipeListScreen from "../screens/ReceipeListScreen/index";
import ReceipeDetailScreen from "../screens/ReceipeDetailScreen/index";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="ReceipeList" component={ReceipeListScreen} />
				<Stack.Screen name="ReceipeDetail" component={ReceipeDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigator;