import styled, { css } from "styled-components";


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



export const Card = styled.li`
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

export const Icon = styled.img`
    width: 23px;
    height: 23px;
`;
