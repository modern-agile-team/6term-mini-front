import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getProfileApi from "../api/getProfileApi";
import logOutApi from "../api/logOutApi";
import styled from "styled-components";
import { getMovieApi } from "../api/getMovieApi";
import cancelMovieApi from "../api/cancelMovieApi";

function MyPage() {
    const navigate = useNavigate();
    const [ userInfo, setUserInfo ] = useState({
        id: "",
        email: "",
    });
    const [ ticketInfo, setTicketInfo ] = useState({
        mySeat: [],
        movie: [],
    });

    const getTicketInfo = async () => {
        const responseMySeat = await getMovieApi(`/movies/myseats`);
        const responseMovie = await getMovieApi(`/movies/lists`);
        setTicketInfo(()=>{
            return {
                mySeat: responseMySeat.data.userSeat,
                movie: responseMovie.data.movieInfo,
            }
        });
    }

    //프로필 정보 가지고 오기(페이지 로드시)
    const getUserProfile = async () => {
        const res = await getProfileApi(`profile`);
        setUserInfo(()=>{
            return {
                id: res.data.loginId,
                email: res.data.email
            };
        });
    }

    //영화 목록 페이지 이동
    const goToMovieBtn = () => {
        navigate('/movielist');
    }

    //로그아웃
    const logOutBtn = async () => {
        if(window.confirm("로그아웃 하시겠습니까?")) {
            await logOutApi("logout");
            localStorage.clear();
            // window.location.replace("http://localhost:3000/"); //리펙토링 필요(front서버 url로 기입)
            navigate("/login");
        }
    }

    //계정삭제
    const deleteAccountBtn = async () => {
        if(window.confirm("계정을 삭제 하시겠습니까?")) {
            await logOutApi("logout");
            await logOutApi("users");
            localStorage.clear();
            navigate("/login");
        }
    }

    const cancelMovie = async (e) => {
        const seatId = e.target.name;
        console.log(seatId);
        if(window.confirm("예매를 취소하시겠습니까?")) {
            const response = await cancelMovieApi(`/movies/users/seat`, seatId);
            if(response.data.success) alert('취소가 완료 되었습니다.');
        }
    }

    useEffect(()=>{
        getUserProfile();
        getTicketInfo();
    },[]);

    useEffect(()=>{
        console.log(ticketInfo);
    })

    return (
        <div>
            <div style={{
                display: "flex", 
                flexDirection: "row",
            }}>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    margin: 40
                }}>
                    <span style={{
                        margin: 10,
                        fontWeight: "bold",
                        fontSize: 30
                    }}>내 정보</span>
                    <ul style={{
                        
                    }}>
                        <li>아이디 : {userInfo.id}</li>
                        <li>이메일 : {userInfo.email}</li>
                    </ul>
                </div>
                <div style={{
                    marginLeft: "auto",
                }}>
                    <Btn bgColor={`rgb(224, 224, 224)`} onClick={goToMovieBtn}>영화 목록 보러가기</Btn>
                    <Btn bgColor={`rgb(224, 224, 224)`} onClick={logOutBtn}>로그아웃</Btn>
                    <Btn bgColor={`rgb(224, 224, 224)`} onClick={deleteAccountBtn}>회원탈퇴</Btn>
                </div>
            </div>
            <div style={{
                fontWeight: "bold",
                fontSize: 30,
                margin: 10,
            }}>나의 영화 티켓</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                margin: 30,
            }}>
                {ticketInfo.mySeat !== null && ticketInfo.mySeat.map((data, idx) => {
                    return (
                        <TicketBox>
                            <div>{ticketInfo.movie[idx].movie_id === data.movieId ? ticketInfo.movie[idx].movie_title : ticketInfo.movie[idx-1].movie_title}</div>
                            <div>
                                <div>날짜 : {data.seatDate.slice(0, 10)}</div>
                                <div>시간 : {}</div>
                            </div>
                            <div>
                                선택좌석 : <div>{data.seatRow}{data.seatCol}</div>
                            </div>
                            <div>
                                <img src="페이지 하나 만들어" alt="QR코드"/>
                            </div>
                            <button name={data.id} onClick={cancelMovie}>예매 취소</button>
                        </TicketBox>
                    )
                })}
            </div>
        </div>
    )
}

const Btn = styled.div`
    background-color: rgb(224, 224, 224);
    cursor: pointer;
    margin: 10px;
    &:hover {
        background-color: #999;
        color: #fff;
    }
`;

const TicketBox = styled.div`
    border: 1px solid #f00;
    margin: 30px;
`;

export default MyPage;