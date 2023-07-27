import React, { useEffect , useState } from "react";
import Container from "../components/public/Container";
import PosterBox from "../components/mainPage/PosterBox";
import getMovieApi from "../api/getMovieApi";

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
                    alignItems:"center",
                    flexWrap:"wrap",
                }}>
                    <video 
                        src="../src/assets/exVideo.MP4"
                        width={1000}
                        height={530}
                        controls="controls"
                        autoPlay="autoplay"
                        loop="loop"
                    ></video>
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

export default MainPage;