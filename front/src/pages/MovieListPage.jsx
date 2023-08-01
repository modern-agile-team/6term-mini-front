import React, { useEffect, useState } from "react";
import ListPosterBox from "../components/listPage/ListPosterBox";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getMovieApi } from "../api/getMovieApi";
import LicenseBanner from "../components/public/LincenseBanner";

function MovieListPage() {
    const navigate = useNavigate();
    const [ movie, setMovie ] = useState(null);
    
    //영화 정보 받아오기
    const getMovieTitle = async () => {
        const res = await getMovieApi("/movie/get-movie");
        setMovie(res.data);
    }

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
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                margin: 50
            }}>
                {movie !== null && movie.map((data, idx)=>{  //조건부 랜더링사용(null값일땐 랜더링x)
                    return (
                        <ListPosterBox 
                            poster={data.movie_poster}
                            title={data.movie_title}
                            runtime={data.movie_runtime}
                            />
                        );
                    })}
            </div>
            <LicenseBanner />
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
`;

const ShowBorder = styled.div`
    margin: ${({ margin }) => margin };

    border: 3px solid #000;
    background-color: #999;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
export default MovieListPage;