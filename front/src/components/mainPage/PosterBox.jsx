import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function PosterBox(props) {
    const movieTitle = props.title;
    const moviePoster = props.poster;
    const movieRuntime = props.runtime;
    const navigate = useNavigate();
    
    const Poster = styled.div`
        width: 210px;
        height: 300px;
        background-image: url(${moviePoster});
        background-repeat:no-repeat;
        background-size: cover;
        background-color: #999;
        display: flex;
        flex-direction: column;
    `;

    const ticketingBtn = () => {
        navigate("/ticketpage");
    }

    const likeBtn = () => {
    }

    useEffect(()=>{

    }, [])

    return (
        <div style={{
            margin: 20,
        }}>
            <Poster >
                <div style={{
                    fontWeight:"bold",
                    margin: 5,
                }}>{movieTitle}</div>
                <div style={{
                    marginTop:"auto",
                }}>{movieRuntime}</div>
            </Poster>
            <div style={{
                display:"flex",
                flexDirection: "row",
            }}>
                <LikeBtn onClick={likeBtn}>❤{props.likeCount}</LikeBtn>
                <Button onClick={ticketingBtn}>예매하기</Button>
            </div>
        </div>
    );
}
    
    const LikeBtn = styled.div`
        cursor: pointer;
        font-size: 25px;
        color: #f00;
        -ms-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    `;
    
    const Button = styled.div`
        margin-left: auto;
        cursor: pointer;
        background-color: #6C8891;
        width: 70%;
        height: 35px;
        font-size: 20px;
        text-align: center;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        &:hover{
            background-color: #303B41;
            color: #fff;
        }
    `;



export default PosterBox;