import React from 'react';
import styled from 'styled-components/native';
import foto from '../../assets/thamires.jpeg'

const View = styled.View`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
`
const Div = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`

const Icone = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 15px;
`;

const Text = styled.Text`
    font-weight: bold;
`

const Imagem = styled.Image`
    width: 400vw;
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