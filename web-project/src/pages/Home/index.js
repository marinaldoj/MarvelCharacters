import React from "react";
import styled from "styled-components";

import ButtonCircle from '../../components/ButtonCircle'

const Container = styled.div`
    height: 60%;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`
const Text = styled.p`
    width: 50%;
    text-align: justify;
    font-family: 'Roboto' , sans-serif;
    font-size: 18px;
    font-weight: 400;
`

function Home(){
    return(
        <Container>
            <Text>
                Esta aplicação tem como principal objetivo realizar a apresentação dos super
                heróis da Marvel, por meio de uma integração por API (Application Programming Interface) 
                que foi desenvolvida com o intuito de acessar os personagens e suas características principais. 
                Para facilitar sua busca, dispomos de um campo de <strong>“Filtro”</strong>, onde poderá selecionar seu personagem 
                favorito ou clique sobre o botão <strong>"Feeling lucky"</strong>para que o sistema te apresente um personagem aleatório. 
                Bom divertimento!
            </Text>
            <ButtonCircle Href="/characters" />
        </Container>
    )
}

export default Home