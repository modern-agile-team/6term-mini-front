import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import Box from "../components/Box";

const BigFont = styled.span`
    font-size: 60px;
    font-weight: bold;
    color: #000;
`

const Font = styled.h1`
    color: #000;
`

function Header() {
    return (
        <Container>
            <Link to="/">
                <Font>
                    <BigFont>혼</BigFont>자보는<BigFont>영</BigFont>화<BigFont>관</BigFont>
                </Font>
            </Link>
        </Container>
    )
}

export default Header;