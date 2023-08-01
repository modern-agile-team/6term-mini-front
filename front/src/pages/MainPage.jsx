import React, { useEffect , useState } from "react";
import Container from "../components/public/Container";
import PosterBox from "../components/mainPage/PosterBox";
import { getMovieApi, getMovieLikeApi } from "../api/getMovieApi";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import SlideBar from "../components/mainPage/SlideBar";
import LicenseBanner from "../components/public/LincenseBanner";

function MainPage() {
    const navigate = useNavigate();
    const [ movie, setMovie ] = useState(null);
    const [ heart, setHeart ] = useState(0);
    const [ isWindow, setIsWindow ] = useState(false);
    const showNum = 5;

    //영화 정보 받아오기
    const getMovieTitle = async () => {
        const res = await getMovieApi("/movie/get-movie");
        setMovie(res.data);
    }

    //영화 좋아요 수 받아오기
    const getMovieLikes = async () => {
        const data = await getMovieApi("/movielike/get-movie-like");
    }

    //목록 페이지로 이동
    const goToMovieList = () => {
        navigate("/movielist");
    }

    useEffect(()=>{
        setIsWindow(true);
        getMovieTitle();
        getMovieLikes();
    }, []);

    return (
        <Container>
            <div>
                {isWindow && 
                    <SlideBar />
                }
                <div style={{
                    textAlign: "end",
                    marginRight: 50,
                }}>
                    <Button onClick={goToMovieList}>
                        + 더 많은 영화 보러 가기
                    </Button>
                </div>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap: "nowrap",
                }}>
                    {movie !== null && movie.map((data, idx)=>{  //조건부 랜더링사용(null값일땐 랜더링x)
                    if(idx < showNum) {
                        return (
                            <PosterBox 
                                title={data.movie_title} 
                                poster={data.movie_poster}
                                runtime={data.movie_runtime}
                            />
                            );
                    }
                    })}
                </div>
            </div>
            <LicenseBanner />
        </Container>
    )
}

const Button = styled.button`
    text-align: center;
    border: none;
    background-color: #6C8891;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #303B41;
        color: #fff;
    };
`;

export default MainPage;