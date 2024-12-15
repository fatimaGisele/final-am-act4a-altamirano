import { imageOfTheDay } from "../lib/http";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from "react-native";
import { getAuth, signOut } from "firebase/auth";

export default function ApodCard({navigation}) {

    const auth = getAuth();
    const user = auth.currentUser;
    const [e,setEmail] = useState(user.email);
    const [apod, setApod] = useState([]);
    
    const firstApod = async()=>{
        try {
            let newImage = await imageOfTheDay();
            setApod(newImage);
        } catch (error) {
            console.log(error)
        }
       
    }

    
    const goToDP=()=>{
      navigation.navigate('MyDatePicker')
      
    }

    
    const SignOut = () =>{
      const auth = getAuth();
      signOut(auth).then(() => {
        Alert.alert('Ha cerrado sesion exitosamente');
      }).catch((error) => {
          Alert.alert(error.message);
          console.log(error);
      });
      navigation.navigate('Init');
    }


    useEffect(() => {
     firstApod();
       }, []);
     
  return (
    <ScrollView style={styles.card}>  

    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={()=>navigation.navigate('UserData')} style={styles.button}>
        <Text style={styles.buttonText}>Hola {e}!!!</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={()=>navigation.navigate('MyDatePicker')} style={styles.button}>
        <Text  style={styles.buttonText}>Elige un dia</Text>
      </TouchableOpacity>
    </View>
   
      <View style={styles.view}>
        <Image source={{ uri: apod.hdurl }} style={styles.image} />
        <Text style={styles.title}>{apod.title}</Text>
        <Text style={styles.date}>{apod.date}</Text>
        <Text style={styles.description}>{apod.explanation}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={SignOut} style={styles.button}>
            <Text style={styles.buttonText}>Cerrar Sesion</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a2749',
  },
  view:{
    marginTop: 40,
    alignItems: 'center'
  },
  image: {
    margin:20,
    padding:150,
    width: '100%',
    height: '10%',
    borderRadius: 16,
    alignSelf: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#e4d9ff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#fafaff",
    textAlign: 'center',
    margin: 20,
  },
  date: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e4d9ff",
    marginBottom: 10,
  },
  buttonContainer:{
    flexDirection: 'row',
    width: '100%',
    borderWidth: 2,
    borderColor: '#fafaff',
    borderRadius: 6,
    backgroundColor:'',
    marginTop: 40,
    marginBottom:40
},
button:{
    flex: 1,
    alignItems: 'center',
    padding:16,
    borderRadius: 6,
    backgroundColor: '#1a2749',
    opacity: '70%'
},
buttonText:{
    fontWeight: "bold",
    color: '#e4d9ff'
}
});