import React, { useEffect, useState } from "react";
import LoadDate from "../components/ticketPage/LoadDate";
import { Container } from "../components/public/StyledComponent";
import ChoiceMovie from "../components/ticketPage/ChoiceMovie";
import ChoiceSeat from "../components/ticketPage/ChoiceSeat";
import Ticket from "../components/ticketPage/Ticket";
import { useLocation } from "react-router-dom"

function TicketingPage() {
    const [ getDay, setDay ] = useState(null);
    const [ getMovieTitle, setMovieTitle ] = useState("");
    const [ getSeatCheck, setSeatCheck ] = useState("");
    const { state } = useLocation();

    console.log(getMovieTitle);
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

    //페이지 들어왔을 때, 페이지 상단으로 이동
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [state]);

    return (
        <Container margin={100}>
            <LoadDate onClickLoadDate={LoadDateHandler}/>
            <ChoiceMovie 
                onClickTitle={ChoiceMovieHandler}
                choiceMovie={state}
            />
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
                    id = {
                        state.choiceMovieId !== null ?
                        state.choiceMovieId :
                        getMovieTitle.movie_id
                    }
                    day={getDay !== null && getDay[0]} 
                    title={
                        state.choiceMovieTitle !== null ? 
                        state.choiceMovieTitle :
                        getMovieTitle.movie_title
                    }
                    poster={
                        state.choiceMoviePoster !== null ?
                        state.choiceMoviePoster :
                        getMovieTitle.movie_poster
                    }
                    runtime={
                        state.choiceMovieRuntime !== null ?
                        state.choiceMovieRuntime :
                        getMovieTitle.movie_runtime
                    }
                    seat={getSeatCheck}
                />
            </div>
        </Container>
    ); 
}

export default TicketingPage;