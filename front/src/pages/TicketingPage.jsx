import React from "react";
import LoadDate from "../components/ticketPage/LoadDate";
import { Container } from "../components/public/StyledComponent";
import ChoiceMovie from "../components/ticketPage/ChoiceMovie";
import ChoiceSeat from "../components/ticketPage/ChoiceSeat";

function TicketingPage(props) {
    return (
        <Container margin={100}>
            <LoadDate />
            <ChoiceMovie />
            <ChoiceSeat />
        </Container>
    ); 
}

export default TicketingPage;