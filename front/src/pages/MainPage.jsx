import React, { useEffect , useState } from "react";
import PosterBox from "../components/mainPage/PosterBox";
import { getMovieApi } from "../api/getMovieApi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SlideBar from "../components/mainPage/SlideBar";
import LicenseBanner from "../components/public/LincenseBanner";
import { Container } from "../components/public/StyledComponent";

function MainPage() {
    const navigate = useNavigate();
    const [ movie, setMovie ] = useState(null);
    const [ isWindow, setIsWindow ] = useState(false);
    const [ like, setLike ] = useState(null);
    const showNum = 5;

    //영화 정보 받아오기
    const getMovieTitle = async () => {
        const res = await getMovieApi("/movies/lists");
        setMovie(res.data.movieInfo);
    }

    //목록 페이지로 이동
    const goToMovieList = () => {
        navigate("/movielist");
    }

    useEffect(()=>{
        setIsWindow(true);
    }, []);
    
    useEffect(()=>{
        getMovieTitle();
    }, [movie])

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
                                id={data.id}
                                like={data.like}
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