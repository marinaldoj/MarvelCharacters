import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'

const Container = styled.button`
    background-color: #E23636;
    width: 60%;
    height: 60px;
    border: none;
    border-radius: 10px;
    font-family: 'Bebas Neue', cursive;
    font-size: 24px;
    margin-bottom: 40px;
    color: #fff;
    transition: 0.2s;
    :hover{
        background-color: #9e2828;
    }
`;



function FeelingLucky({characters}){

    const navigate = useNavigate()

    function ClickFeelingLucky(characters){
        const resultado = characters.results[Math.floor(Math.random() * characters.results.length)]
        navigate(`/character/${resultado.id}`)
    }

    return(
        <Container onClick={() => ClickFeelingLucky(characters)}>
            Feeling Lucky
        </Container>
    )
}

export default FeelingLucky