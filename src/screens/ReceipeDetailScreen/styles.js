import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#6f4e37'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 200,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        alignItems: 'center'
    },
    innerContainer: {
        height: 250,
        width: 250,
        position: 'absolute',
        top: -100,


    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 230
    },
    leftIconStyle: {
        flex: 1
    },
    subInnerContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 14
    },
    nameStyle: {
        marginTop: 100,
        fontSize: 28,
        fontWeight: "bold"
    },
    desText: {
        marginVertical: 15,
        fontSize: 20,
        marginHorizontal: 10
    },
    timeContainer: {
        backgroundColor: 'rgba(255, 0, 0, 0.38)',

        paddingVertical: 10,
        borderRadius: 7,
        alignItems: 'center',
        width: 100,
        marginHorizontal: 10
    },
    diffContainer: {
        backgroundColor: "rgba(135, 206, 235, 0.8)",

        paddingVertical: 10,
        borderRadius: 7,
        alignItems: 'center',
        width: 100,
        marginHorizontal: 10
    },
    calContainer: {
        backgroundColor: "rgba(255, 165, 0, 0.48)",

        paddingVertical: 10,
        borderRadius: 7,
        alignItems: 'center',
        width: 100,
        marginHorizontal: 10
    },
    ingredientStyle: {
        alignSelf: 'flex-start',
        marginVertical: 10
    },
    ingText: {
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    ingContainer: {
        // backgroundColor: 'red',
        // height: 30,
        // width: 30,
        // borderRadius: 5,

    },
    time: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default styles;