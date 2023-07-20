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
    const [user, setUser] = useState([]);
    const path = "/mainpage"

    // const fetchData = async () => {
    //     const res = await axios.post("http://localhost:3001/user");
    //     setUser(res.data);
    // }

    // useEffect(()=>{
    //     fetchData();
    // }, []);
    

    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <Container margin={100}>
            <Box width={536} height={300}>
                <TitleBg size={40}>로그인</TitleBg>
                <form onSubmit={onSubmit}>
                    <Container>
                        <InputText name="id" type="text" placeholder="아이디" />
                        <InputText name="password" type="password" placeholder="비밀번호" />
                    </Container>
                    <Container>
                        <ButtonUI>
                            <StyledLink to={path}>로그인</StyledLink>
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