import React from 'react';
import FlashCards from '../Flashcard';
import { Main, Header, Footer, Icon, ResultFinal } from "./style";

import IconPlay from "../../assets/img/play-outline-icon.svg";
import IconCorrect from "../../assets/img/correct-icon.svg";
import IconTurn from "../../assets/img/rotate-icon.svg";
import IconParty from "../../assets/img/party.png";
import IconSad from "../../assets/img/sad.png";
import Logo from "../../assets/img/logo.png";

export default function Interface({ listCards, setListCards, goals }) {

    const correctAnswers = listCards.filter((i) => i.icon === IconCorrect).length;
    const completedCards = listCards.filter((i) => i.userChoice !== '').length;
    const finalGame = (completedCards === listCards.length);

    return (
        <>
            <Header>
                <img src={Logo} />
                <h1>ZapRecall</h1>
            </Header>

            <Main>
                <FlashCards listCards={listCards} setListCards={setListCards} />
            </Main>

            <Footer>
                {finalGame
                    ? <EndGame totalCorrects={correctAnswers} goals={goals} />
                    : <ContinousGame completedCards={completedCards} listCards={listCards} />
                }
            </Footer>
        </>
    );
};

function EndGame({ totalCorrects, goals }) {
    const result = (totalCorrects >= goals);

    return (
        <>
            <h1>O JOGO ACABOU</h1>
            <ResultFinal>
                <h1>{result ? "Parabéns, alcançou sua meta!" : "Que pena, não batemos a meta"}</h1>
                <img src={result ? IconParty : IconSad} alt="iconGoal" />
            </ResultFinal>
        </>
    );
};

function ContinousGame({ completedCards, listCards }) {
    return (
        <>
            <h1>{completedCards}/{listCards.length} CONCLUÍDOS</h1>
            <div>
                {listCards.filter((i) => i.icon !== IconPlay && i.icon !== IconTurn).map((i) => <Icon src={i.icon} />)}
            </div>
        </>
    );
};
