import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovieApi } from "../../api/getMovieApi";

const LoadDate = ({ onClickLoadDate }) => {
  const [api, setApi] = useState("");
  const [getDate, setDate] = useState({
    pick: [],
    ticket: [],
  });

  // 영화 예매된 자리 받아오기
  const getMovieSeatApi = async () => {
    const res = await getMovieApi(`/movies/seats`);
    setApi(res.data.seat);
  };

  // 받아온 자리 비교해서 날짜와 같이 상태 끌어올리기
  const toDayBtn = (e) => {
    const seat = [...api];
    const res = e.target.name;
    const arr = [res];
    seat.filter((data) => {
      if (Number(data.seatDate) === Number(res)) {
        arr.push(data);
      }
      onClickLoadDate(arr);
    });
  };

  // 오늘부터 +8일 날짜를 불러온다.
  const loopDate = () => {
    const temp = [];
    const date = new Date();

    for (let i = 0; i < 8; i++) {
      const currentDate = new Date(date);
      currentDate.setDate(currentDate.getDate() + i);
      
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      
      temp.push({
        pick: `${month}/${day}`,
        ticket: `${year}-${month}-${day}`,
      });
    }
    
    const pickArr = temp.map(item => item.pick);
    const ticketArr = temp.map(item => item.ticket);

    setDate({
      pick: pickArr,
      ticket: ticketArr,
    });
  };

  useEffect(() => {
    getMovieSeatApi();
    loopDate();
  }, []);

  return (
    <div
      style={{
        marginBottom: 15,
        backgroundColor: `rgb(238, 237, 237)`,
      }}
    >
      <DayTitle>날짜</DayTitle>
      <DateBox>
        {getDate.ticket.map((data, idx) => (
          <DayBox key={data} name={data} onClick={toDayBtn}>
            {getDate.pick[idx]}
          </DayBox>
        ))}
      </DateBox>
    </div>
  );
};

const DayTitle = styled.div`
  padding: 10px;
  background-color: #6c8891;
  font-size: 25px;
  font-weight: bold;
  padding: 0px;
  padding-left: 10px;
`;

const DateBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border: 1px solid #000;
  width: 650px;
`;

const DayBox = styled.button`
  margin-right: auto;
  margin-left: auto;
  background-color: rgb(107, 129, 145);
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #303b41;
    color: #fff;
  }
`;

export default LoadDate;
