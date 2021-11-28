import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';
import Paginate from 'react-paginate';

// Aqui ficam imports de componentes da aplicação
import FeelingLucky from "../../components/ButtonFeelingLucky";
import Characters from "../../components/Characters";
import { Api, securityAccess } from '../../services/api'

// Aqui ficam os estilos e componentes do Styled components
const Container = styled.div`
    height: 60%;
    padding: 20px 20px 0 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const ContainerHelpers = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding-top: 20px;
`;

const ContainerCharacters = styled.div`
    height: 100%;
    width: 60%;
`;

const SearchCharacter = styled.input`
    width: 80%;
    height: 40px;
    border: none;
    border-radius: 20px;
    background-color: #E23636;
    padding: 4px 40px 4px 20px;
    color: #fff;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    transition: 0.2s;
    ::placeholder{
        color: #fff;
        font-weight: 500;
        opacity: 0.8;
    }
    :hover{
        width: 83%;
    }
`;

const ISearch = styled(FaSearch).attrs({
    size: 24
})`
    position: relative;
    top: -32px;
    right: -34%;
    color: #fff;
    cursor: pointer;
`;

const Pagination = styled(Paginate)`
    padding: 0;
    margin: 0;
    list-style: none;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    > li{
        margin: 4px;
        height: 100%;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Bebas Neue', cursive;
        font-size: 20px;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.2s;
        
        > a{
            width: 50%;
            height: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            :hover{
                background-color: #9e2828;
                color: #fff;
            }

        }
    }

    >.selected{
        >a{
            background-color: #E23636;
            color: #fff;
        }        
    }
`;

const GridCharacters = styled.div`
    height: 90%;
    display: flex;
    flex-wrap: wrap;
`

//  Aqui onde se inicia a aplicação
function AllCharacters(){

    // Aqui estão os estados da tela de Characters

    // O estado characters armazenará todos os Personagem que vem da API
    const [characters, setCharacters] = useState({});

    // O estado charactersPaginate responsavel por auxiliar a paginação
    const [charactersPaginate, setCharactersPaginate] = useState([]);

    // Função que indetifica qual pagina foi clicada e quais Characters exibir
    function  HandlePageClick(event){
        let first = event.selected !== 0 ? (event.selected * 8) : 0
        let last = first + 7
        let values = []
        for(let i = first; i <= last ; i++){
            if(characters.count - 1 >= i){
                values.push(characters.results[i])
                setCharactersPaginate(values)
            }
        }
        
    }

    // Função que organiza o filtro da aplaicação
    function FilterCharacters(value){
        if(characters.results === undefined){
            setCharactersPaginate([])
            return null
        }
        const filter = characters.results.filter((retorno) => retorno.name.startsWith(value))
        if(value){
            if(filter.length > 7){
                setCharactersPaginate(filter)
                HandlePageClick({selected:0})
            }else{
                setCharactersPaginate(filter)
            }
        }else{
            HandlePageClick({selected:0}) 
        }
    }

    // Hook que cuida dos estados do componente na montagem
    useEffect(() => {
        // Get na API Marvel em characters
        // SecurityAccess é um acesso que a marvel disponibiliza por conta
        // Favor consultar o Reade.me para mais informações de como configurar
        Api.get(`/characters${securityAccess}`)
       .then(response => {
        setCharacters(response.data.data)
       })
    }, []);

    // Função que monta a estrutura de paginação sempre que Characters ganhar seu valor
    useEffect(() => {
        HandlePageClick({selected:0})        
    }, [characters]);

    return(
        <Container>
            <ContainerHelpers>
                <FeelingLucky characters={characters} />
                <SearchCharacter 
                    placeholder="Digite o nome do personagem" 
                    onChange={(e) => FilterCharacters(e.target.value)}
                />
                <ISearch />
            </ContainerHelpers>
            <ContainerCharacters>
                <GridCharacters>
                    {charactersPaginate.map((value,index) => {
                        return(
                            <Characters key={index} character={value} />
                        )
                    }) 
                    }
                </GridCharacters>
                <Pagination
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={"..."}
                    pageCount={Math.round(characters.count / 8)}
                    marginPagesDisplayed={2}
                    onPageChange={HandlePageClick}
                    pageRangeDisplayed={2}
                /> 
            </ContainerCharacters>            
        </Container>
    )
}

export default AllCharacters