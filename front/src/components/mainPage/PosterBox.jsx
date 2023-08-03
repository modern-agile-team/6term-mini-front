import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import patchLikeApi from "../../api/patchLikeApi";

function PosterBox(props) {
    const movieTitle = props.title;
    const moviePoster = props.poster;
    const movieRuntime = props.runtime;
    const navigate = useNavigate();

    const ticketingBtn = () => {
        navigate("/ticketpage");
    }

    const likeBtn = async () => {
        await patchLikeApi(`${props.id}`, props.id);
    }

    return (
        <div style={{
            margin: 20,
        }}>
            <Poster moviePoster={moviePoster}>
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
                <LikeBtn onClick={likeBtn}>❤{props.like}</LikeBtn>

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
// @return moviePoster API
const Poster = styled.div`
width: 210px;
height: 300px;
background-image: url(${({ moviePoster }) => moviePoster});
background-repeat:no-repeat;
background-size: cover;
background-color: #999;
display: flex;
flex-direction: column;
`;




export default PosterBox;