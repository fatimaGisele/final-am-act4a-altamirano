//este modulo va a servir para cerrar sesion
import { View, StyleSheet, Text, TouchableOpacity,Alert} from "react-native";
import { getAuth, signOut } from "firebase/auth";



export default function SignOut({navigation}){   
    
    const signOutF = async() =>{
        const auth = getAuth();
        signOut(auth).then(() => {
          Alert.alert('Ha cerrado sesion exitosamente');
          navigation.navigate('Init');
        }).catch((error) => {
            Alert.alert(error.message);
            console.log(error);
        });
    }
 

    return(
        <View>
            <TouchableOpacity onPress={signOutF}>
                <Text>Cerrar Sesion</Text>
            </TouchableOpacity>
        </View>
    )
}