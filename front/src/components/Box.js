import React from "react";
import styled from "styled-components"

const Box = styled.div`
    width: ${({ width }) => width }px;
    height: auto;
    background-color: rgb(238, 237, 237);
    box-shadow: 7px 7px 0px 1px rgb(154, 154, 154);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default Box;