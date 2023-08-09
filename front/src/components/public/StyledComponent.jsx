import { Link } from "react-router-dom";
import styled from "styled-components";

//@param {#, rgb} 색상 정보 입력
//@param {#, rgb} 색상 정보 입력
//@returns 폰트 색상, 배경 색상 변경
export const AccessBox = styled.div`
    cursor: pointer;
    color: #${({ color }) => color};
    background-color: ${({ bgColor }) => bgColor };
`;

//@param {number} width input가로 길이 (px)
export const Box = styled.div`
    width: ${({ width }) => width }px;
    height: auto;
    background-color: rgb(238, 237, 237);
    box-shadow: 7px 7px 0px 1px rgb(154, 154, 154);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ButtonUI = styled.button`
    border-radius: 5px;
    border: none;
    color: #fff;
    background-color: #6C8891;
    width: 300px;
    height: 40px;
    cursor: pointer;
    margin: 10px;
`;
/*
@param {number} width input가로 길이 (px)
@param {number} height input세로 길이 (px)
@returns width와 height가 적용된 box
*/
export const Container = styled.div`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    margin: ${({ margin }) => margin}px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #000;
    /* border: 1px solid #000;  */
`;

export const InputText = styled.input`
    width: 500px;
    height: 40px;
    background-color: #fff;
    border: 1px solid rgb(238, 237, 237);   
    padding-left: 20px;
    margin: 8px;
    border-radius: 7px;
`;

export const StyledLink = styled(Link)`
    color: #000;
`

/*
@param {number} size크기 지정 (px)
@return title배경의 size를 지정
*/
export const TitleBg = styled.div`
font-size: ${({ size }) => size }px;

background-color: #6C8891;
width: 100%;
font-weight: bold;
color: #000;
display: flex;
`;

export const MarginTen = styled.div`
margin: 10px;
`;
