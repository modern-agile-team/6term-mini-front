import React, { useEffect, useState } from "react";
import LoadDate from "../components/ticketPage/LoadDate";
import { Container } from "../components/public/StyledComponent";
import ChoiceMovie from "../components/ticketPage/ChoiceMovie";
import ChoiceSeat from "../components/ticketPage/ChoiceSeat";
import Ticket from "../components/ticketPage/Ticket";
import LicenseBanner from "../components/public/LincenseBanner";

function TicketingPage(props) {
    const [ getDay, setDay ] = useState(null);
    const [ getMovieTitle, setMovieTitle ] = useState("");
    const [ getSeatCheck, setSeatCheck ] = useState("");

    //날짜 Handler
    const LoadDateHandler = (data) => {
        setDay(data);
    };

    //영화 선택 Handler
    const ChoiceMovieHandler = (data) => {
        setMovieTitle(data);
    };

    //좌석 정보 Handler
    const ChoiceSeatHandler = (data) => {
        setSeatCheck(data);
    };

    return (
        <Container margin={100}>
            <LoadDate onClickLoadDate={LoadDateHandler}/>
            <ChoiceMovie onClickTitle={ChoiceMovieHandler} data={getDay}/>
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
                    id = {getMovieTitle.movie_id}
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