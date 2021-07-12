import React from 'react';
import styled from 'styled-components/native';
import foto from '../../assets/thamires.jpeg'
import gostar from '../../assets/gostar.svg'

const View = styled.View`
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex: 1;
    width: 100%;
    height: 650px;
`
const Div = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 75px;
`
const DivInterna = styled.View`
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
    display: flex;
    flex-direction: column;
`
const Ponto = styled.View`
    margin-bottom: 5px;
    margin-right: 10px;
    width: 3px;
    height: 3px;
    background: #000;
    border-radius: 1.5px;
`
const PontoUnico = styled.View`
    margin-right: 10px;
    width: 3px;
    height: 3px;
    background: #000;
    border-radius: 1.5px;
`

const Imagem = styled.Image`
    width: auto;
    height: 500px;
    border: 0.5px solid #cecece;
`;


export default function(props){


    return(
       <View>
           <Div>
                <DivInterna>
                    <Icone source={foto}/>
                    <Text>Thamires Andrades</Text>
                </DivInterna>
                <Pontos>
                    <Ponto/>
                    <Ponto/>
                    <PontoUnico/>
                </Pontos>
           </Div>
           <Imagem source={foto}/>
           <Imagem source={gostar}/>
       </View> 
    )
}