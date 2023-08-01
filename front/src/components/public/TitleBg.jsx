import React from "react";
import styled from "styled-components"

/* 위치 title
    @returns size만큼 font-size를 준다.
*/

const TitleBg = styled.div`
    font-size: ${({ size }) => size }px;

    background-color: #6C8891;
    width: 100%;
    font-weight: bold;
    color: #000;
    display: flex;
`;

export default TitleBg;