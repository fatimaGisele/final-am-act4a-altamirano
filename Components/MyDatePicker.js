import  DateTimePicker  from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { View, Text, StyleSheet, Button,ScrollView } from 'react-native';
import EventOfADay from './EventOfADay';



export default function MyDatePicker({navigation}){

   const date = new Date();
    //const [mode, setMode] = useState('date');

    const pickDay= (e, selectedDate)=>{
        let day = selectedDate.getDate();
        let month = selectedDate.getMonth()+1;
        let year = selectedDate.getFullYear();
        if(month<10){
            console.log('fecha selecccionada: '+`${day}`+'/0'+`${month}`+'/'+`${year}`);
        }else{
            console.log('fecha selecccionada: '+`${day}`+'/'+`${month}`+'/'+`${year}`);
        }
        //setDate(selectedDate);
        navigation.navigate('EventOfADay');

        return(
            <EventOfADay selected={selectedDate}/>  
        ) 
    }
      


    return(
        <ScrollView>
            <View>
                <Text>Elige una fecha y descubre el evento astronomico de ese dia</Text>
                    <DateTimePicker value={date} onChange={pickDay} />
                   
            </View>
        </ScrollView>
    )

} 