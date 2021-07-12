import React from 'react';
import {View} from 'react-native'
import imagem from '../../assets/thamires.jpeg'

import {Image} from './styles'

export default function(props){


    return(
       <View>
           <Image src={imagem}></Image>
       </View> 
    )
}