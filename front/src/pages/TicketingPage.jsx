import React from "react";
import LoadDate from "../components/ticketPage/LoadDate";
import { Container } from "../components/public/StyledComponent";
import ChoiceMovie from "../components/ticketPage/ChoiceMovie";

function TicketingPage(props) {
    return (
        <Container margin={100}>
            <LoadDate />
            <ChoiceMovie />
        </Container>
    ); 
}

export default TicketingPage;