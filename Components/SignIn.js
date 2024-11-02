import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from "react-native"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from './../lib/firebaseConfig';

export default function SignIn({navigation}){

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const create = initializeApp(firebaseConfig);
    const auth = getAuth(create);

    const handlerSignIn=async()=>{
        try {
            let account = await signInWithEmailAndPassword(auth, email, pass);
            console.log(account.user);
            navigation.navigate('ApodCard');
        } catch (error) {
            console.log(error);
            Alert.alert(error.message);
        }
        
    }

    return(
    <ScrollView style = {styles.view}>
        <Text style={styles.title}>Hola de nuevo!</Text>
            
            <TextInput style={styles.input} placeholder="Email"   
            onChangeText={(text)=>setEmail(text)}autoCorrect={false}/>
            <TextInput style={styles.input} 
            onChangeText={(text)=>setPass(text)}
            placeholder="Password" autoCorrect={false} secureTextEntry={true}/>
            <TouchableOpacity>
                <Text style={[styles.buttonText, {fontWeight:'bold', lineHeight:30, textAlign:'right'}]}>
                    Recuperar Contraseña</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SignInButton} onPress={handlerSignIn}>
                <Text style={{color:'white', fontWeight:'bold'}}>Iniciar sesion</Text>
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
        backgroundColor: 'pink',
        width: '100%',
    },
    title:{
        fontSize: 32, 
        fontWeight: "bold",
        textAlign: 'center',
        lineHeight: 35, 
        color: 'white',
        paddingBottom: 30,
    },
    body:{
        padding: 20,
        fontSize: 16,
        lineHeight: 23,
        fontWeight: "medium",
        alignItems: 'center',
        color: 'white',
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 6,
        backgroundColor:'',
        marginTop: 40,
    },
    button:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'pink',
        opacity: '70%',
        padding:16,
        borderRadius: 16,
    },
    buttonText:{
        fontWeight: "bold",
        color: 'white'
    },
    input:{
        backgroundColor:'white',
        padding:20,
        borderRadius:16,
        marginBottom: 10,
    },
    SignInButton:{
        backgroundColor:'coral',
        padding: 20,
        borderRadius:16,
        alignItems: 'center',
        marginVertical: 30,
        shadowColor: 'coral',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: .44,
        shadowRadius: 10.32,
    }
})