import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getProfileApi from "../api/getProfileApi";
import logOutApi from "../api/logOutApi";
import styled from "styled-components";
import {getMovieApi} from "../api/getMovieApi";
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
        const res = await getProfileApi(`/auth/users/profile`);
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
        if(window.confirm("예매를 취소하시겠습니까?")) {
            const res = await cancelMovieApi(`/movies/users/seat`, seatId);
            alert(res.data.msg)
        }
    };

    const showTime = (index) => {
        if (index === 0) return "07:00 ~ 09:00";
        if (index === 1) return "09:00 ~ 11:00";
        if (index === 2) return "11:00 ~ 13:00";
        if (index === 3) return "13:00 ~ 15:00";
        if (index === 4) return "15:00 ~ 17:00";
        if (index === 5) return "17:00 ~ 19:00";
        if (index === 6) return "19:00 ~ 21:00";
        if (index === 7) return "21:00 ~ 23:00";
    };

    useEffect(()=>{
        getUserProfile();
        getTicketInfo();
    },[]);

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
                flexWrap: "wrap",
                height: "auto",
                minHeight: "100%",
                paddingBottom: 85,
            }}>
                {ticketInfo.mySeat != null && ticketInfo.mySeat.map((data) => {
                    const modifiedDate = () => {
                        const days = new Date(data.seatDate);
                        days.setUTCDate(days.getUTCDate() + 1);

                        const modifiedDate = days.toISOString();
                        return modifiedDate;
                    }
                    const pickDate = modifiedDate();

                    return (
                        <TicketBox key={data.id}>
                            <TicketTitle>
                                {ticketInfo.movie.map((movie) => {
                                    if(data.movieId === movie.movie_id) {
                                        return (movie.movie_title);
                                    }
                                })}
                            </TicketTitle>
                            <DateBox>
                                <div>
                                    <div>{pickDate.slice(0,10)}</div>
                                    <div>{ticketInfo.movie.map((movie, idx) => {
                                        if(data.movieId === movie.movie_id) {
                                            return showTime(idx);
                                        }
                                    })}</div>
                                    <div>런타임 : {ticketInfo.movie.map((movie) => {
                                        if(data.movieId === movie.movie_id) {
                                            return (movie.movie_runtime);
                                        }
                                        })}
                                    </div>
                                </div>
                                {ticketInfo.movie.map((movie) => {
                                    if(data.movieId === movie.movie_id) {
                                        return (
                                            <PosterImg src={movie.movie_poster} alt="poster" />
                                        );
                                    }
                                })}
                            </DateBox>
                            <hr />
                            <SeatBox>
                                <div style={{
                                    paddingRight: 15,
                                }}>선택좌석 :</div>
                                <div style={{
                                    backgroundColor: "rgb(48, 59, 65)",
                                    color: "#fff",
                                    padding: 3,
                                    borderRadius: 5,
                                }}>{data.seatRow}{data.seatCol}</div>
                            </SeatBox>
                            <hr />
                            <div style={{
                                width: 220,
                                height: 100,
                                textAlign: "center",
                                backgroundColor: "#999",
                                marginRight: "auto",
                            }}>
                                <img src="" alt="QR코드"/> {/*s3에서 값 QR사진 받아오기*/}
                            </div>
                            <button style={{
                                width: 220,
                            }}name={data.id} onClick={cancelMovie}>예매 취소</button>
                        </TicketBox>
                    );
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
    border: 2px solid #f00;
    margin: 30px;
    padding: 20px;
    width: 220px;
    height: 340px;
`;

const TicketTitle = styled.div`
    margin: 15px;
    background-color: rgb(48, 59, 65);
    color: #fff;
    text-align: center;
`;

const DateBox = styled.div`
    margin: 15px;
    font-size: 13px;
    display: flex;
`;

const SeatBox = styled.div`
    display: flex;
    margin: 15px;
`;

const PosterImg = styled.img`
    width: 70px;
    height: 90px;
    background-color: #999;
    margin-left: auto;
`;

export default MyPage;