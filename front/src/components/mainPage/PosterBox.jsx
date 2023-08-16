import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import patchLikeApi from "../../api/patchLikeApi";

function PosterBox(props) {
    const navigate = useNavigate();
    const [ countLike, setCountLike ] = useState(props.like);

    const handleTicketing = () => {
        navigate("/ticketpage", {state: {
            choiceMovieTitle:props.title,
            choiceMoviePoster:props.poster,
            choiceMovieRuntime: props.runtime,
            choiceMovieId: props.id,
        }});
    };

    const handleLikeBtn = async () => {
        const response = await patchLikeApi(`/movies/like/${props.id}`);
        response.data.state ? setCountLike(countLike + 1) : setCountLike(countLike - 1); 
    };

    return (
        <div style={{
            margin: 20,
        }}>
            <Poster movieposter={props.poster}>
                <div style={{
                    fontWeight:"bold",
                    margin: 5,
                    color: "#fff"
                }}>{props.title}</div>
                <div style={{
                    marginTop:"auto",
                    color: "#fff"
                }}>{props.runtime}</div>
            </Poster>
            <div style={{
                display:"flex",
                flexDirection: "row",
            }}>
                <LikeBtn onClick={handleLikeBtn}>❤{countLike}</LikeBtn>

                <Button onClick={handleTicketing}>예매하기</Button>
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
background-image: url(${({ movieposter }) => movieposter});
background-repeat:no-repeat;
background-size: cover;
background-color: #999;
display: flex;
flex-direction: column;
border: 2px solid #000;
`;




export default PosterBox;