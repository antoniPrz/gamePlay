import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/Theme";

export const estilos = StyleSheet.create({

    iconWrapper:{
        width:56,
        height:56,
        alignItems:'center',
        justifyContent:'center',
        borderRightWidth: 1,
        borderColor:theme.colors.bottonLine
        
    } ,

    icon:{} ,

    container:{
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: 'center',
    } ,

    title:{
        flex: 1,
        color:theme.colors.body,
        fontSize:15,
        textAlign:'center'


    }


})