import React from 'react';
import styled from 'styled-components/native';
import foto from '../../assets/paisagem.jpg'
import Gostar from '../../assets/gostar.svg'
import Comment from '../../assets/comente.svg'
import Direct from '../../assets/direct.svg'
import Save from '../../assets/ribbon.svg'

const View = styled.View`
    display: flex;
    flex: 1;
    width: 100%;
    height: auto;
    margin-bottom: 5px;
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

const AssetsArea = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: auto;
    width: 100%;
    padding: 15px;
    padding-left: 20px;
`
const Assets = styled.View`
    display: flex;
    flex-direction: row;
`
const Asset = styled.View`
    margin-right: 15px;
`

const Curtidas = styled.Text`
    font-weight: bold;
    font-size: 12;
    margin-left: 20px;
`


export default function(props){


    return(
       <View>
           <Div>
                <DivInterna>
                    <Icone source={foto}/>
                    <Text>{props.nome}</Text>
                </DivInterna>
                <Pontos>
                    <Ponto/>
                    <Ponto/>
                    <PontoUnico/>
                </Pontos>
           </Div>
           <Imagem source={foto}/>
           <AssetsArea>
               <Assets>
                    <Asset>
                            <Gostar width={25} height={25} fill="red"/>
                    </Asset>
                    <Asset>
                            <Comment width={25} height={25} fill="red"/>
                    </Asset>
                    <Asset>
                            <Direct width={25} height={25} fill="red"/>
                    </Asset>
                </Assets>
                    <Asset>
                            <Save width={25} height={25} fill="red"/>
                    </Asset>
                        <Curtidas>19 curtidas</Curtidas>
           </AssetsArea>
       </View> 
    )
}
  