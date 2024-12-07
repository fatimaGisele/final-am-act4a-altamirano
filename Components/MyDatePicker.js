import  DateTimePicker  from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { View, Text, StyleSheet, Button,ScrollView } from 'react-native';
import EventOfADay from './EventOfADay';




export default function MyDatePicker({navigation}){

   const date = new Date();
    //const [mode, setMode] = useState('date');
    const [visible, setVisible] = useState(false);
    const [day, setDay] =useState(date.getDate());
    const [month, setMonth] =useState(date.getMonth()+1);
    const [year, setYear] =useState(date.getFullYear());

    const pickDay= (e, selectedDate)=>{
        setDay(selectedDate.getDate());
        setYear(selectedDate.getFullYear());
        if(month<10){
            setMonth(`${0}`+`${selectedDate.getMonth()}`);
            console.log('fecha selecccionada: '+`${day}`+'/0'+`${month}`+'/'+`${year}`);
        }else{
            setMonth(selectedDate.getMonth()+1);
            console.log('fecha selecccionada: '+`${day}`+'/'+`${month}`+'/'+`${year}`);
        }
        //setDate(selectedDate);
        setVisible(true);
    }
      

    return(
       
        <ScrollView>
            <View>
                <Text>Elige una fecha y descubre el evento astronomico de ese dia</Text>
                   { !visible && <DateTimePicker value={date} onChange={pickDay} />}
                    {visible && <EventOfADay day={day} month={month} year={year} visible={setVisible}/>}
            </View>
        </ScrollView>
       
            
    )

} 