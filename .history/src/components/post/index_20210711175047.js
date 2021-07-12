import React from 'react';
import {View, Image} from 'react-native'
import styled from "styled-components/native"
import foto from '../../assets/thamires.jpeg'

const Imagem = styled.image`
`


export default function(props){


    return(
       <View>
           <Imagem src={foto}></Imagem>
       </View> 
    )
}