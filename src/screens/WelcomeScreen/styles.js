import { StyleSheet } from "react-native";
import color from '../../constant/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  splashStyle: {
    marginTop: 30,
    height: "60%",
    width: "70%"
  },
  recipeText: {
    color: "f96163",
    fontSize: 20,
    fontWeight: 'bold'

  },
  chefStyle: {
    fontSize: 20,
    color: '#3c444c',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  },
  btnStyle: {
    backgroundColor: '#f96163',
    borderRadius: 15,
    height: '6%',
    width: '40%',
    alignItems: 'center',
    marginVertical: 20,
    padding: 10
  },
  btnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  }

});

export default styles;
