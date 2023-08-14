import styled from "styled-components";
import { useEffect, useState } from "react";
import { getMovieApi } from "../../api/getMovieApi";

const ChoiceMovie = ({ onClickTitle , choiceMovie}) => {
    const [ movie, setMovie ] = useState(null);
    const [ handleClick, setClick ] = useState(null);   //눌렀을 때, 스타일 유지
    const [ prevClick, setPrevClick ] = useState(null); //다른 걸 눌렀을 때, 스타일 변경
    
    //영화 리스트 불러오기
    const getMovieList = async () => {
        const res = await getMovieApi(`/movies/lists`);
        const arr = [...res.data.movieInfo];
        setMovie(arr);
    };

    //영화 선택시 상태 끌어올리기
    const handleChoiceBtn = async (e) => {
        movie.filter((data)=> {
            if (String(data.movie_id) === String(e.target.name)) {
                onClickTitle(data)
                setClick(e.target.name);
            }
        });
    };

    const onChangeMovieName = () => {
        onClickTitle(choiceMovie)
    }

    useEffect(()=>{
        onChangeMovieName();
    })
    useEffect((e)=>{
        //클릭 시 스타일 상태 유지
        if (handleClick !== null) {
            let currect = document.getElementById(handleClick);
            currect.style.backgroundColor = "#6C8891"
        }
        //클릭 시 이전 상태 없애고, 새로운 클릭 부분에 스타일 부여
        if (prevClick !== null) {
            let prev = document.getElementById(prevClick);
            prev.style.backgroundColor = "rgb(94, 94, 94)";
            // prev.addEventListener('mouseover', (e)=>{
            //     e.target.style.backgroundColor = "#6C8891";
            // }, false);
            // prev.addEventListener('mouseout', (e)=>{
            //     e.target.style.backgroundColor = "rgb(94, 94, 94)";
            // }, false);
        }
        setPrevClick(handleClick);
    }, [handleClick])
    
    const showTime = (index) => {
        if (index === 0) return "07:00 ~ 09:00";
        if (index === 1) return "09:00 ~ 11:00";
        if (index === 2) return "11:00 ~ 13:00";
        if (index === 3) return "13:00 ~ 15:00";
        if (index === 4) return "15:00 ~ 17:00";
        if (index === 5) return "17:00 ~ 19:00";
        if (index === 6) return "19:00 ~ 21:00";
        if (index === 7) return "21:00 ~ 23:00";
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
                    <MovieTime id={data.movie_id} key={idx} onClick={handleChoiceBtn} name={data.movie_id}>
                        <Title onClick={handleChoiceBtn} name={data.movie_id}>{data.movie_title}</Title>
                        <Time onClick={handleChoiceBtn} name={data.movie_id}>{showTime(idx)}</Time>
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
    height: 19px;
`
const Time = styled.button`
    background-color: rgb(48, 59, 65);
    color: #fff ;
    width: 280px;
    border: 0px;
    outline: 0px;
    cursor: pointer;
    text-align: center;
    height: 19px;
    margin-left: auto;
    margin-right: auto;
`

export default ChoiceMovie;