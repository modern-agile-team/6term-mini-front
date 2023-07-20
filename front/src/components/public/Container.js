import React from "react";
import styled from "styled-components";

/*
    @returns width heigth에 따라서 크기 container크기 결정 margin값으로 주변과 띄을 수 있음
*/

const Container = styled.div`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    margin: ${({ margin }) => margin}px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #000;
    /* border: 1px solid #000;  */
`;

export default Container