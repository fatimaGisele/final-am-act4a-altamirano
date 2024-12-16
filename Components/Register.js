import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Alert } from "react-native"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { create, db } from './../lib/firebaseConfig';
import {collection, addDoc} from 'firebase/firestore';



export default function Register({navigation}){

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const auth = getAuth(create);
    
    const createAccount=async()=>{
        try {
            const account = await createUserWithEmailAndPassword(auth, email, pass);
            writeUserData();
            navigation.navigate('ApodCard');
        } catch (error) {
            console.log(error);
            Alert.alert(error.message);
        }
        
    }

    const writeUserData=async()=>{
        try {
            const userData = await addDoc(collection(db, "Usuario"),{
                usuario: user,
                email: email,
                contraseña: pass
            });
            console.log('usuario cargado exitosamente',userData.id);
        } catch (error) {
            console.log(error);
            Alert.alert(error.message);
        }

    }

    return(
        <ScrollView style = {styles.view}>
        <Text style={styles.title}>Bienvenido</Text>

            <TextInput style={styles.input} onChangeText={(text)=>setUser(text)}
              placeholder="Usuario" autoCorrect={false}/>
            <TextInput style={styles.input} 
                onChangeText={(text)=>setEmail(text)}  placeholder="Email" autoCorrect={false}/>
            <TextInput style={styles.input} 
                onChangeText={(text)=>setPass(text)} placeholder="Ingrese su contraseña" autoCorrect={false}
                secureTextEntry={true}/>
            <TouchableOpacity style={styles.registerButton} onPress={createAccount}>
                <Text style={{color:'white', fontWeight:'bold'}}>Registrarme</Text>
            </TouchableOpacity>

        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Init')} style={styles.button}>
            <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    view:{
        paddingHorizontal: 30,
        paddingTop: 80,
        backgroundColor: '#1a2749'
    },
    title:{
        fontSize: 32, 
        fontWeight: "bold",
        textAlign: 'center',
        lineHeight: 35, 
        color: '#e4d9ff',
        marginBottom: 40
    },
    body:{
        paddingTop: 20,
        fontSize: 16,
        lineHeight: 23,
        fontWeight: "medium",
        alignItems: 'center',
        color: '#e4d9ff',
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        borderWidth: 2,
        borderColor: '#fafaff',
        borderRadius: 6,
        backgroundColor:'',
        marginTop: 40,
    },
    button:{
        flex: 1,
        alignItems: 'center',
        padding:16,
        borderRadius: 6,
    },
    buttonText:{
        fontWeight: "bold",
        color: '#e4d9ff'
    },
    input:{
        backgroundColor:'#fafaff',
        padding:20,
        borderRadius:16,
        marginBottom: 10,
    },
    registerButton:{
        backgroundColor:'#273469',
        padding: 20,
        borderRadius:16,
        alignItems: 'center',
        marginVertical: 30,
        shadowColor: '#273469',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: .44,
        shadowRadius: 10.32,
    }
})