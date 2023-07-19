import axios from "axios";
import React, { useEffect } from "react";
import getMovieApi from "../api/getMovie";
import Container from "../components/Container";

function MainPage() {

    useEffect(()=>{
        getMovieApi()
    }, [])

    return (
        <Container margin={50}>
            메인 페이지
        </Container>
    )
}

export default MainPage;