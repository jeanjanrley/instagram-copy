import React from 'react';
import {View} from 'react-native'
import styles from './styles'
import imagem from '../../assets/thamires.jpeg'

export default function(props){


    return(
       <View>
           <Image src={imagem}></Image>
       </View> 
    )
}