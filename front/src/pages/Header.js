import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Container from "../components/public/Container";
import TitleBg from "../components/public/TitleBg";

const BigFont = styled.span`
    font-size: 60px;
    font-weight: bold;
    color: #000;
`

const Font = styled.h1`
    color: #000;
`

const HeaderBox = styled.div`
    float: right;
`;

function Header() {
    return (
        <Container>
            <TitleBg>
                    <Link to="/mainpage">
                        <Font>
                            <BigFont>혼</BigFont>자보는<BigFont>영</BigFont>화<BigFont>관</BigFont>
                        </Font>
                    </Link>
                    <HeaderBox>
                        <Link to="/login">
                                로그아웃
                        </Link>
                    </HeaderBox>
            </TitleBg>
        </Container>
    )
}

export default Header;