import styled from "styled-components";

const Ticket = (props) => {
    return (
        <div style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            border: 2,
            borderStyle: `solid`,
        }}>
            <div>
                {props.title}
            </div>
            <hr />
            <div style={{
                display:"flex"
            }}>
                <div>
                    <div>{props.day}</div>
                    <div>{props.runtime}</div>
                </div>
                <img
                    style={{
                        width:60,
                        height: 80,
                        marginLeft: `auto`,
                    }} 
                    src={props.poster} 
                />
            </div>
            <hr />
            <div>선택좌석 : B5</div>
            <hr />
            <div>결제금액 : 10,000원</div>
            <button>완료</button>
        </div>
    )
};

export default Ticket;