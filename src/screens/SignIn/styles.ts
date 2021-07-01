import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/Theme';

export const estilos = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: theme.colors.background
     },

  image:{
    height:360,
    width:'100%'



  },
  content:{
    marginTop:-40,

  },
  
  title:{
    color:theme.colors.heading,
    textAlign:'center',
    fontSize:40,
    marginBottom:16


  },
  subTitle:{
    color:theme.colors.body,
    fontSize:15,
    textAlign:'center',
    marginBottom:48,


  }
})



