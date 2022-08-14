import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({bgcolor})=> {
        return bgcolor
    }};
    color: white;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
`;