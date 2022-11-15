import { StyleSheet, Dimensions } from "react-native";






const COLORS = require('./colors')

const FULL_WIDTH = Dimensions.width
const FULL_HIEGHT = Dimensions.height

const STYLES = StyleSheet.create({
    match_parent:{
        width: FULL_WIDTH,
        height: FULL_HIEGHT,
    },
    container:{
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    },
    button:{
        padding: 16,
        width: FULL_WIDTH,
        backgroundColor:  COLORS.lightColor.primary,
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 5,
        marginTop: 20,
    },
    textInput:{
        width: FULL_WIDTH,
        height: 24,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
        },
})


module.exports = STYLES