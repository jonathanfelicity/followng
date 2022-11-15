import {Text, View, StyleSheet, Image } from "react-native"

const Welcome = ()=>{
    return (
        <View style={ styles.container }>
            <Text>HEllo from me</Text>
        </View>
    )
}


export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})