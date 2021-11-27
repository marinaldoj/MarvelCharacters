import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom'

import logo from '../../assets/Logo.svg';

const Image = styled.img`
    width: 400px;
`;

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 0 10%;
    height: 25%;
`;

const ContainerMenu = styled.div`
    display:flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-end;
`;

const ContainerTitles = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 10%;
    margin-bottom: 6px;
    font-family: 'Bebas Neue', cursive;
    font-size: 24px;
    > p {
        cursor: pointer;
    }
`;

const LineBlack = styled.div`
    background-color: #000;
    height: 10px;
    width: 600px;
    border-radius: 10px;
`;

const LineRed = styled.div`
    background-color: #E23636;
    height: 10px;
    width: 170px;
    border-radius: 10px;
    margin-left: ${ props => `${props.marginLength}%` };
    transition: 0.2s;
`;

function MainHeader(){
    const location = useLocation()

    const [ marginLength, setMarginLength ] = useState(location.pathname === '/' ? '4' : '68')

    useEffect(() => {
        setMarginLength(location.pathname === '/' ? '4' : '68');
    }, [location.pathname])

    return(
        <Container>
            <Image src={logo} alt="Marvel Characters" />
            <ContainerMenu>
                <ContainerTitles>
                    <Link 
                        to='/'
                        onMouseEnter={() => {setMarginLength('4')}}
                        onMouseLeave={() => {setMarginLength(location.pathname === '/' ? '4' : '68')}}                    
                    >Apresentação</Link>
                    <Link 
                        to='/characters'
                        onMouseEnter={() => {setMarginLength('68')}}
                        onMouseLeave={() => {setMarginLength(location.pathname === '/characters' ? '68' : '4')}}
                    >Personagens</Link>
                </ContainerTitles>
                <LineBlack>
                    <LineRed  marginLength={marginLength} />
                </LineBlack>
            </ContainerMenu>
        </Container>
    )
}

export default MainHeader