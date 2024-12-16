//muestra la imagen del dia elegido
import { useState, useEffect } from "react"
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image,Alert } from "react-native";
import { imageOfADay } from "../lib/http";


export default function EventOfADay({day,month,year,returnTo}){

    const [date, setDate] =useState(`${year}`+'-'+`${month}`+'-'+`${day}`);
    const [apod, setApod] = useState([]);

    const firstApod = async()=>{
        try {
            let newImage = await imageOfADay(date)
            setApod(newImage);
        } catch (error) {
            Alert.alert('Debe elegir una fecha entre enero de 1996 y el dia de hoy')
            returnTo();
        }
       
    }

    useEffect(() => {
     firstApod();
       }, []);
     

    return(
        <ScrollView style={styles.card}>    
            <View style={styles.view}>
                <Image source={{ uri: apod.hdurl }} style={styles.image} />
                <Text style={styles.title}>{apod.title}</Text>
                <Text style={styles.date}>{apod.date}</Text>
                <Text style={styles.description}>{apod.explanation}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={returnTo} style={styles.button}>
                    <Text style={styles.buttonText}>Volver</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
       
    )
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
      alignSelf:'center'
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