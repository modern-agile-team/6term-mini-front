import React, { useEffect , useState } from "react";
import Container from "../components/public/Container";
import PosterBox from "../components/mainPage/PosterBox";
import getMovieApi from "../api/getMovieApi";
import styled from "styled-components";

function MainPage() {
    const [ movie, setMovie ] = useState({
        movieTitle: {},
        moviePoster: {},
        movieRuntime: {}
    });

    const textfunc = async () => {
        const data = await getMovieApi();
        console.log(data);
    }

    useEffect(()=>{
        textfunc();
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
                    <video 
                        src="../src/assets/exVideo.MP4"
                        width={800}
                        height={530}
                        controls="controls"
                        autoPlay="autoplay"
                        loop="loop"
                    ></video>
                    <NextBtn> &gt; </NextBtn>
                </div>
                <div style={{
                    textAlign:"right",
                }}>
                    + 더 많은 영화 보러 가기
                </div>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap: "wrap"
                }}>
                    <PosterBox />
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
    font-size: 100px;
    margin: 20px;
    cursor: pointer;
    background-color: #f00;
`;

export default MainPage;