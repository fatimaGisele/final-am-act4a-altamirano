//este modulo va a servir para modificar y actualizar los datos del usuario
/*import {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity,Alert, ScrollView, TextInput} from "react-native";
import { getAuth, updateProfile } from "firebase/auth";
import { getFirestore,collection, query, where, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { firebaseConfig } from './../lib/firebaseConfig';


export default function UserData({navigation}){   

    const auth = getAuth();
    const create = initializeApp(firebaseConfig);
    const auth0 = getAuth(create);
    const db = getFirestore(auth0);

    const user = auth.currentUser;
    const [u, setUser] = useState(user.usuario);
    const [email, setEmail] = useState(user.email);
    const [pass, setPass] = useState(user.password);
 
    const updateData=()=>{
     updateProfile(auth.currentUser,{
        usuario: u,
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

    const info = ()=>{
        const q = query(collection(db, "Usuario"), where("email", "==", email));
            const querySnapshot =  getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
});
        console.log(user);
    }

    return(
        <ScrollView style={styles.view}>
            <Text style={styles.title}>Bienvenido {email}</Text>  

            <TextInput style={styles.input} onChangeText={(text)=>setUser(text)}
              placeholder={u} autoCorrect={false}/>
            <TextInput style={styles.input} onChangeText={(text)=>setEmail(text)}
              placeholder={email} autoCorrect={false}/>
            <TextInput style={styles.input} onChangeText={(text)=>setPass(text)}
              placeholder={pass} autoCorrect={false}/>    
            <TouchableOpacity style={styles.registerButton} onPress={info}>
                <Text style={{color:'white', fontWeight:'bold'}}>USER INFO</Text>
            </TouchableOpacity>

        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.button}>
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
})*/