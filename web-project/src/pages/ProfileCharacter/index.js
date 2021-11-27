import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom'

import ButtonCircle from "../../components/ButtonCircle";
import { securityAccess, Api } from "../../services/api";

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

    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
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
                    {character.description === "" ? "Descrição não informada pera API." : character.description}
                </Text>
            </ContainerDescription>
            {character.thumbnail !== undefined ? <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/> : null}            
        </Container>
    )
}

export default ProfileCharacter