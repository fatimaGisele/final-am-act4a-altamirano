import {useState } from 'react';
import  DateTimePicker  from '@react-native-community/datetimepicker';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import EventOfADay from './EventOfADay';




export default function MyDatePicker({navigation}){

   const date = new Date();
    const [hide, setHide] = useState(false);
    const [showBtn, setShowBtn] = useState(true);
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
        setShowBtn(false);
        setVisible(false);
        setHide(true);
    }
      


    const toShow =()=>{
        setVisible(true);
    }

    const returnTo=()=>{
        setShowBtn(true);
        setVisible(false);
        setHide(false);
    }

    return(
       
        <ScrollView style={styles.card}>
            <View style={styles.view}>
            { showBtn &&
                <View style={[styles.buttonContainer,{ marginTop:40, marginBottom:40}]}>
                    <TouchableOpacity onPress={toShow} style={styles.button}>
                   <Text style={styles.buttonText}>Descubre el evento astronomico del dia</Text>
                    </TouchableOpacity>  
                </View>
                }
                {visible && <DateTimePicker value={date}  onChange={pickDay}/>}
                {hide && <EventOfADay day={day} month={month} year={year} returnTo={returnTo}/>}
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('ApodCard')} style={styles.button}>
                    <Text style={styles.buttonText}>Inicio</Text>
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
      buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        borderRadius: 6,
        backgroundColor:''
    },
    button:{
        flex: 1,
        alignItems: 'center',
        padding:16,
        borderRadius: 6,
        backgroundColor: '#1a2749',
        opacity: '70%',
        borderWidth: 1,
        borderColor: '#fafaff'
    },
    buttonText:{
        fontWeight: "bold",
        color: '#e4d9ff'
    }
})