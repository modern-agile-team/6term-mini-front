import React from "react";
import Container from "../components/public/Container";
import PosterBox from "../components/mainPage/PosterBox";

function MainPage() {

    return (
        <Container margin={50}>
            <div>
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    margin: 100,
                    padding: 100,
                }}>
                    동영상자리
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