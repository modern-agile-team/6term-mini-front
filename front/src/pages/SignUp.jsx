import React, { useEffect, useState } from "react";
import InputText from "../components/public/InputText";
import Container from "../components/public/Container";
import Box from "../components/public/Box";
import TitleBg from "../components/public/TitleBg";
import ButtonUI from "../components/public/ButtonUI";
import StyledLink from "../components/public/StyledLink";
import MarginTen from "../components/public/MarginTen";
import signUpApi from "../api/signUpApi";
import { useNavigate } from "react-router-dom";
import AccessBox from "../components/public/AccessBtn";
import useDebouncedEffect from "../hooks/useDebouncedEffect";
import checkUserInfo from "../api/checkUserInfo";
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
        idCheckMsg: "",
        emailCheckMsg: "",
    });
    //유효성 검사
    const [ isCheck, setIsCheck ] = useState({
        id: false,
        email: false,
        pw: false,
        checkPw: false
    });
    //체크박스
    const [ isCheckBox, setIsCheckBox ] = useState(false);

    //setState로 값 불러오기
    const handleChange = e => {
        setUserInfo((userInfo) => {
            return { ...userInfo, [e.target.name] : e.target.value};
        });
        setIsCheck((isCheck)=>{
            return { 
                ...isCheck,
                [e.target.name] : !!e.target.value, //target.value가 비어있지 않는다면,
            };
        });
    };

    //Debounce로 delay시간 만큼 뒤 state호출
    const userId = useDebouncedEffect(userInfo, 500);

    const getCheckedBox = (event) => {
        setIsCheckBox(event.target.checked); //체크박스
    }

    //check api 받아와서 id email 여부 판단
    const getCheckUserInfo = async() => {
        const userIdData = await checkUserInfo("id" , { "loginId":userId.id});
        const userEmailData = await checkUserInfo("email", {"email" :userId.email });
        setCheckMsg(()=>{
            return {
                idCheckMsg: userIdData ? "" : "이미 가입된 아이디 입니다.",
                emailCheckMsg: userEmailData ? "" : "이미 가입된 이메일 입니다.",
            }
        });
    };

    useEffect(()=> {
        getCheckUserInfo()
    }, [userId]);

    //회원가입 버튼 클릭 시
    async function signUpBtn() {
        try {
            if(isCheck.id && isCheck.email && isCheck.pw && isCheckBox) {
                
                const response = await signUpApi({
                    loginId: userId.id,
                    email: userId.email,
                    pw: userId.pw,
                });
                if (response && response.data.success) {
                    alert('회원가입 완료');
                    navigate(`/login`);
                } else {
                    alert(response.data.msg)
                }
            } else {
                if (!isCheck.id) alert('아이디를 확인해 주세요.');
                if (!isCheck.email) alert('이메일을 확인해 주세요.');
                if (!isCheck.pw) alert('비밀번호를 확인해 주세요.');
                if (!isCheckBox) alert('약관 동의를 해주세요.');
            }
        } catch(error) {
            console.log(error);
        }
    }
    
    function onSubmitHandler(e) {
        e.preventDefault();
    }

    return (
        <Container margin={60}>
            <Box width={536} height={300}>
            <TitleBg size={40}>회원가입</TitleBg>
            <form onSubmit={onSubmitHandler}>
                <Container>
                    <InputText name="email" type="text" placeholder="이메일" onChange={handleChange}/>
                    <div style={{
                        width:530,
                        height: 20,
                        marginLeft: 25,
                        color: `#ff0000`
                    }}>{checkMsg.emailCheckMsg}</div>
                    <InputText name="id" type="text" placeholder="아이디" onChange={handleChange}/>
                    <div style={{
                        width:530,
                        height: 20,
                        marginLeft: 25,
                        color: `#ff0000`
                    }}>{checkMsg.idCheckMsg}</div>
                    <InputText name="pw" type="password" placeholder="비밀번호" onChange={handleChange}/>
                    <div style={{
                        width:530,
                        height: 20,
                        marginLeft: 25,
                    }}></div>
                    <InputText name="checkPw"type="password" placeholder="비밀번호 확인" onChange={handleChange}/>
                    <div style={{
                        width:530,
                        height: 20,
                        marginLeft: 25,
                        color: `#ff0000`
                    }}>{userInfo.pw === userInfo.checkPw ? "": "비밀번호가 일치하지 않습니다."}</div>
                </Container>
                    <ul style={{
                        marginLeft: 25,
                    }}>
                        <li><input type="checkbox" name='checkBox' onChange={getCheckedBox} /><label>[ 필수 ] 이용약관 동의</label></li>
                    </ul>
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