import styled from "styled-components";

export const Box_buttons = styled.section`
    display: flex;
    width: 100%;
    padding: 0 5px;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    gap: 5px;
`;

export const Button = styled.div`
    width: 120px;
    height: 30px;
    background-color: ${props => props.color};
    color: white;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        filter: brightness(0.7);
    }
`;