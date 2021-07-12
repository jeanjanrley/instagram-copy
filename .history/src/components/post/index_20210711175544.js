import React from 'react';
import {View, Image} from 'react-native'
import styled from 'styled-components/native';
import foto from '../../assets/thamires.jpeg'

const Imagem = styled.Image`
    width: 600px;
    height: 600px;
`;


export default function(props){


    return(
       <View>
           <Imagem source={foto}></Imagem>
       </View> 
    )
}