import React, { useEffect, useState } from "react";
import styled from "styled-components"; 
import { getMovieApi } from "../../api/getMovieApi";

const LoadDate = ({ onClickLoadDate }) => {
    const [ api, setApi ] = useState("");

    const getMovieSeatApi = async () => {
        const res = await getMovieApi(`/movies/seats`);
        setApi(res.data.seat)
    }

    const toDayBtn = (e) => {
        const seat = [...api];
        const res = e.target.name;
        const arr = [res];
        seat.filter((data, idx) => {
            if (Number(data.seatDate) === Number(res)) {
                arr.push(data);
            }
            onClickLoadDate(arr);
        });
    };

    useEffect(()=>{
        getMovieSeatApi();
    }, [])

    return (
        <div style={{
            marginBottom: 15,
            backgroundColor: `rgb(238, 237, 237)`,
        }}>
            <DayTitle>날짜</DayTitle>
            <DateBox>
                <div>&lt;</div>
                <DayBox name={`20230801`} onClick={toDayBtn}>08/01</DayBox>
                <DayBox name={`20230802`} onClick={toDayBtn}>08/02</DayBox>
                <DayBox name={`20230803`} onClick={toDayBtn}>08/03</DayBox>
                <DayBox name={`20230804`} onClick={toDayBtn}>08/04</DayBox>
                <DayBox name={`20230805`} onClick={toDayBtn}>08/05</DayBox>
                <DayBox name={`20230806`} onClick={toDayBtn}>08/06</DayBox>
                <DayBox name={`20230807`} onClick={toDayBtn}>08/07</DayBox>
                <DayBox name={`20230808`} onClick={toDayBtn}>08/08</DayBox>
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

const DayBox = styled.button`
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

export default LoadDate;