import React from "react";
import styled from "styled-components";

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