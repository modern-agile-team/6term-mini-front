import React, { useEffect, useState } from "react";
import InputText from "../components/public/InputText";
import Container from "../components/public/Container";
import Box from "../components/public/Box";
import TitleBg from "../components/public/TitleBg";
import ButtonUI from "../components/public/ButtonUI";
import StyledLink from "../components/public/StyledLink";
import MarginTen from "../components/public/MarginTen";
import axios from "axios";

function LoginPage() {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [path, setPath] = useState("/login");

    const getUserId = (e) => {
        setUserId(e.target.value);
    }

    const getUserPw = (e) => {
        setUserPw(e.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post('http://3.39.22.182:3000/auth/login', {
                login_id: userId,
                pw: userPw 
              })
              console.log(res.data);
              return res.data
        }
        catch(err) {
            if(err.response.status === 401) {
                console.log("401error");
            }
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
                            <StyledLink to={path} >로그인</StyledLink>
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