import React from 'react';
import {Text} from 'react-native'
import styled from 'styled-components/native';
import foto from '../../assets/thamires.jpeg'

const View = styled.View`
    padding: 30px;
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
`
const Div = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center
`

const Icone = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

const Imagem = styled.Image`
    width: 400px;
    height: 400px;
`;


export default function(props){


    return(
       <View>
           <Div>
                <Icone source={foto}/>
                <Text>Thamires Andrades</Text>
           </Div>
           <Imagem source={foto}/>
       </View> 
    )
}