import React from "react";
import { View, Text } from "react-native";
import Header from '../../components/Header'
import SearchFilter from "../../components/SearchFilter";
import CategoriesFilter from "../../components/CategoriesFilter";
import ReceipeCard from '../../components/ReceipeCard';
import styles from './styles';

const ReceipeListScreen = () => {
  return (
    <View style={styles.container}>
      <Header headerText={"Hi, John "} headerIcon={"bell-o"} />
      <SearchFilter placeholder={'Enter your fav recipe'} icon='search' />
      <View style={styles.heading}>
        <Text style={styles.categoryText}>Categories</Text>
        <CategoriesFilter />
      </View>
      <View style={styles.subHeading}>
        <Text style={styles.categoryText}>Recipe</Text>
        <ReceipeCard />
      </View>
    </View>
  )
}

export default ReceipeListScreen;