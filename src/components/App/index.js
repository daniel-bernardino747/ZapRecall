import React, { useState, useEffect } from "react";
import Cards from "../../database/defaultCards";

import Logo from "../../assets/img/logo.png";
import IconPlay from "../../assets/img/play-outline-icon.svg";
import IconTurn from "../../assets/img/rotate-icon.svg";
import IconCorrect from "../../assets/img/correct-icon.svg"
import IconHelp from "../../assets/img/help-icon.svg"
import IconIncorrect from "../../assets/img/incorrect-icon.svg"

import GlobalStyle from "../GlobalStyle";
import { Container, Header, Main, Flashcard, Footer, Box_buttons, Button, Icon } from "./style";

export default function App() {

    const [listCards, setListCards] = useState(Cards);

    const listFlashCards = listCards.map((f) =>
        <Flashcard
            key={f.id}
            onClick={() => openFlashcard(f.id)}
            toggle={f.show}
            turn={f.turn}
            userChoice={f.userChoice}
        >
            <h1>{f.title}</h1>
            <h2>{f.question}</h2>
            <h3>{f.answer}</h3>
            <div><Icon src={f.icon} /></div>
        </Flashcard>
    );


    function openFlashcard(id) {

        const elementClicked = listCards.filter((e) => e.id === id)[0];
        console.log(elementClicked)
        let newList;

        if (elementClicked.show === true) {

            if (elementClicked.turn === true) {
                console.log('terceira vez')

                const newChange = listCards.map(f => {

                    if (f.id === id) {
                        return { ...f, show: !f.show, turn: !f.turn }
                    } else {
                        return f
                    }
                });

                newList = newChange.map(f => { return f.show ? { ...f, icon: IconTurn } : { ...f, icon: IconPlay } });

            } else {
                console.log('segunda vez')
                const newChange = listCards.map(f => {

                    if (f.id === id) {
                        return { ...f, turn: !f.turn }
                    } else {
                        return f
                    }
                });

                newList = newChange.map(f => f);
            }

        } else {
            console.log('primeira vez')

            const newChange = listCards.map(f => {

                if (f.id === id) {
                    return { ...f, show: !f.show }
                } else {
                    return f
                }
            });

            newList = newChange.map(f => { return f.show ? { ...f, icon: IconTurn } : { ...f, icon: IconPlay } });
        }
        console.log(newList)
        setListCards(newList);

    };

    function userRememberAnswer(answer) {

        const elementClicked = listCards.filter((e) => e.show)[0];
        const newChange = listCards.map(f => {

            if (f.id === elementClicked.id) {
                console.log('AQUI', f)
                return { ...f, userChoice: answer, show: !f.show, turn: !f.turn }
            } else {
                return f
            }
        });
        console.log('NEW CHANGE', newChange)

        const newList = newChange.map((f) => {
            if (f.userChoice === 'no') {

                return { ...f, icon: IconIncorrect }

            } else if (f.userChoice === 'almost') {

                return { ...f, icon: IconHelp }

            } else if (f.userChoice === 'yes') {

                return { ...f, icon: IconCorrect }

            } else {
                return f
            }
        })


        setListCards(newList);
    }

    console.log(listCards)

    return (
        <>
            <Container>

                <Header>
                    <img src={Logo} />
                    <h1>ZapRecall</h1>
                </Header>

                <Main>
                    {listFlashCards.map((i) => <>{i}</>)}
                </Main>

                <Footer>
                    <Box_buttons>
                        <Button onClick={() => userRememberAnswer('no')} color="var(--cor-nao-lembrei)">Não lembrei</Button>
                        <Button onClick={() => userRememberAnswer('almost')} color="var(--cor-quase-nao-lembrei)">Quase não lembrei</Button>
                        <Button onClick={() => userRememberAnswer('yes')} color="var(--cor-zap)">Zap!</Button>
                    </Box_buttons>
                    <h1>0/4 CONCLUÍDOS</h1>
                </Footer>

            </Container>

            <GlobalStyle />
        </>
    );
};