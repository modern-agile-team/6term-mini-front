import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const Today = (props) => {
    const day = [];
    day.push(props.num)
    return (
        <DayBox>
            {day}
        </DayBox>
    )
};

const DayBox = styled.div`
    margin-right: auto;
    margin-left: auto;
    background-color: rgb(107, 129, 145);
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #303B41;
        color: #fff;
    };
`;

export default Today;