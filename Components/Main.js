import { imageOfTheDay } from "../lib/http";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from "react-native";
import User from './User';

export default function ApodCard({navigation}) {

    const [apod, setApod] = useState([]);
    
    const firstApod = async()=>{
        try {
            let newImage = await imageOfTheDay();
            setApod(newImage);
        } catch (error) {
            console.log(error)
        }
       
    }

    useEffect(() => {
     firstApod();
       }, []);
     
  return (
    <ScrollView style={styles.card}>  
    <User/>   
      <View style={styles.view}>
        <Image source={{ uri: apod.hdurl }} style={styles.image} />
        <Text style={styles.title}>{apod.title}</Text>
        <Text style={styles.date}>{apod.date}</Text>
        <Text style={styles.description}>{apod.explanation}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Init')} style={styles.button}>
            <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  card: {
    backgroundColor: 'pink',
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
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
    textAlign: 'center',
    margin: 20,
  },
  date: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  buttonContainer:{
    flexDirection: 'row',
    width: '100%',
    borderWidth: 2,
    borderColor: 'white',
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
},
buttonText:{
    fontWeight: "bold",
    color: 'white'
}
});