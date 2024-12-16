import { imageOfTheDay } from "../lib/http";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

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

  const info = async()=>{
    const userRef = collection(db, "Usuario");
    const q = query(userRef, where("email", "==", e ));
    const response = await getDocs(q);     
    response.forEach((d)=>{console.log(d.data())})
      
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
      
      <View style={styles.view}>

      <Text style={styles.description}>Hola {e}!!!</Text>

        <Image source={{ uri: apod.hdurl }} style={styles.image} />
        <Text style={styles.title}>{apod.title}</Text>
        <Text style={styles.date}>{apod.date}</Text>
        <Text style={styles.description}>{apod.explanation}</Text>
      </View>


      <View style={styles.buttonContainer1}>
        <TouchableOpacity onPress={()=>navigation.navigate('MyDatePicker')} style={styles.button1}>
          <Text  style={styles.buttonText}>Elige un dia</Text>
        </TouchableOpacity>
     </View>

      <View style={styles.buttonContainer2}>
        <TouchableOpacity onPress={SignOut} style={styles.button2}>
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
  buttonContainer1:{
    flexDirection: 'row',
    width: '100%',
    borderWidth: 2,
    borderRadius: 6,
    marginTop: 40,
    borderColor: '#fafaff',
    backgroundColor:'#273469',
  },
  buttonContainer2:{
    flexDirection: 'row',
    width: '100%',
    borderWidth: 2,
    borderColor: '#fafaff',
    borderRadius: 6,
    marginTop: 1,
    marginBottom:40
},
button1:{
    flex: 1,
    alignItems: 'center',
    padding:16,
    borderRadius: 6,
},button2:{
  flex: 1,
  alignItems: 'center',
  padding:16,
  borderRadius: 6,
  opacity: '70%'
},
buttonText:{
    fontWeight: "bold",
    color: '#e4d9ff'
}
});