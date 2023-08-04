import styled from "styled-components";
import { getMovieApi } from "../../api/getMovieApi";
import { useEffect } from "react";

const ChoiceSeat = ({ onClickSeat }) => {

    const getSeatApi = async () => {
        const res = await getMovieApi(`/movies/seats`);
    }
    
    const seatBtn = () => {
        
    };

    useEffect(()=>{
        getSeatApi();
    }, [])

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
                    <td>A</td>
                    <Td>1</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                    <Td>4</Td>
                    <Td>5</Td>
                    <Td>6</Td>
                    <Td>7</Td>
                    <Td>8</Td>
                    <Td>9</Td>
                    <Td>10</Td>
                </tr>
                <tr>
                    <td>B</td>
                    <Td>1</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                    <Td>4</Td>
                    <Td>5</Td>
                    <Td>6</Td>
                    <Td>7</Td>
                    <Td>8</Td>
                    <Td>9</Td>
                    <Td>10</Td>
                </tr>
                <tr>
                    <td>C</td>
                    <Td>1</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                    <Td>4</Td>
                    <Td>5</Td>
                    <Td>6</Td>
                    <Td>7</Td>
                    <Td>8</Td>
                    <Td>9</Td>
                    <Td>10</Td>
                </tr>
                <tr>
                    <td>D</td>
                    <Td>1</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                    <Td>4</Td>
                    <Td>5</Td>
                    <Td>6</Td>
                    <Td>7</Td>
                    <Td>8</Td>
                    <Td>9</Td>
                    <Td>10</Td>
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

const Td = styled.td`
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