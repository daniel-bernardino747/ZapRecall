import styled, { css } from "styled-components";

export const Header = styled.header`
    position: fixed;
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-size: 36px;
    color: white;
    font-family: "Righteous";
    z-index: 1;
    background-color: var(--cor-fundo);

    img {
        width: 52px;
        height: 60px;
    }
`;

export const Main = styled.ul`
    max-height: 400px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const openFlash = css`

    min-height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--cor-fundo-card);
    cursor: default;
    padding: 20px 10px 10px 10px;
    position: relative;
    font-weight: 400;


    h1, h3, section {
        display: none;
    }

    img {
        align-self: end;
        margin-right: 1px;
        cursor: pointer;
    }
`;

const closeFlash = css`
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;

    h2, h3, section {
        display: none;
    }
`;

const showAnswer = css`
    h1, h2, img {
        display: none;
    }
    h3, section {
        display: flex;
    }
`;



export const Flashcard = styled.li`
    width: 300px;
    height: 50px;
    
    color: black;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 10px 10px;
    cursor: pointer;
    background-color: --cor-fundo-card;
    font-family: 'Recursive', cursive;
    pointer-events: ${props => props.standBy ? 'none' : 'default'};
    
    ${props => props.toggle ? openFlash : closeFlash}
    ${props => props.turn ? showAnswer : ''}
    ${props => {
        switch (props.userChoice) {
            case 'no':
                return css`
                    color: var(--cor-nao-lembrei);
                    text-decoration: line-through;
                `;
            case 'almost':
                return css`
                    color: var(--cor-quase-nao-lembrei);
                    text-decoration: line-through;
                `;
            case 'yes':
                return css`
                    color: var(--cor-zap);
                    text-decoration: line-through;
                `;
        };
    }};
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

export const Icon = styled.img`
    width: 23px;
    height: 23px;
`;