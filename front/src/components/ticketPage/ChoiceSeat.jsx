import styled from "styled-components";
import { useEffect, useState } from "react";
import { getMovieApi } from "../../api/getMovieApi";



const ChoiceSeat = ({ onClickSeat , id, day}) => {
    //영화 자리 배열
    const theatorSeat = 
    {
        "A": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "B": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "C": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "D": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
    const [ seat, setSeat ] = useState([]);  //이미 선택된 좌석을 담는 배열

    //이미 예매된 좌석 불러오기
    const getSeatApi = async () => {
        const response = await getMovieApi(`/movies/seats`);
        const arr = []
        const seatApi = [...response.data.seat];
        seatApi.filter((data, idx)=> {
            //가져온 날짜 정보 가공하기
            const originalTime = data.seatDate;
            const dateObj = new Date(originalTime);

            const year = dateObj.getFullYear();
            const month = String(dateObj.getMonth() + 1).padStart(2, "0");
            const days = String(dateObj.getDate()).padStart(2, "0");

            const formattedDate = `${year}-${month}-${days}`;
            if(data.movieId == id && formattedDate == day) {
                arr.push(data);
            }
        });
        setSeat(arr);
    }
    //좌석 누르면 상위로 State 끌어올리기
    const seatBtn = (e) => {
        const res = e.target.name;
        onClickSeat(res);
    };
    
    useEffect(()=>{
        getSeatApi();
    },[id, day]);

    return (
        <div style={{
            marginRight: `auto`,
            marginLeft: `auto`
        }}>
            <div style={{
                backgroundColor: `#000`,
                color: `#fff`,
                textAlign: `center`,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
            }}>
                Screen
            </div>
            <Table>
                <thead></thead>
                <tbody> 
                    {Object.entries(theatorSeat).map((data, idx)=>{
                        return (
                            <tr key={idx}>
                            <td>{data[0]}</td>
                            {data[1].map((chlid, index)=>{
                                const currentSeat = `${data[0]}${chlid}`;
                                const isReserved = seat.some(s => `${s.seatRow}${s.seatCol}` === currentSeat);

                                if (isReserved) {
                                return (
                                    <td key={index}>
                                    <Reservation name={currentSeat}>{chlid}</Reservation>
                                    </td>
                                );
                                } else {
                                return (
                                    <td key={index}>
                                    <Td onClick={seatBtn} name={currentSeat}>{chlid}</Td>
                                    </td>
                                );
                                }
                            })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <div style={{display:"flex"}}>
                <div style={{
                    width: 20,
                    backgroundColor: "rgb(52, 73, 94)",
                }}></div><div>예매완료</div>
            </div>
            <div style={{display:"flex"}}>
                <div style={{
                    width: 20,
                    backgroundColor: "#f00"
                    }}></div><div>선택</div>
            </div>
        </div>
    );
};

//영화 좌석 테이블
const Table = styled.table`
    width: 400px;
    border-spacing: 10px;
    border-collapse: separate;
`;

//영화 버튼 
const Td = styled.button`
    cursor: pointer;
    width: 30px;
    text-align: center;
    background-color: rgb(149, 165, 166);
    &:hover {
        background-color: #f00;
        color: #fff;
    }
`;

const Reservation = styled.button`
    width: 30px;
    text-align: center;
    pointer-events: none;
    background-color: rgb(52, 73, 94);
`;

export default ChoiceSeat;