import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import Container from "../components/public/Container";
import TitleBg from "../components/public/TitleBg";
import AccessBox from "../components/public/AccessBtn";




function Header() {
    const navigate = useNavigate();
    
    //logo눌렀을 때, 토큰이 있으면 main페이지로 이동 없으면 x
    const logoBtn = () => {
        if (localStorage.getItem(`accessToken`) === null) {
            navigate("/");
        } else {
            navigate("/mainpage");
        }
    }

    //마이페이지 눌렀을 때, 토튼 있으면 접근
    const myPageBtn = () => {
        if (localStorage.getItem(`accessToken`) === null) {
            alert('로그인이 필요합니다.');
            navigate("/");
        } else {
            navigate("/mypage");
        }
    }

    const logoutBtn = () => {
        const token = localStorage.getItem('accessToken');

        localStorage.clear();
        window.location.replace("http://localhost:3000"); //리펙토링 필요(front서버 url로 기입)
    }
    return (
        <Container>
            <TitleBg>
                    <AccessBox onClick={logoBtn}>
                        <BigFont>혼</BigFont>자보는<BigFont>영</BigFont>화<BigFont>관</BigFont>
                    </AccessBox>
                    <HeaderBox>
                        <AccessBox onClick={logoutBtn}>로그아웃</AccessBox>
                        <AccessBox onClick={myPageBtn}>회원정보</AccessBox>
                    </HeaderBox>
            </TitleBg>
        </Container>
    )
}


const BigFont = styled.span`
    font-size: 60px;
    font-weight: bold;
    color: #000;
`;
    
const Font = styled.h1`
    color: #000;
`;
    
const HeaderBox = styled.div`
    margin: auto 0 0 auto;
`;
export default Header;