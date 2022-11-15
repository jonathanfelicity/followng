import {Text, View, StyleSheet } from "react-native"
import { Button } from "../components"

const Login = ()=>{
    return (
        <View style={ styles.container }>
            <Text>FollowNG</Text>
            <Button title="Login with instagram"/>
        </View>
    )
}


export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})