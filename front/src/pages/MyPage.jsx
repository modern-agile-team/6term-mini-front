import React, { useEffect } from "react";
import Container from "../components/public/Container";
import MovieTicket from "../components/myPage/MovieTicket";
import AccessBox from "../components/public/AccessBtn";
import checkToken from "../api/checkToken";
import axios from "axios";

function MyPage() {

    const getCheckToken = async () => {
        const data = await checkToken();
        console.log(data);
        window.localStorage.setItem("accessToken", data.accessToken);
    }

    useEffect(()=>{
        getCheckToken();
    }, [])

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
                        <li>아이디 : </li>
                        <li>이메일 : </li>
                    </ul>
                </div>
                <div style={{
                    marginLeft: "auto",
                }}>
                    <AccessBox>영화 목록 보러가기</AccessBox>
                    <AccessBox>로그아웃</AccessBox>
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