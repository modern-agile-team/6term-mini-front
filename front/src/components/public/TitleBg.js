import React from "react";
import styled from "styled-components"

/* 위치 title
    @returns size만큼 font-size를 준다.
*/

const TitleBg = styled.div`
    font-size: ${({ size }) => size }px;

    background-color: rgb(107, 129, 145);
    width: 100%;
    font-weight: bold;
    color: #000;
`;

export default TitleBg;