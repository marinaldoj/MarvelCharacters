import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom'

// Aqui ficam imports de componentes da aplicação
import ButtonCircle from "../../components/ButtonCircle";
import { securityAccess, Api } from "../../services/api";

// Aqui ficam os estilos e componentes do Styled components
const Container = styled.div`
    height: 60%;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`
const ContainerDescription = styled.div`
    height: 100%;
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const Image = styled.img`
    height: 100%;
    width: 30%;
    border-radius: 20px;
    object-fit: cover;
`;

const Text = styled.p`
    width: 100%;
    text-align: justify;
    font-family: 'Roboto' , sans-serif;
    font-size: 18px;
    font-weight: 400;
`

const NomeCharacter = styled.p`
    width: 100%;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    font-size: 24px;
    font-weight: 400;
`


function ProfileCharacter(){

    // Aqui eu encontro o valor do id atraves do route params
    const {id} = useParams();

    // Estado character é o estado do personagem que veio da API
    const [character, setCharacter] = useState({});

    // Hook que cuida dos estados do componente na montagem
    useEffect(() => {
        // Get na API Marvel em characters/ID 
        // SecurityAccess é um acesso que a marvel disponibiliza por conta
        // Favor consultar o Reade.me para mais informações de como configurar
        Api.get(`/characters/${id}${securityAccess}`)
       .then(response => {
        setCharacter(response.data.data.results[0])
       })
    }, []);

    return(
        <Container>
            <ButtonCircle Href="/characters" angle='Left' />
            <ContainerDescription>
                <NomeCharacter>{character && character.name}</NomeCharacter>
                <Text>
                    {/* Aqui é localizada a descrção alguns personagem não tem */}
                    {character.description === "" ? "Descrição não informada pera API." : character.description}
                </Text>
            </ContainerDescription>
            {/* Aqui onde é carregado a imagem do character */}
            {character.thumbnail !== undefined ? <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/> : null}            
        </Container>
    )
}

export default ProfileCharacter