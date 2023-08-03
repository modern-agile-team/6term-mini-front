import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ListPosterBox(props) {
    const [ likeCount , setLikeCount ] = useState(0);
    const movieTitle = props.title;
    const moviePoster = props.poster;
    const movieRuntime = props.runtime;
    const navigate = useNavigate();
    
    const Poster = styled.div`  //movePoster를 받아야하기 때문에 함수 안쪽에 선언
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
        setLikeCount(props.likeCount+1);
    }

    useEffect(()=>{

    }, [])

    return (
        <div style={{
            margin: 20,
        }}>
            <Poster />
            <FlexBox style={{
                backgroundColor:"#999"
            }}>
            </FlexBox>
                <div style={{
                    fontWeight:"bold",
                    fontSize:20,
                }}>영화 제목 : {movieTitle}</div>
                <div>런닝 타임 : {movieRuntime}</div>
            <FlexBox>
                <LikeBtn onClick={likeBtn}>❤{props.likeCount}</LikeBtn>
                <Button onClick={ticketingBtn}>예매하기</Button>
            </FlexBox>
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

    const FlexBox = styled.div`
        display: flex;
    `;



export default ListPosterBox;