import React, {useState}from "react";
import { Text, View , TextInput } from 'react-native';

import { estilos } from "./styles";

export function SignIn() {

    const [textoInput, setTextoInput ] = useState('prueba');

    return (
        <View style={estilos.container}>
            <Text >
                Primera App kkkkkkkkkkkkkk
            </Text>

            <TextInput style={estilos.input}
            onChangeText={(valor) => setTextoInput(valor)}
            
            />

            <Text>
                Usted escribió .....{ textoInput }
            </Text>

            

        </View>

    )

}





{/* <View style={{ flex: 1, backgroundColor: 'red', alignItems:'center',justifyContent:'center'}}></View> */}