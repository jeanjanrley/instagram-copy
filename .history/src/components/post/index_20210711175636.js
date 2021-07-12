import React from 'react';
import {View, Image} from 'react-native'
import styled from 'styled-components/native';
import foto from '../../assets/thamires.jpeg'

const Imagem = styled.Image`
    width: 500px;
    height: 500px;
`;


export default function(props){


    return(
       <ScrollView>
           <Imagem source={foto}></Imagem>
       </ScrollView> 
    )
}