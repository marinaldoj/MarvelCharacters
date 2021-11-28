import React from "react";
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa'

const Container = styled.div`
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Linkedin = styled(FaLinkedin).attrs({
    size: '50px'
})`
    color: #E23636;
    margin-right: 10px;
    cursor: pointer;
    transition: 0.1s;
    :hover{
        transform: scale(1.1);
    }
    :active{
        color: #9e2828;
    }
`;

const Text = styled.p`
    font-family: 'Bebas Neue', cursive;
    font-size: 20px;
`;

// Função responsavel por abrir o linkedin no meu perfil
function OpenLinkedin() {
    window.open('https://www.linkedin.com/in/marinaldo-carvalho-0a470a192/', '_blank');
}

// componente apenas de agradecimento 
function Footer(){
    return(
        <Container >
            <Linkedin onClick={() => OpenLinkedin()} />
            <Text> 
                Aplicação desenvolvida como challenge e mais um aprendizado, 
                fico grato pela opotunidade e por avaliarem minha aplicação.
            </Text>
        </Container>
    )
}

export default Footer