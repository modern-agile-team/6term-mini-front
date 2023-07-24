import React, { useEffect, useState } from "react";
import InputText from "../components/public/InputText";
import Container from "../components/public/Container";
import Box from "../components/public/Box";
import TitleBg from "../components/public/TitleBg";
import ButtonUI from "../components/public/ButtonUI";
import StyledLink from "../components/public/StyledLink";
import MarginTen from "../components/public/MarginTen";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import loginApi from "../api/loginApi";

function LoginPage() {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const navigate = useNavigate();
    const userInfo = {
        loginId: userId,
        pw: userPw, 
    }

    const getUserId = (e) => {
        setUserId(e.target.value);
    }

    const getUserPw = (e) => {
        setUserPw(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
    }

    const loginHandler = async () => {
        const { status, data } = await loginApi(userInfo)
        if (status === 200) {
            window.localStorage.setItem("accessToken", data.access_token);
            window.localStorage.setItem("refreshToken", data.refresh_token);
            console.log(data.msg);
            navigate(`/mainpage`);
        } else {
            console.log(`로그인 중 에러발생`);
        }
    }

    return (
        <Container margin={100}>
            <Box width={536} height={300}>
                <TitleBg size={40}>로그인</TitleBg>
                <form onSubmit={onSubmit}>
                    <Container>
                        <InputText name="id" type="text" placeholder="아이디" onChange={getUserId}/>
                        <InputText name="password" type="password" placeholder="비밀번호" onChange={getUserPw}/>
                    </Container>
                    <Container>
                        <ButtonUI>
                            <StyledLink onClick={loginHandler}>로그인</StyledLink>
                        </ButtonUI>
                    </Container>
                    <Container>
                        <MarginTen>
                            <StyledLink to="/findid">아이디 찾기</StyledLink> |
                            <StyledLink to="/findpw"> 비밀번호 찾기</StyledLink>|
                            <StyledLink to="/signup"> 회원가입</StyledLink>
                        </MarginTen>
                    </Container>
                </form>
            </Box>
        </Container>
    )
}

export default LoginPage;