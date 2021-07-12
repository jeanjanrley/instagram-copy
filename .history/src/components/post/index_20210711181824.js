import React from 'react';
import styled from 'styled-components/native';
import foto from '../../assets/thamires.jpeg'

const View = styled.View`
    margin-top: 100px;
    display: flex;
    flex: 1;
    width: 100%;
`
const Div = styled.View`
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
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

const Pontos = styled.View`
    width: 5px;height
`
const Ponto = styled.View``

const Imagem = styled.Image`
    width: auto;
    height: 500px;
    border: 0.5px solid #cecece;
`;


export default function(props){


    return(
       <View>
           <Div>
                <Div>
                    <Icone source={foto}/>
                    <Text>Thamires Andrades</Text>
                </Div>
                <Pontos>
                    <Ponto/>
                    <Ponto/>
                    <Ponto/>
                </Pontos>
           </Div>
           <Imagem source={foto}/>
       </View> 
    )
}