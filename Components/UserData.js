//este modulo va a servir para modificar y actualizar los datos del usuario
import {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity,Alert} from "react-native";
import { getAuth, updateProfile } from "firebase/auth";



export default function UserData({navigation}){   

    const auth = getAuth();
    const user = auth.currentUser;
    const [e,setEmail] = useState(user.email);
    const [name, setName] = useState(user.usuario);
 
    const updateData=()=>{
     updateProfile(auth.currentUser,{
        usuario: user,
        email: email,
        contraseña: pass})
        .then(()=>{
            Alert.alert('Su perfil a sido actualizado')
        })
        .catch((error)=>{
            console.log(error)
            Alert.alert(error.message)
        });

    }

    return(
        <View>
            <Text style={styles.text}>Bienvenido {e}</Text>           
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        color: "#E4D9FF",
        textAlign: 'center',
        margin: 10,
        paddingTop:40, 
        fontWeight: 400
    }
})