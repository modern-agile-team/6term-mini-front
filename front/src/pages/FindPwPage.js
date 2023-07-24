import React from "react";
import InputText from "../components/public/InputText";
import Container from "../components/public/Container";
import Box from "../components/public/Box";
import TitleBg from "../components/public/TitleBg";
import ButtonUI from "../components/public/ButtonUI";
import StyledLink from "../components/public/StyledLink";
import MarginTen from "../components/public/MarginTen";

function FindPwPage() {
    return (
        <Container margin={100}>
            <Box width={536} height={300}>
            <TitleBg size={40}>비밀번호 찾기</TitleBg>
            <form>
                <Container>
                    <InputText type="text" placeholder="아이디" />
                    <InputText type="text" placeholder="이메일" />
                </Container>
                <Container>
                    <ButtonUI>
                        <StyledLink to="/login">로그인 페이지로 이동</StyledLink>
                    </ButtonUI>
                </Container>
                <Container>
                    <MarginTen>
                        <StyledLink to="/login">로그인</StyledLink> | 
                        <StyledLink to="/findid">아이디 찾기</StyledLink> | 
                        <StyledLink to="/signup"> 회원가입</StyledLink>
                    </MarginTen>
                </Container>
            </form>
        </Box>
    </Container>
    );
}

export default FindPwPage;