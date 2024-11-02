import { StyleSheet, Image, Dimensions, View, Text, TouchableOpacity, ScrollView} from 'react-native'
import {portada} from './../assets/portada.jpg'


export default function Init({navigation}){
 
    const{height} = Dimensions.get('screen');

    return(
            <ScrollView style = {styles.view}>
                {<Image source= {portada}
                style={{
                    width: '85%',
                    height: (height/3)*1.4,
                    borderRadius: 20,
                    marginBottom: 40,
                }}/>}
                <View style = {styles.body}>
                <Text style = {styles.title}>Bienvenido </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Register')}
                        style={styles.button1}>
                            <Text style={styles.buttonText}>Registrate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} 
                        style={styles.button2}>
                            <Text style={styles.buttonText}>Iniciar Sesion</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    view:{
        paddingHorizontal: 30,
        paddingTop: 40,
        backgroundColor: 'pink',
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