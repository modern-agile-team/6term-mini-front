import styled from "styled-components";
import reservationApi from "../../api/reservationApi";
import { useNavigate } from "react-router";

const Ticket = (props) => {
    const navigate = useNavigate();
    //좌석 정보 행 열로 쪼개기
    const seatLocation = String(props.seat).split("");
    
    //예매 완료 버튼 클릭
    const postTicket = async () => {
        if (props.id !== undefined && props.day && seatLocation[0] !== undefined) {
            alert(`예매가 완료되었습니다.`);
            //티켓 정보 보내기
            await reservationApi(`/movies/seats`, {
                "movieId": props.id,
                "seatRow": seatLocation[0],
                "seatCol": seatLocation[1],
                "seatDate": props.day
            });
        } else {
            if (props.id === undefined) alert('영화를 선택해주세요.');
            if (!props.day) alert(`날짜를 선택해주세요.`);
            if (seatLocation[0] === undefined) alert(`좌석을 선택해주세요.`);
        }
        navigate(`/mypage`);
    }

    return (
        <div style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            border: 2,
            borderStyle: `solid`,
            width: 145,
            height: 210,
        }}>
            <div>
                {props.title === undefined ? "제목" : props.title}
            </div>
            <hr />
            <div style={{
                display:"flex"
            }}>
                <div>
                    <div>{props.day === undefined ? "날짜" : props.day}</div>
                    <div>{props.runtime === undefined ? "시간" : props.runtime}</div>
                </div>
                <img
                    style={{
                        width:60,
                        height: 80,
                        marginLeft: `auto`,
                        backgroundColor: "#999"
                    }} 
                    src={props.poster}
                />
            </div>
            <hr />
            <div>선택좌석 : {props.seat}</div>
            <hr />
            <div>결제금액 : {
                    props.title && props.day && props.seat ? "10,000원" : undefined    
                }
            </div>
            <button onClick={postTicket}>완료</button>
        </div>
    )
};

export default Ticket;