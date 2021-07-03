import React, {useState}from "react";
import { 
  Text, 
  View ,
  Image,
  StatusBar,
} from 'react-native';

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from '../../assets/illustration.png';
import { estilos } from "./styles";

export function SignIn() {
    const [textoInput, setTextoInput ] = useState('');

    return (
        <View style={estilos.container}>
            <StatusBar barStyle='light-content'
            />
            
        <Image 
        source= {IllustrationImg}
        style={estilos.image}
        resizeMode='stretch'
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

        <ButtonIcon  title ="Entrar con Discord " activeOpacity= {0.6}/>
        </View>
        </View>
       
    );
}





{/* <View style={{ flex: 1, backgroundColor: 'red', alignItems:'center',justifyContent:'center'}}></View> */}