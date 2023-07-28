import React, { useEffect, useState } from "react";
import InputText from "../components/public/InputText";
import Container from "../components/public/Container";
import Box from "../components/public/Box";
import TitleBg from "../components/public/TitleBg";
import ButtonUI from "../components/public/ButtonUI";
import StyledLink from "../components/public/StyledLink";
import MarginTen from "../components/public/MarginTen";
import useDebouncedEffect from "../hooks/useDebouncedEffect";
import findIdApi from "../api/findIdApi";

function FindIdPage() {
    const [ findId, setfindId ] = useState("");
    useDebouncedEffect(findId, 500);

    const onChange = (e) => {
        setfindId(e.target.value);
    }

    useEffect(()=>{
        const a = findIdApi("id", findId);
    }, [findId]);

    return (
        <Container margin={100}>
            <Box width={536} height={300}>
            <TitleBg size={40}>아아디 찾기</TitleBg>
            <form>
                <Container>
                    <InputText name="email" onChange={onChange} type="text" placeholder="이메일" />
                </Container>
                <Container>
                        <StyledLink to="/login">
                            <ButtonUI>확인</ButtonUI>
                        </StyledLink>
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