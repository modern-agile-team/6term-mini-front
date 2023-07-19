import React from "react";
import styled from "styled-components";

/*
* 
*
*
*/

const InputText = styled.input`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;

    background-color: #fff;
    border: 1px solid rgb(238, 237, 237);   
    padding-left: 20px;
    margin: 8px;
`;

export default InputText;