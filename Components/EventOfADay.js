//muestra la imagen del dia elegido
import { useState } from "react"
import { Text, View, StyleSheet, Button } from "react-native"

export default function EventOfADay({selected, navigation}){

    const [date, setDate] =useState(selected);

    const showDate=()=>{
        console.log('date desde eventOfADay '+date)
    }

    return(
        <View>
            <Text >HOLA</Text>
            <Text>fecha ELEGIDA: {date} </Text>
            <Button title="holis" onPress={()=>{console.log(date)}}/>
            <Button title="volver" onPress={()=>navigation.goBack()}/>
        </View>
    )
}