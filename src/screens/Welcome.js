import {Text, View, StyleSheet } from "react-native"

const Welcome = ()=>{
    return (
        <View style={ styles.container }>
            <Text>FollowNG</Text>


        
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