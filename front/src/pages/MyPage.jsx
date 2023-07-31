import React, { useEffect, useState } from "react";
import MovieTicket from "../components/myPage/MovieTicket";
import AccessBox from "../components/public/AccessBtn";
import { useNavigate } from "react-router-dom";
import getProfileApi from "../api/getProfileApi";
import logOutApi from "../api/logOutApi";

function MyPage() {
    const navigate = useNavigate();
    const [ userInfo, setUserInfo ] = useState({
        id: "",
        email: "",
    });

    const getUserProfile = async () => {
        const res = await getProfileApi(`profile`);
        setUserInfo(()=>{
            return {
                id: res.data.loginId,
                email: res.data.email
            };
        });
    }

    const goToMovieBtn = () => {
        navigate('/movielist');
    }

    const logOutBtn = async () => {
        await logOutApi("logout");
        localStorage.clear();
        window.location.replace("http://localhost:3000/"); //리펙토링 필요(front서버 url로 기입)
        navigate("/login");
    }


    useEffect(()=>{
        getUserProfile();
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
                    <AccessBox onClick={goToMovieBtn}>영화 목록 보러가기</AccessBox>
                    <AccessBox onClick={logOutBtn}>로그아웃</AccessBox>
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
                <MovieTicket />
                <MovieTicket />
            </div>
        </div>
    )
}

export default MyPage;