import React, { useEffect, useState } from "react";
import LoadDate from "../components/ticketPage/LoadDate";
import { Container } from "../components/public/StyledComponent";
import ChoiceMovie from "../components/ticketPage/ChoiceMovie";
import ChoiceSeat from "../components/ticketPage/ChoiceSeat";
import Ticket from "../components/ticketPage/Ticket";
import { getMovieApi } from "../api/getMovieApi";

function TicketingPage(props) {
    const [ getDay, setDay ] = useState("");
    const [ getMovieTitle, setMovieTitle ] = useState("");
    const [ getMovieSeat, setMovieSeat ] = useState("");
    const [ getSeatApi, setSeatApi ] = useState("");
    const [ getSeatCheck, setSeatCheck ] = useState("");

    //날짜 Handler
    const LoadDateHandler = (data) => {
        setDay(data);
    };

    //영화 선택 Handler
    const ChoiceMovieHandler = (data) => {
        setMovieTitle(data);
    };

    const ChoiceSeatHandler = (data) => {
        setSeatCheck(data);
    };

    //현재 예매된 좌석 API 받아오기
    const callSeatApi = async () => {
        const res = await getMovieApi(`/movies/seats`);
        setSeatApi(res.data.extractedValues);
    }

    //예매된 좌석 중, 해당 날짜, 영화에 해당하는 정보 받기
    const checkMovieId = () => {
        const getSeat = [...getSeatApi];
        const checkId = []
        getSeat.filter((data)=>{
            if (data.movieId === getMovieTitle.id) {
                checkId.push(data);
            }
        });
        setMovieSeat(checkId);
    };
    
    useEffect(()=>{
        // console.log(getMovieTitle); //선택된 영화
        // console.log(getSeatApi);    //불러온 좌석 정보
        // console.log(getMovieSeat);  //선택된 영화 좌석 정보
        // console.log(getDay);        //선택된 날짜
    })
    
    useEffect(()=>{
        callSeatApi();
        checkMovieId();
    }, [])

    return (
        <Container margin={100}>
            <LoadDate onClickLoadDate={LoadDateHandler}/>
            <ChoiceMovie onClickTitle={ChoiceMovieHandler}/>
            <div style={{
                display:"flex",
                width: 650,
                padding: 20,
                backgroundColor: `rgb(238, 237, 237)`,
                marginTop: 20,
            }}>
                <ChoiceSeat 
                    onClickSeat={ChoiceSeatHandler}
                    day={getDay}
                    id={getMovieTitle.id}
                />
                <Ticket 
                    day={getDay} 
                    title={getMovieTitle.movie_title}
                    poster={getMovieTitle.movie_poster}
                    runtime={getMovieTitle.movie_runtime}
                    seat={getSeatCheck}
                />
            </div>
        </Container>
    ); 
}

export default TicketingPage;