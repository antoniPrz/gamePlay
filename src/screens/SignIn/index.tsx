import React, {useState}from "react";
import { 
  Text, 
  View ,
  Image,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { estilos } from "./styles";

export function SignIn() {
    const [textoInput, setTextoInput ] = useState('');

    return (
        <View style={estilos.container}>
            
        <Image 
        source= {IllustrationImg}
        style={estilos.image}
         />

        <View style={estilos.content}>
            <Text style={estilos.title}>
                Organize sus {`\n`}
                partidos de {`\n`}
                Realidad Virtual
            </Text>
            <Text style={estilos.subTitle}>
                Cree grupos para encontrarse{`\n`}
                 y jugar con sus amigos 
            </Text>
        </View>



        </View>
       
    );
}





{/* <View style={{ flex: 1, backgroundColor: 'red', alignItems:'center',justifyContent:'center'}}></View> */}