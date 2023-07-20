import React, { useEffect, useState } from "react";
import InputText from "../components/public/InputText";
import Container from "../components/public/Container";
import Box from "../components/public/Box";
import TitleBg from "../components/public/TitleBg";
import ButtonUI from "../components/public/ButtonUI";
import StyledLink from "../components/public/StyledLink";
import MarginTen from "../components/public/MarginTen";

function SignUp() {
    const [firstValue, setFirstValue] = useState("");
    const [correctValue, setCorrectValue] = useState("");
    const [isCheck, setIsCheck] = useState(false);
    const [path, setPath] = useState('/login');
    const [correct, setCorrect] = useState(false);

    const getFirstPw = e => {
        setFirstValue(e.target.value);
    }

    const getCorrectPw = e => {
        setCorrectValue(e.target.value);
    }

    const getCheckBtn = e => {
        setIsCheck(e.target.checked);
    }

    const correctBtn = (e) => {
        if(firstValue === "" || correctValue === "") {
            alert('비밀번호를 입력해주세요.');
            setCorrect(false);
        } else {
            setCorrect(true);
        }
        if(firstValue !== correctValue) {
            alert('비밀번호가 일치하지 않습니다.');
            setCorrect(false);
        } else {
            setCorrect(true);
        }
        if (isCheck) {
            setCorrect(true);
        } else {
            alert('약관동의가 필요합니다.');
            setCorrect(false);
        }
        if(correct) alert('회원가입이 완료되었습니다.')
    }
    
    useEffect(()=>{
        correct ? setPath('/login') : setPath('/signup')
    })

    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <Container margin={100}>
            <Box width={536} height={300}>
            <TitleBg size={40}>회원가입</TitleBg>
            <form onSubmit={onSubmit}>
                <Container>
                    <InputText name="email" type="text" placeholder="이메일" />
                    <InputText name="id" type="text" placeholder="아이디" />
                    <InputText name="firstPassword" type="password" placeholder="비밀번호" onChange={getFirstPw}/>
                    <InputText name="correctPw"type="password" placeholder="비밀번호 확인" onChange={getCorrectPw}/>
                    <p style={{
                        color:"red",
                    // }}>{correct}</p>
                    }}>{firstValue !== correctValue? '일치하지 않습니다.':'일치합니다.' }</p>
                </Container>
                <Container>
                    <label>회원 정보 입력 및 약관 동의</label>
                    <ul>
                        <li><input type="checkbox" onChange={getCheckBtn}/><label>[ 필수 ] 이용약관 동의</label></li>
                        <li><input type="checkbox" onChange={getCheckBtn}/><label>[ 필수 ] 이용약관 동의</label></li>
                        <li><input type="checkbox" onChange={getCheckBtn}/><label>[ 필수 ] 이용약관 동의</label></li>
                    </ul>
                </Container>
                <Container>
                    <ButtonUI>
                        <StyledLink to={path} onClick={correctBtn}>회원가입</StyledLink>
                    </ButtonUI>
                </Container>
                <Container>
                    <MarginTen>
                        <StyledLink to="/findid">아이디 찾기</StyledLink> | 
                        <StyledLink to="/findpw"> 비밀번호 찾기</StyledLink>
                    </MarginTen>
                </Container>
            </form>
        </Box>
    </Container>
    );
}

export default SignUp;