import styled from "styled-components";
import reservationApi from "../../api/reservationApi";
import { useNavigate } from "react-router";
import {getShowTime} from "../../utils/getShowTime";

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
                "seatDate": props.day,
            });
            //마이페이지로 이동
            navigate(`/mypage`);
        } else {
            if (props.id === undefined) alert('영화를 선택해주세요.');
            if (!props.day) alert(`날짜를 선택해주세요.`);
            if (seatLocation[0] === undefined) alert(`좌석을 선택해주세요.`);
        }
    }

    return (
        <div style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            border: 2,
            borderStyle: `solid`,
            width: 160,
            height: 210,
        }}>
            <Title>
                {props.title === undefined ? "제목" : props.title}
            </Title>
            <hr />
            <div style={{
                display:"flex"
            }}>
                <div>
                    <div>{props.day === undefined ? "날짜" : props.day}</div>
                    <div>{props.runtime === undefined ? "시간" : getShowTime(props.id-1)}</div>
                    <div>{props.runtime === undefined ? "런타임" : props.runtime}</div>
                </div>
                <img
                    style={{
                        width:60,
                        height: 80,
                        marginLeft: `auto`,
                        backgroundColor: "rgb(48, 59, 65)",
                    }} 
                    src={props.poster}
                    alt="영화포스터"
                />
            </div>
            <hr />
            <div style={{
                width: 150,
                height: 25,
                display:"flex",
                padding: 5,
            }}>
                선택좌석 : &nbsp;<TicketBox>{props.seat}</TicketBox>
            </div>
            <hr />
            <div style={{
                margin: 5,
            }}>
                결제금액 : {
                    props.title && props.day && props.seat ? "10,000원" : undefined    
                }
            </div>
            <PayBtn onClick={postTicket}>완료</PayBtn>
        </div>
    )
};

const Title = styled.div`
    background-color:rgb(48, 59, 65);
    color: #fff;
    text-align: center;
`

const TicketBox = styled.div`
    background-color: rgb(48, 59, 65);
    color: #fff;
    border-radius: 5px;
`
const PayBtn = styled.button`
    background-color: rgb(48, 59, 65);
    color: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 100%;
    height: 36px;
    cursor: pointer;
`

export default Ticket;