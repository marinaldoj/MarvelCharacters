import React from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom'

import ButtonCircle from '../../components/ButtonCircle'

// Aqui ficam os estilos e componentes do Styled components
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
// Função que cria a tela principal ou "apresentação" da aplicação
function Home(){

    const {pathname} = useLocation()

    return(
        <>
        {pathname === '/pt' ? (
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
        ):
        (
            <Container>
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Text>
                <ButtonCircle Href="/characters" />
            </Container>
        )}
        </>
    )
}

export default Home