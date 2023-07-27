import React from "react";
import styled from "styled-components";

function MovieTicket(props) {
    return (
        <TicketBox>
            영화티켓이 들어올 자리
        </TicketBox>
    );
}

const TicketBox = styled.div`
    border: 1px solid #f00;
    margin: 30px;
`;


export default MovieTicket;