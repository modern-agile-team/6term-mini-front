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
    const [ getSeat, setSeat ] = useState("");

    const LoadDateHandler = (data) => {
        setDay(data);
    };

    const ChoiceMovieHandler = (data) => {
        setMovieTitle(data);
    };

    const ChoiceSeatHandler = (data) => {
        setMovieSeat(data);
    };

    const getSeatApi = async () => {
        const res = await getMovieApi(`/movies/seats`);
        setSeat(res.data.extractedValues);
    }
    
    useEffect(()=>{
        console.log(getMovieTitle);
    })

    useEffect(()=>{
        getSeatApi();
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
                />
            </div>
        </Container>
    ); 
}

export default TicketingPage;