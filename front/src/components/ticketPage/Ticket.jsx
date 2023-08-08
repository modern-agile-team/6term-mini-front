import styled from "styled-components";

const Ticket = (props) => {
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
            <button>완료</button>
        </div>
    )
};

export default Ticket;