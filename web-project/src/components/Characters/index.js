import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 25%;
    height: 50%;
    padding: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const ContainerImage = styled.div`
    width: 100%;
    height: 85%;
`;

const ImageHero = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const NameHero = styled.div`
    height: 15%;
    background-color: #151515;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding-left: 10px;
    display: flex;
    align-items: center;
`;

const DoorGrey = styled.div`
    width: 90%;
    height: ${ props => props.openDoor === 'active' ? '0%' : '75%' };
    background-color: #504A4A;
    position: absolute;
    opacity: 0.6;
    z-index: 2;
    transition: 0.3s;
`;

// componente que que exibe o character
function Characters ({character}){

    // Hook para fazer navegação
    const navigate = useNavigate();

    const [ doorValue, setDoorValue ] = useState('')

    // função que faz a navegação para a rota do character
    function selectCharacter(id){
        navigate(`/character/${id}`)
    }

    return(
        <Container 
            onMouseEnter={() => setDoorValue('active')}
            onMouseLeave={() => setDoorValue('')}
            onClick={() => selectCharacter(character.id)}
        >
            <DoorGrey openDoor={doorValue} />
            <ContainerImage>
                <ImageHero src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
            </ContainerImage>
            <NameHero>{character.name}</NameHero>
        </Container>
    )
}

export default Characters