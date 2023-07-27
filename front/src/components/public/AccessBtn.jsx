import styled from "styled-components";

/*
    @returns color에 따라서 색상 지정가능
*/

const AccessBox = styled.div`
    cursor: pointer;
    color: ${({ color }) => color};
`;

export default AccessBox;