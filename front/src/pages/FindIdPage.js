import React from "react";
import InputText from "../components/InputText";
import Container from "../components/Container";
import Box from "../components/Box";
import TitleBg from "../components/TitleBg";
import ButtonUI from "../components/ButtonUI";
import { Link } from "react-router-dom";
import StyledLink from "../components/StyledLink";

function FindIdPage() {
    return (
        <Container margin={100}>
            <Box width={536} height={300}>
            <TitleBg>아아디 찾기</TitleBg>
            <form>
                <Container>
                    <InputText type="text" placeholder="이메일" width={500} height={40}/>
                </Container>
                <Container>
                    <ButtonUI>
                        <StyledLink to="/login">로그인 페이지로 이동</StyledLink>
                    </ButtonUI>
                </Container>
                <Container>
                        <StyledLink to="/findpw">비밀번호 찾기</StyledLink>
                        <StyledLink to="/signup">회원가입</StyledLink>
                </Container>
            </form>
        </Box>
    </Container>
    );
}

export default FindIdPage;