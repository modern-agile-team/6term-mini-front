import React, { useEffect, useState } from "react";
import InputText from "../components/public/InputText";
import Container from "../components/public/Container";
import Box from "../components/public/Box";
import TitleBg from "../components/public/TitleBg";
import ButtonUI from "../components/public/ButtonUI";
import StyledLink from "../components/public/StyledLink";
import MarginTen from "../components/public/MarginTen";
import axios from "axios";
import signUpApi from "../api/signUpApi";
import { useNavigate } from "react-router-dom";
import AccessBox from "../components/public/AccessBtn";
import getDebounce from 'lodash'
function SignUp() {
    //navigate
    const navigate = useNavigate();
    //초기값 할당
    const [ userInfo, setUserInfo ] = useState({
        id: "",
        email: "",
        pw: "",
        checkPw: ""
    });
    //메시지
    const [ checkMsg, setCheckMsg ] = useState({
        pwCheckMsg: "",
        idCheckMsg: "",
        emailCheckMsg: "",
    });
    //유효성 검사
    const [ isCheck, setIsCheck ] = useState({
        id: false,
        email: false,
        pw: false,
        checkPw: false,
        CheckBox: false
    });
    //체크박스
    const [ isCheckBox, setIsCheckBox ] = useState(false);

    const handleChange = e => {
        setUserInfo((userInfo) => {
            return { ...userInfo, [e.target.name] : e.target.value};
        });
    };

    const checkId = (e) => {
        setIsCheck((isCheck)=>{
            return { ...isCheck, id : e.target.value !== "" ? true : false};
        });
    };

    // const getUserInfo = (e) => {
    //     setUserInfo({
    //         ...userInfo,
    //         [e.target.name] : e.target.value,
    //     });
    //     setIsCheck({
    //         ...isCheck,
    //         isId: id !== "" ? true : false, 
    //         isEmail: email !== "" ? true : false,
    //         isPw: pw === checkPw && pw !== "" ? true : false,
    //         isCheckPw: pw === checkPw && checkPw !== "" ? true : false,
    //     })
    // }

    const getCheckedBox = (event) => {
        setIsCheckBox(event.target.checked); //체크박스
    }

    //회원가입 버튼 클릭 시
    async function signUpBtn() {
        // if(isId && isPw && isCheckPw && isCheckBox) {
            
        //     const response = await signUpApi({
        //         loginId: id,
        //         email: email,
        //         pw: pw,
        //     });
        //     if (response) {
        //         alert('회원가입 완료');
        //         navigate(`/login`);
        //     } else {}
        // } else {
        //     if (!isId) alert('아이디를 확인해 주세요.');
        //     if (!isEmail) alert('이메일을 확인해 주세요.');
        //     if (!isPw) alert('비밀번호를 확인해 주세요.');
        //     if (!isCheckBox) alert('약관 동의를 해주세요.');
        // }
    }

    //event 발생시 리로드
    // useEffect(()=>{
    //     isCheckBox ? setIsCheckBox(true) : setIsCheckBox(false);
    //     isPw && isCheckPw ? setPwCheckMsg("") : setPwCheckMsg("비밀번호가 일치하지 않습니다.");
    //     isId ? setCheckIdMsg("") : setCheckIdMsg("존재하는 아이디 입니다.");
    //     isEmail ? setCheckEmailMsg("") : setCheckEmailMsg("존재하는 이메일 입니다.");
    // });
    
    function onSubmitHandler(e) {
        e.preventDefault();
    }

    return (
        <Container margin={100}>
            <Box width={536} height={300}>
            <TitleBg size={40}>회원가입</TitleBg>
            <form onSubmit={onSubmitHandler}>
                <Container>
                    <InputText name="email" type="text" placeholder="이메일" onChange={handleChange}/>
                    <InputText name="id" type="text" placeholder="아이디" onChange={handleChange}/>
                    <InputText name="pw" type="password" placeholder="비밀번호" onChange={handleChange}/>
                    <InputText name="checkPw"type="password" placeholder="비밀번호 확인" onChange={handleChange}/>
                    <label style={{
                        color:"red",
                    }}>
                        <ul>
                            <li>
                                {checkMsg.idCheckMsg}
                            </li>
                            <li>
                                {checkMsg.emailCheckMsg}
                            </li>
                            <li>
                                {checkMsg.pwCheckMsg}
                            </li>
                        </ul>
                    </label>
                </Container>
                <Container>
                    <label>회원 정보 입력 및 약관 동의</label>
                    <ul>
                        <li><input type="checkbox" name='checkBox' onChange={getCheckedBox} /><label>[ 필수 ] 이용약관 동의</label></li>
                    </ul>
                </Container>
                <Container>
                        <AccessBox onClick={signUpBtn}>
                            <ButtonUI>회원가입</ButtonUI>
                        </AccessBox>
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

export default SignUp;