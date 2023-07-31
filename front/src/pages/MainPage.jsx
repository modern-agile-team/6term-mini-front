import React, { useEffect , useState } from "react";
import Container from "../components/public/Container";
import PosterBox from "../components/mainPage/PosterBox";
import { getMovieApi, getMovieLikeApi } from "../api/getMovieApi";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

function MainPage() {
    const navigate = useNavigate();
    const [ movie, setMovie ] = useState({
        movieTitle: {},
        moviePoster: {},
        movieRuntime: {}
    });
    const [ heart, setHeart ] = useState(0);
    const [ isWindow, setIsWindow ] = useState(false);

    const getMovieTitle = async () => {
        const data = await getMovieApi("get-movie");
    }

    const getMovieLikes = async () => {
        const data = await getMovieApi("get-movie-like");
    }

    const goToMovieList = () => {
        navigate("/movielist");
    }

    useEffect(()=>{
        setIsWindow(true);
    }, []);

    return (
        <Container margin={50}>
            <div>
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItem:"center",
                    flexWrap:"nowrap",
                }}>
                    <NextBtn> &lt; </NextBtn>
                    {isWindow && 
                        <ReactPlayer 
                            url="https://www.youtube.com/embed/BOqFRHCrN-k"
                            muted
                            loop
                            playing={true}
                        />
                    }
                    <NextBtn> &gt; </NextBtn>
                </div>
                <div style={{
                    textAlign:"right",
                    cursor:"pointer"
                }} onClick={goToMovieList}>
                    + 더 많은 영화 보러 가기
                </div>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap: "wrap"
                }}>
                    <PosterBox likeCount={heart}/>
                    <PosterBox />
                    <PosterBox />
                    <PosterBox />
                    <PosterBox />
                    <PosterBox />
                    <PosterBox />

                </div>
            </div>
        </Container>
    )
}

const NextBtn = styled.div`
    font-size: 150px;
    margin: 20px;
    padding-top: 45px;
    cursor: pointer;
    background-color: #999999;
    opacity: calc(0.5);
`;

export default MainPage;