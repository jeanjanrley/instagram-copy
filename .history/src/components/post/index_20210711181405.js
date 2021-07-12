import React from 'react';
import styled from 'styled-components/native';
import foto from '../../assets/thamires.jpeg'

const View = styled.View`
    margin-top: 100px;
    display: flex;
    flex: 1;
    width: 100%;
    border: 0.5px solid #cecece;
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

const Imagem = styled.Image`
    width: auto;
    height: 500px;
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