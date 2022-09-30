import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: ${props => props.show ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
    position: absolute;
    background-color: var(--cor-fundo);
    gap: 30px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    img {
        width: 100%;
        height: auto;
    }

    h1 {
        font-family: "Righteous", cursive;
        font-size: 36px;
        color: white;
    }

    button {
        width: 246px;
        height: 54px;
        padding: 16px 22px;
        border-radius: 5px;
        border: 1px solid #D70900;
        color: #D70900;
        border: 1px;
        font-size: 18px;
        cursor: pointer;
        font-family: 'Recursive';

        &:hover {
            background-color: #cea2a0; 
        }
    }
`;