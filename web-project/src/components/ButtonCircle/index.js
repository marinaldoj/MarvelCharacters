import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const Container = styled.button`
    height: 150px;
    width: 150px;
    border-radius: 100%;
    background-color: #E23636;
    border: none;
    transition: 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        background-color: #9e2828;

    }
`;

const ChevronRight = styled(FaChevronRight)
    .attrs({size: 80})`color:#fff;margin-left:10px;`;
    
const ChevronLeft = styled(FaChevronLeft)
    .attrs({size: 80})`color:#fff; margin-right:10px;`;

function ButtonCircle({angle = 'Right', Href}){
    const navigate = useNavigate()

    function handleClick(link){
        navigate(link)
    }

    return(
        <Container onClick={() => handleClick(Href)} >
            {angle === 'Left' ? <ChevronLeft /> : <ChevronRight />}
        </Container>
    )
}

export default ButtonCircle