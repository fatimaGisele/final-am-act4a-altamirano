import { StyleSheet, Image, Dimensions, View, Text, TouchableOpacity, ScrollView, SafeAreaProvider} from 'react-native'
import {BackGround} from './BackGround'
import {portada} from './../assets/portada.jpg'

export function Init(){
 
    const{height} = Dimensions.get('screen');

    return(
            <ScrollView>
                <Image source= {portada}
                style={{
                    width: '85%',
                    height: (height/3)*1.4,
                    borderRadius: 20,
                    marginBottom: 40,
                }}/>
                <View style = {styles.view}>
                <Text style = {styles.title}>Bienvenido </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button1}>
                            <Text style={styles.buttonText}>Registrate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2}>
                            <Text style={styles.buttonText}>Sing In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    view:{
        paddingHorizontal: 30,
    },
    title:{
        fontSize: 32, 
        fontWeight: "bold",
        textAlign: 'center',
        lineHeight: 35, 
        color: 'white',
    },
    body:{
        paddingTop: 20,
        fontSize: 16,
        lineHeight: 23,
        fontWeight: "medium",
        alignItems: 'center',
        color: 'white',
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 6,
        backgroundColor:'',
        marginTop: 40,
    },
    button1:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'pink',
        opacity: '70%',
        padding:16,
        borderRadius: 6,
    },
    button2:{
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