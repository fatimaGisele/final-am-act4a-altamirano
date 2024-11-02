import { imageOfTheDay } from "../lib/http";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image} from "react-native";


export function ApodCard() {

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
    <View style={styles.card}>
      <Image source={{ uri: apod.hdurl }} style={styles.image} />
      <Text style={styles.title}>{apod.title}</Text>
      <Text style={styles.date}>{apod.date}</Text>
      <Text style={styles.description}>{apod.explanation}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  date: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});