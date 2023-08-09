import React, { useState } from "react";
import findIdApi from "../api/findIdApi";
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

function FindIdPage() {
    const [ findId, setfindId ] = useState("");

    //입력 정보 가져오기
    const onChange = (e) => {
        setfindId(e.target.value);
    }

    //확인 버튼 클릭 시
    const currectBtn = () => {
        findIdApi("id", { email: findId });
    }

    //form 새로고침 방지
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