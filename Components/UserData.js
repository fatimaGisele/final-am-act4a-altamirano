//este modulo va a servir para modificar y actualizar los datos del usuario
import {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity,Alert} from "react-native";
import { getAuth } from "firebase/auth";



export default function UserData({navigation}){   

    const auth = getAuth();
    const user = auth.currentUser;
    const [e,setEmail] = useState(user.email);
    
 

    return(
        <View>
            <Text>Bienvenido {e}!!!</Text>           
        </View>
    )
}