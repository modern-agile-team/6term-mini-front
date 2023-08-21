import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import loginApi from "../api/loginApi";
import {
    AccessBox,
    InputText,
    Container,
    Box,
    TitleBg,
    ButtonUI,
    StyledLink,
    MarginTen
} from "../components/public/StyledComponent";

function LoginPage() {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const navigate = useNavigate();
    const userInfo = {
        loginId: userId,
        pw: userPw, 
    }

    //아이디 입력 정보 받아오기
    const getUserId = (e) => {
        setUserId(e.target.value);
    }

    //비밀번호 입력 정보 받아오기
    const getUserPw = (e) => {
        setUserPw(e.target.value);
    }

    // form 새로고침 방지
    function onSubmit(e) {
        e.preventDefault();
    }

    //로그인 버튼 클릭 시 이벤트
    const loginHandler = async () => {
        const { status, data } = await loginApi(userInfo)
        if (status === 200) {
            window.localStorage.setItem("accessToken", data.accessToken);
            window.localStorage.setItem("refreshToken", data.refreshToken);
            navigate(`/mainpage`);
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
                            <AccessBox onClick={loginHandler}>
                                <ButtonUI>로그인</ButtonUI>
                            </AccessBox>
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