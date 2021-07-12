import React from 'react';
import {View, Image} from 'react-native'
import {imagem} from '../../assets/thamires.jpeg'



export default function(props){


    return(
       <View>
           <Imagem source={imagem}></Imagem>
       </View> 
    )
}