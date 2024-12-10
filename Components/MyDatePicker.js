import { useEffect, useState } from 'react';
import  DateTimePicker  from '@react-native-community/datetimepicker';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import EventOfADay from './EventOfADay';




export default function MyDatePicker({navigation}){

   const date = new Date();
    const [hide, setHide] = useState(false);
    const [visible, setVisible] = useState(false);
    const [day, setDay] =useState(date.getDate());
    const [month, setMonth] =useState(date.getMonth()+1);
    const [year, setYear] =useState(date.getFullYear());

    const pickDay= (e, selectedDate)=>{
        setDay(selectedDate.getDate());
        setYear(selectedDate.getFullYear());
        if(month<10){
            setMonth(`${0}`+`${selectedDate.getMonth()}`);
        }else{
            setMonth(selectedDate.getMonth()+1);
        }
        setVisible(false);
        setHide(true);
    }
      
    const toShow =()=>{
        setVisible(true);
    }

    const returnTo=()=>{
        setVisible(false);
        setHide(false);
    }

    return(
       
        <ScrollView style={styles.card}>
            <View style={styles.view}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={toShow} style={styles.button}>
                    <Text style={styles.buttonText}>Elige una fecha y descubre el evento astronomico de ese dia</Text>
                    </TouchableOpacity>
                    {visible && <DateTimePicker value={date}  onChange={pickDay}/>}
                    {hide && <EventOfADay day={day} month={month} year={year} returnTo={returnTo}/>}
                </View>
            </View>
        </ScrollView>
       
            
    )

} 

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'pink',
      },
      view:{
        marginTop: 40,
        alignItems: 'center'
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
})