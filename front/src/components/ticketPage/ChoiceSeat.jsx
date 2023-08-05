import styled from "styled-components";
import { useEffect, useState } from "react";

const ChoiceSeat = ({ onClickSeat }) => {
    
    const seatBtn = (e) => {
        // console.log(e.target.name);
        const res = e.target.name;
        onClickSeat(res);
    };

    useEffect(()=>{
    })

    return (
        <div style={{
            marginRight: `auto`,
            marginLeft: `auto`
        }}>
            <div style={{
                backgroundColor: `#000`,
                color: `#fff`,
                textAlign: `center`,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
            }}>
                Screen
            </div>
            <Table>
                <tr>
                    <td>1</td>
                    <td><Td onClick={seatBtn} name={`A1`}>1</Td></td>
                    <td><Td onClick={seatBtn} name={`A2`}>2</Td></td>
                    <td><Td onClick={seatBtn} name={`A3`}>3</Td></td>
                    <td><Td onClick={seatBtn} name={`A4`}>4</Td></td>
                    <td><Td onClick={seatBtn} name={`A5`}>5</Td></td>
                    <td><Td onClick={seatBtn} name={`A6`}>6</Td></td>
                    <td><Td onClick={seatBtn} name={`A7`}>7</Td></td>
                    <td><Td onClick={seatBtn} name={`A8`}>8</Td></td>
                    <td><Td onClick={seatBtn} name={`A9`}>9</Td></td>
                    <td><Td onClick={seatBtn} name={`A10`}>10</Td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><Td onClick={seatBtn} name={`B1`}>1</Td></td>
                    <td><Td onClick={seatBtn} name={`B2`}>2</Td></td>
                    <td><Td onClick={seatBtn} name={`B3`}>3</Td></td>
                    <td><Td onClick={seatBtn} name={`B4`}>4</Td></td>
                    <td><Td onClick={seatBtn} name={`B5`}>5</Td></td>
                    <td><Td onClick={seatBtn} name={`B6`}>6</Td></td>
                    <td><Td onClick={seatBtn} name={`B7`}>7</Td></td>
                    <td><Td onClick={seatBtn} name={`B8`}>8</Td></td>
                    <td><Td onClick={seatBtn} name={`B9`}>9</Td></td>
                    <td><Td onClick={seatBtn} name={`B10`}>10</Td></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><Td onClick={seatBtn} name={`C1`}>1</Td></td>
                    <td><Td onClick={seatBtn} name={`C2`}>2</Td></td>
                    <td><Td onClick={seatBtn} name={`C3`}>3</Td></td>
                    <td><Td onClick={seatBtn} name={`C4`}>4</Td></td>
                    <td><Td onClick={seatBtn} name={`C5`}>5</Td></td>
                    <td><Td onClick={seatBtn} name={`C6`}>6</Td></td>
                    <td><Td onClick={seatBtn} name={`C7`}>7</Td></td>
                    <td><Td onClick={seatBtn} name={`C8`}>8</Td></td>
                    <td><Td onClick={seatBtn} name={`C9`}>9</Td></td>
                    <td><Td onClick={seatBtn} name={`C10`}>10</Td></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><Td onClick={seatBtn} name={`D1`}>1</Td></td>
                    <td><Td onClick={seatBtn} name={`D2`}>2</Td></td>
                    <td><Td onClick={seatBtn} name={`D3`}>3</Td></td>
                    <td><Td onClick={seatBtn} name={`D4`}>4</Td></td>
                    <td><Td onClick={seatBtn} name={`D5`}>5</Td></td>
                    <td><Td onClick={seatBtn} name={`D6`}>6</Td></td>
                    <td><Td onClick={seatBtn} name={`D7`}>7</Td></td>
                    <td><Td onClick={seatBtn} name={`D8`}>8</Td></td>
                    <td><Td onClick={seatBtn} name={`D9`}>9</Td></td>
                    <td><Td onClick={seatBtn} name={`D10`}>10</Td></td>
                </tr>
                
            </Table>
            <div>예매완료</div>
            <div>선택</div>
        </div>
    );
};

const Table = styled.table`
    width: 400px;
    border-spacing: 10px;
    border-collapse: separate;
`;

const Td = styled.button`
    cursor: pointer;
    width: 30px;
    text-align: center;
    background-color: rgb(149, 165, 166);
    &:hover {
        background-color: #f00;
        color: #fff;
    }
`

export default ChoiceSeat;