import React, { useEffect, useState } from "react";
import LoadDate from "../components/ticketPage/LoadDate";
import { Container } from "../components/public/StyledComponent";
import ChoiceMovie from "../components/ticketPage/ChoiceMovie";
import ChoiceSeat from "../components/ticketPage/ChoiceSeat";
import Ticket from "../components/ticketPage/Ticket";
import { getMovieApi } from "../api/getMovieApi";

function TicketingPage(props) {
    const [ getDay, setDay ] = useState(null);
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
    // const callSeatApi = async () => {
    //     const res = await getMovieApi(`/movies/seats`);
    //     setSeatApi(res.data.seat);  
    // }

    //예매된 좌석 중, 해당 날짜, 영화에 해당하는 정보 받기
    // const checkMovieId = () => {
    //     // const checkMovie = [...getDay]
    //     const checkId = []
    //     getDay !== null && getDay.filter((data)=>{
    //         if (String(data.movieId) === String(getMovieTitle.movie_id)) {
    //                 checkId.push(data);
    //             }
    //     });
    //     setMovieSeat(checkId);
    // };
    
    useEffect(()=>{
        // console.log(getMovieTitle); //선택된 영화
        // console.log(getSeatApi);    //불러온 좌석 정보
        // console.log(getMovieSeat);  //선택된 영화 좌석 정보
        // console.log(getDay);        //선택된 날짜
    })
    
    useEffect(()=>{
        // callSeatApi();
        // checkMovieId();
    }, [getMovieTitle])

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
                    day={getDay !== null && getDay[0]}
                    id={getMovieTitle.movie_id}
                />
                <Ticket 
                    day={getDay !== null && getDay[0]} 
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