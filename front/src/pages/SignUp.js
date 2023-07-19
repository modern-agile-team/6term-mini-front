import React from "react";
import InputText from "../components/InputText";
import Container from "../components/Container";
import Box from "../components/Box";
import TitleBg from "../components/TitleBg";
import ButtonUI from "../components/ButtonUI";
import StyledLink from "../components/StyledLink";

function SignUp() {
    return (
        <Container margin={100}>
            <Box width={536} height={300}>
            <TitleBg>회원가입</TitleBg>
            <form>
                <Container>
                    <InputText type="text" placeholder="이메일" width={500} height={40}/>
                    <InputText type="text" placeholder="아이디" width={500} height={40}/>
                    <InputText type="text" placeholder="비밀번호" width={500} height={40}/>
                    <InputText type="text" placeholder="비밀번호" width={500} height={40}/>
                </Container>
                <Container>
                    <label>회원 정보 입력 및 약관 동의</label>
                    <ul>
                        <li><input type="checkbox" /><label>[ 필수 ] 이용약관 동의</label></li>
                        <li><input type="checkbox" /><label>[ 필수 ] 이용약관 동의</label></li>
                        <li><input type="checkbox" /><label>[ 필수 ] 이용약관 동의</label></li>
                        <li><input type="checkbox" /><label>[ 필수 ] 이용약관 동의</label></li>
                    </ul>
                </Container>
                <Container>
                    <ButtonUI>
                        <StyledLink to="/login">회원가입</StyledLink>
                    </ButtonUI>
                </Container>
                <Container>
                        <StyledLink to="/findid">아이디 찾기</StyledLink>
                        <StyledLink to="/findpw">비밀번호 찾기</StyledLink>
                </Container>
            </form>
        </Box>
    </Container>
    );
}

export default SignUp;