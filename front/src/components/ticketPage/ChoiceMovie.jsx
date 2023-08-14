import styled from "styled-components";
import { useEffect, useState } from "react";
import { getMovieApi } from "../../api/getMovieApi";

const ChoiceMovie = ({ onClickTitle , date }) => {
    const [ movie, setMovie ] = useState(null);
    
    //영화 리스트 불러오기
    const getMovieList = async () => {
        const res = await getMovieApi(`/movies/lists`);
        const arr = [...res.data.movieInfo];
        setMovie(arr);
    };

    //영화 선택시 상태 끌어올리기
    const choiceBtn = async (e) => {
        movie.filter((data)=> {
            if (String(data.movie_id) === String(e.target.name)) {
                onClickTitle(data)
            }
        })
    }

    useEffect(()=>{
        getMovieList();
    }, [])
    
    return (
        <div style={{
            padding:10,
            backgroundColor:`rgb(238, 237, 237)`,
            overflow: "scroll",
            width: 668,
            height: 305,
        }}>
            {movie !== null && movie.map((data, idx)=>{
                return (
                    <MovieTime key={idx} onClick={choiceBtn} name={data.movie_id}>
                        <Title onClick={choiceBtn} name={data.movie_id}>{data.movie_title}</Title>
                        <Time onClick={choiceBtn} name={data.movie_id}>{data.movie_runtime}</Time>
                    </MovieTime>
                ) 
            })}
        </div>
    )
};

const MovieTime = styled.button`
    display: flex;
    border: 1px solid #000;
    width: 650px;
    padding: 10px;
    cursor: pointer;
    /* margin-top: 15px;
    margin-bottom: 15px; */
    justify-content: center;
    background-color: rgb(94, 94, 94);
    &:hover {
        background-color: #6C8891;
    }
`
const Title = styled.button`
    background-color: rgb(48, 59, 65);
    color: #fff ;
    width: 280px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    border: 0px;
    outline: 0px;
    cursor: pointer;
`
const Time = styled.button`
    background-color: rgb(48, 59, 65);
    color: #fff ;
    width: 280px;
    border: 0px;
    outline: 0px;
    cursor: pointer;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`

export default ChoiceMovie;