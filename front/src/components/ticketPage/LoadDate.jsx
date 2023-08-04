import React from "react";
import Today from "./Today";
import styled from "styled-components"; 

const LoadDate = () => {
    return (
        <div>
            <DayTitle>날짜</DayTitle>
            <DateBox>
                <div>&lt;</div>
                <Today num={1} />
                <Today />
                <Today />
                <Today />
                <Today />
                <Today />
                <Today />
                <Today />
                <Today />
                <div>&gt;</div>
            </DateBox>
        </div>
    )
};

const DayTitle = styled.div`
    padding: 10px;
    background-color: #6C8891;
    font-size: 25px;
    font-weight: bold;
    padding: 0px;
    padding-left: 10px;
`

const DateBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    border: 1px solid #000;
    width: 650px;
`;

export default LoadDate;