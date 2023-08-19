import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {
    AccessBox,
    Container,
    TitleBg,
} from "../components/public/StyledComponent";
import logOutApi from "../api/logOutApi";

function Header() {
    const navigate = useNavigate();
    const [closingWindow, setClosingWindow] = useState(false);
    
    //logo눌렀을 때, 토큰이 있으면 main페이지로 이동 없으면 x
    const logoBtn = () => {
        if (localStorage.getItem(`accessToken`) === null) {
            navigate("/");
        } else {
            navigate("/mainpage");
        }
    }

    //마이페이지 눌렀을 때, 토큰 있으면 접근
    const handleGoMyPage = () => {
        if (localStorage.getItem(`accessToken`) === null) {
            alert('로그인이 필요합니다.');
        } else {
            navigate("/mypage");
        }
    }


    useEffect(() => {
        // 윈도우가 포커스될 때 호출되는 핸들러
        const handleFocus = () => {
            setClosingWindow(false);
        };

        // 윈도우가 블러될 때 호출되는 핸들러
        const handleBlur = () => {
            setClosingWindow(true);
        };

        // 윈도우 크기가 변경될 때 호출되는 핸들러
        const handleResize = () => {
            setClosingWindow(false);
        };

        // 마우스가 문서 바깥으로 이동할 때 호출되는 핸들러
        const handleMouseLeave = () => {
            setClosingWindow(true);
        };

        // 마우스가 문서 안으로 이동할 때 호출되는 핸들러
        const handleMouseEnter = () => {
            setClosingWindow(false);
        };

        // 키가 눌렸을 때 호출되는 핸들러
        const handleKeyDown = (e) => {
            if (e.keyCode === 91 || e.keyCode === 18 || (e.ctrlKey && e.keyCode === 82)) {
                setClosingWindow(false); // 단축키 ALT+TAB, F5, CTRL+F5, CTRL+R (새로고침)
            }
        };

        // 컴포넌트가 마운트되었을 때 이벤트 핸들러 등록
        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);
        window.addEventListener('resize', handleResize);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('keydown', handleKeyDown);

        // 컴포넌트 언마운트 시 이벤트 핸들러 제거
        return () => {
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('blur', handleBlur);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // 브라우저 창이 닫힐 때 수행할 작업
    const toDoWhenClosing = async () => {
        window.localStorage.clear();
        await logOutApi("/auth/logout");
    };

    useEffect(() => {
        // 윈도우가 언로드될 때 호출되는 핸들러
        const handleUnload = () => {    
            if (closingWindow) {
                toDoWhenClosing();
            }
        };

        // 컴포넌트가 마운트되었을 때 언로드 이벤트 핸들러 등록
        window.addEventListener('unload', handleUnload);

        // 컴포넌트 언마운트 시 언로드 이벤트 핸들러 제거
        return () => {
            window.removeEventListener('unload', handleUnload);
        };
    }, [closingWindow]);

    return (
        <Container>
            <TitleBg>
                    <AccessBox onClick={logoBtn}>
                        <BigFont>혼</BigFont>자보는<BigFont>영</BigFont>화<BigFont>관</BigFont>
                    </AccessBox>
                    <HeaderBox>
                        <AccessBox onClick={handleGoMyPage}>
                            <img 
                            src={"https://ma6-mini-poster.s3.ap-northeast-2.amazonaws.com/free-icon-user-1946429.png"}
                            style={{
                                width:50,
                                height:50,
                            }}
                            alt="회원정보 페이지 로고"
                            />
                        </AccessBox>
                    </HeaderBox>
            </TitleBg>
        </Container>
    )
}


const BigFont = styled.span`
    font-size: 60px;
    font-weight: bold;
    color: #000;
`;

const HeaderBox = styled.div`
    margin: auto 20px 10px auto;
`;

export default Header;