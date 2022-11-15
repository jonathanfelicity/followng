import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()


import { Welcome, Login } from "../screens"

const StackNavigator = ()=>{
    return(
        <Stack.Navigator
        screenOptions={{}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Welcom" component={Welcome}/>
        </Stack.Navigator>
    )
}


export default StackNavigator