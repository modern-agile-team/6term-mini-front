import React, { useState } from "react";
import InputText from "../components/public/InputText";
import Container from "../components/public/Container";
import Box from "../components/public/Box";
import TitleBg from "../components/public/TitleBg";
import ButtonUI from "../components/public/ButtonUI";
import StyledLink from "../components/public/StyledLink";
import MarginTen from "../components/public/MarginTen";
import findIdApi from "../api/findIdApi";
import AccessBox from "../components/public/AccessBtn";

function FindIdPage() {
    const [ findId, setfindId ] = useState("");

    const onChange = (e) => {
        setfindId(e.target.value);
    }

    const currectBtn = () => {
        findIdApi("id", { email: findId });
    }

    const onSubminHandler = (e) => {
        e.preventDefault();
    }

    return (
        <Container margin={100}>
            <Box width={536} height={300}>
            <TitleBg size={40}>아아디 찾기</TitleBg>
            <form onSubmit={onSubminHandler}>
                <Container>
                    <InputText name="email" onChange={onChange} type="text" placeholder="이메일" />
                </Container>
                <Container>
                        <AccessBox onClick={currectBtn}>
                            <ButtonUI>확인</ButtonUI>
                        </AccessBox>
                </Container>
                <Container>
                    <MarginTen>
                        <StyledLink to="/login">로그인</StyledLink> | 
                        <StyledLink to="/findpw">비밀번호 찾기</StyledLink> | 
                        <StyledLink to="/signup"> 회원가입</StyledLink>
                    </MarginTen>
                </Container>
            </form>
        </Box>
    </Container>
    );
}

export default FindIdPage;