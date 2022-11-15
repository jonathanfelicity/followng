import { TouchableOpacity } from "react-native";




const Button = ({ text })=>{
    return (
        <TouchableOpacity >
            <Text>{ text }</Text>
        </TouchableOpacity>
    )

    
}

export default Button

