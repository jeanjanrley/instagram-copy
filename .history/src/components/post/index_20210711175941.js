import React from 'react';
import {Text} from 'react-native'
import styled from 'styled-components/native';
import foto from '../../assets/thamires.jpeg'

const View = styled.View`
    display: flex;
    flex: 1;
`

const Icone = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
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