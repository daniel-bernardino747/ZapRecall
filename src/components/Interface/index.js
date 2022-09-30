import React from 'react';
import FlashCards from '../Flashcard';

import IconPlay from "../../assets/img/play-outline-icon.svg";
import IconTurn from "../../assets/img/rotate-icon.svg";
import Logo from "../../assets/img/logo.png";

import { Main, Header, Footer, Icon } from "./style";


export default function Interface({ listCards, setListCards }) {

    const completedCards = listCards.filter((i) => i.userChoice !== '').length;

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
                <h1>{completedCards}/{listCards.length} CONCLUÍDOS</h1>

                <div>
                    {listCards.filter((i) => i.icon !== IconPlay && i.icon !== IconTurn).map((i) => <Icon src={i.icon} />)}
                </div>
            </Footer>
        </>
    );
};
