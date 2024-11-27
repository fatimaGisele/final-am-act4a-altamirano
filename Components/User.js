//user data...desde este modulo se va a ver y tambien editar la informacion 

import React from "react";
import { Firestore } from "firebase/firestore";
import firestore from '@react-native-firebase/firestore';
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";


export default function User(){

    /*const getUserData = async()=>{

    }*/

    return(
        <View>
            <Text>User data</Text>
            <Text>Nombre: {}</Text>
            <TouchableOpacity>
                <Text>Modificar</Text>
            </TouchableOpacity>
        </View>
    )
}