import React from "react";
import InputText from "../components/InputText";
import Container from "../components/Container";
import Box from "../components/Box";
import TitleBg from "../components/TitleBg";
import ButtonUI from "../components/ButtonUI";
import StyledLink from "../components/StyledLink";

function LoginPage() {
    return (
        <Container margin={100}>
            <Box width={536} height={300}>
                <TitleBg>로그인</TitleBg>
                <form>
                    <Container>
                        <InputText type="text" placeholder="아이디" width={500} height={40}/>
                        <InputText type="password" placeholder="비밀번호" width={500} height={40}/>
                    </Container>
                    <Container>
                        <ButtonUI>
                            <StyledLink to="/">로그인</StyledLink>
                        </ButtonUI>
                    </Container>
                    <Container>
                            <StyledLink to="/findid">아이디 찾기</StyledLink>
                            <StyledLink to="/findpw">비밀번호 찾기</StyledLink>
                            <StyledLink to="/signup">회원가입</StyledLink>
                    </Container>
                </form>
            </Box>
        </Container>
    )
}

export default LoginPage;