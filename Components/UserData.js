//user data...desde este modulo se va a ver y tambien editar la informacion 
import React, { useEffect } from "react";
import {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity,Alert} from "react-native";
import { getAuth, signOut } from "firebase/auth";



export default function UserData({navigation}){
  
    

    const auth = getAuth();
    const user = auth.currentUser;
    const [e,setEmail] = useState(user.email);
    
    const signOutF = async() =>{
        try {
            signOut(auth);
            Alert.alert('Ha cerrado sesion exitosamente');
            navigation.navigate('Init')
            setEmail('');
        } catch (error) {
            console.log(error);
            Alert.alert(error.message);
        }
    }
 

    return(
        <View>
            <Text>User data</Text>
            <Text>Mail: {e}</Text>
            <TouchableOpacity>
                <Text>Modificar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={signOutF}>
                <Text>Cerrar Sesion</Text>
            </TouchableOpacity>
        </View>
    )
}