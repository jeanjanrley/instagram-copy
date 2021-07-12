import React from 'react';
import {View, Text} from 'react-native'
import styled from 'styled-components/native';
import foto from '../../assets/thamires.jpeg'

const Icone = styled.Image`
    width: 500px;
    height: 500px;
`;

const Imagem = styled.Image`
    width: 500px;
    height: 500px;
`;


export default function(props){


    return(
       <View>
           <Icone souce={foto}/>
           <Text>Thamires Andrades</Text>
           <Imagem source={foto}/>
       </View> 
    )
}