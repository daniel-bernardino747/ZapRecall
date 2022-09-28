import styled from "styled-components";

export const Main = styled.ul`
    max-height: 400px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;


export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    min-height: 70px;
    padding: 14px 10px;
    font-size: 18px;
    color: black;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 7px;

    img {
        margin: 0 5px;
    }
`;

export const Icon = styled.img`
    width: 23px;
    height: 23px;
`;