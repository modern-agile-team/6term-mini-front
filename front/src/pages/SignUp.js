import React, { useEffect, useState } from "react";
import InputText from "../components/public/InputText";
import Container from "../components/public/Container";
import Box from "../components/public/Box";
import TitleBg from "../components/public/TitleBg";
import ButtonUI from "../components/public/ButtonUI";
import StyledLink from "../components/public/StyledLink";
import MarginTen from "../components/public/MarginTen";

function SignUp2() {
    //초기값 할당
    const [ userId, setUserId ] = useState("");
    const [ userEmail, setUserEmail ] = useState("");
    const [ password , setPassword ] = useState("");
    const [ checkedPw, setCheckedPw ] = useState("");
    const [ path, setPath ] = useState('/login')
    //메시지
    const [ pwCheckMsg, setPwCheckMsg ] = useState("");
    //유효성 검사
    const [ isId, setIsId ] = useState(false);
    const [ isEmail, setIsEmail ] = useState(false);
    const [ isPassword, setIsPassword ] = useState(false);
    const [ isCheckPw, setIsCheckPw ] = useState(false);

    const getUserId = (event) => {
        setUserId(event.target.value); //아이디
    };

    const getUserEmail = (event) => {
        setUserEmail(event.target.value); //이메일
    };

    const getPassword = (event) => {
        setPassword(event.target.value); // 비밀번호
    };
    
    const getCheckedPw = (event) => {
        setCheckedPw(event.target.value); //비밀번호 확인
    };
    
    //user정보 유효성 검사
    function UserImfor() {
        userId !== "" ? setIsId(true) : setIsId(false);
        userEmail !== "" ? setIsEmail(true) : setIsEmail(false);
        if ( password === checkedPw && password !== "") {
            setIsPassword(true);
            setIsCheckPw(true);
        } else {
            setIsPassword(false);
            setIsCheckPw(false);
        }

        isId && isPassword && isCheckPw && isPassword ? setPath('/login') : setPath('/signup');
    }

    function signUpBtn() {
        if(isId && isPassword && isCheckPw && isPassword) {
            alert('회원가입 완료');
        } else {
            if (!isId) alert('아이디를 확인해 주세요.');
            if (!isEmail) alert('이메일을 확인해 주세요.');
            if (!isPassword) alert('비밀번호를 확인해 주세요.');
        }
    }

    useEffect(()=>{
        UserImfor();
        isPassword && isCheckPw ? setPwCheckMsg("일치합니다.") : setPwCheckMsg("일치하지 않습니다.");
    })

    function onSubmitHandler(e) {
        e.preventDefault();
        
    }

    return (
        <Container margin={100}>
            <Box width={536} height={300}>
            <TitleBg size={40}>회원가입</TitleBg>
            <form onSubmit={onSubmitHandler}>
                <Container>
                    <InputText name="email" type="text" placeholder="이메일" onChange={getUserEmail}/>
                    <InputText name="id" type="text" placeholder="아이디" onChange={getUserId}/>
                    <InputText name="firstPassword" type="password" placeholder="비밀번호" onChange={getPassword}/>
                    <InputText name="correctPw"type="password" placeholder="비밀번호 확인" onChange={getCheckedPw}/>
                    <label style={{
                        color:"red",
                    }}>{pwCheckMsg}</label>
                </Container>
                <Container>
                    <label>회원 정보 입력 및 약관 동의</label>
                    <ul>
                        <li><input type="checkbox" /><label>[ 필수 ] 이용약관 동의</label></li>
                        <li><input type="checkbox" /><label>[ 필수 ] 이용약관 동의</label></li>
                        <li><input type="checkbox" /><label>[ 필수 ] 이용약관 동의</label></li>
                    </ul>
                </Container>
                <Container>
                    <ButtonUI>
                        <StyledLink to={path} onClick={signUpBtn}>회원가입</StyledLink>
                    </ButtonUI>
                </Container>
                <Container>
                    <MarginTen>
                        <StyledLink to="/login">로그인</StyledLink> |
                        <StyledLink to="/findid"> 아이디 찾기</StyledLink> | 
                        <StyledLink to="/findpw"> 비밀번호 찾기</StyledLink>
                    </MarginTen>
                </Container>
            </form>
        </Box>
    </Container>
    );
}

export default SignUp2;