import React from 'react';
import {View, Image} from 'react-native'
import foto from '../../assets/thamires.jpeg'

import Imagem from './styles'


export default function(props){


    return(
       <View>
           <Imagem srv={foto}></Imagem>
       </View> 
    )
}