import styled from "styled-components";
import { useEffect, useState } from "react";
import { getMovieApi } from "../../api/getMovieApi";



const ChoiceSeat = ({ onClickSeat , id, day}) => {
    const [ seat, setSeat ] = useState("");
    const theatorSeat = 
    {
        "1": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "2": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "3": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "4": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
    
    const getSeatApi = async () => {
        const response = await getMovieApi(`/movies/seats`);
        const arr = []
        const seatApi = [...response.data.seat];
        seatApi.filter((data, idx)=> {
            if(data.movieId == id && data.seatDate == day) {
                arr.push(data);
            }
        });
        setSeat(arr);
    }
    

    const seatBtn = (e) => {
        const res = e.target.name;
        onClickSeat(res);
    };


    useEffect(()=>{
        // console.log(id);
        // console.log(day);
        console.log(seat);
    })
    
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
                                    if (`${seat.seatRow}${seat.seatCol}` !== `${data[0]}${data[1][index]}`) {
                                        return (
                                            <td><Td onClick={seatBtn} name={`${data[0]}${chlid}`}>{chlid}</Td></td>
                                        )
                                    } else {
                                        return (
                                            <td><Reservation name={`${data[0]}${chlid}`}>{chlid}</Reservation></td>
                                        )
                                    }
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <div style={{display:"flex"}}>
                <Reservation></Reservation><div>예매완료</div>
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

const Table = styled.table`
    width: 400px;
    border-spacing: 10px;
    border-collapse: separate;
`;

const Td = styled.button`
    cursor: pointer;
    width: 30px;
    text-align: center;
    background-color: rgb(149, 165, 166);
    &:hover {
        background-color: #f00;
        color: #fff;
    }
    `

const Reservation = styled.button`
    width: 20px;
    text-align: center;
    pointer-events: none;
    background-color: rgb(52, 73, 94);
`

export default ChoiceSeat;