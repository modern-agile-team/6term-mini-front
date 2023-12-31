import React, { useEffect, useState } from "react";
import ListPosterBox from "../components/listPage/ListPosterBox";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import  {getMovieApi}  from "../api/getMovieApi";
import LicenseBanner from "../components/public/LincenseBanner";

function MovieListPage() {
    const navigate = useNavigate();
    const [ movie, setMovie ] = useState(null);
    
    //영화 정보 받아오기
    const getMovieTitle = async () => {
        const res = await getMovieApi("/movies/lists");
        setMovie(res.data.movieInfo);
    }

    //메인페이지로 이동
    const toMain = () => {
        navigate('/mainpage');
    }

    useEffect(()=>{
        getMovieTitle();
    }, [])

    return(
        <div>
            <div style={{textAlign:"end"}}>
                <Button onClick={toMain}>메인 페이지로</Button>
            </div>
            <h2 style={{
                marginLeft: 100,
            }}>전체 영화</h2>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                margin: 50
            }}>
                {movie !== null && movie.map((data, idx)=>{  //조건부 랜더링사용(null값일땐 랜더링x)
                    return (
                        <ListPosterBox
                            id={data.movie_id}
                            like={data.like_count}
                            poster={data.movie_poster}
                            likeStatus={
                                data.like_status === 1 ? "♥" : "♡"
                            }
                            title={data.movie_title}
                            runtime={data.movie_runtime}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

const Button = styled.button`
    text-align: center;
    border: none;
    background-color: #6C8891;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px;
    &:hover {
        background-color: #303B41;
        color: #fff;
    };
`;
export default MovieListPage;