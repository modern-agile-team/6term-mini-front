import styled from "styled-components";
import { useEffect, useState } from "react";
import { getMovieApi } from "../../api/getMovieApi";

const ChoiceMovie = () => {
    const [ movie, setMovie ] = useState(null);
    
    const getMovieList = async () => {
        const res = await getMovieApi(`/movies/lists`);
        setMovie(res.data.movieInfo);
    };

    const choiceBtn = async () => {
        const res = await getMovieApi(`/movies/seats`)
        console.log(res);
    }

    useEffect(()=>{
        getMovieList();
    }, [])
    
    return (
        <div>
            {movie !== null && movie.map((data, idx)=>{
                return (
                    <MovieTime onClick={choiceBtn}>
                        <Title>{data.movie_title}</Title>
                        <Time>{data.movie_runtime}</Time>
                    </MovieTime>
                ) 
            })}
        </div>
    )
};

const MovieTime = styled.div`
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
const Title = styled.div`
    background-color: rgb(48, 59, 65);
    color: #fff ;
    width: 280px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`
const Time = styled.div`
    background-color: rgb(48, 59, 65);
    color: #fff ;
    width: 280px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`

export default ChoiceMovie;