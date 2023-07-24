import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Container from "../components/public/Container";
import TitleBg from "../components/public/TitleBg";



function Header() {
    const [ path, setPath ] = useState("");
    useEffect(()=> {
        if (localStorage.getItem(`accessToken`) === null) {
            setPath('/')
        } else {
            setPath('/mainpage');
        }
    });

    const logoutBtn = () => {
        const token = localStorage.getItem('accessToken');

        localStorage.clear();
        window.location.replace("http://localhost:3000");
        console.log(path);
    }
    return (
        <Container>
            <TitleBg>
                    <Link to={path}>
                        <Font>
                            <BigFont>혼</BigFont>자보는<BigFont>영</BigFont>화<BigFont>관</BigFont>
                        </Font>
                    </Link>
                    <HeaderBox>
                        <Link onClick={logoutBtn}>
                                로그아웃
                        </Link>
                    </HeaderBox>
            </TitleBg>
        </Container>
    )
}


const BigFont = styled.span`
    font-size: 60px;
    font-weight: bold;
    color: #000;
`;
    
const Font = styled.h1`
    color: #000;
`;
    
const HeaderBox = styled.div`
    float: right;
`;
export default Header;