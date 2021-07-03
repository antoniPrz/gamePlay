import React from "react";
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps,


} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import {estilos} from './styles';

type props =  TouchableOpacityProps &{
    title: string;

}


export function ButtonIcon({title, ...restoDePropiedades} : props){
    return(
        <TouchableOpacity style={estilos.container} {...restoDePropiedades}>
            <View style={estilos.iconWrapper}>
                <Image  source= {DiscordImg} style={estilos.icon}/>
            </View>

            <Text style={estilos.title}>
                {title} 
            </Text>
        </TouchableOpacity>
    );

} 


