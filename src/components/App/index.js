import React, { useState, useEffect } from "react";
import Cards from "../../database/defaultCards";

import Logo from "../../assets/img/logo.png";
import IconPlay from "../../assets/img/play-outline-icon.svg";
import IconTurn from "../../assets/img/rotate-icon.svg";
import IconCorrect from "../../assets/img/correct-icon.svg"
import IconHelp from "../../assets/img/help-icon.svg"
import IconIncorrect from "../../assets/img/incorrect-icon.svg"

import GlobalStyle from "../GlobalStyle";
import { Header, Main, Flashcard, Footer, Box_buttons, Button, Icon } from "./style";

export default function App() {

    const [listCards, setListCards] = useState(Cards);
    /* const [anyElementClicked, setAnyElementClicked] = useState(false); */

    useEffect(() => {
        console.log(listCards);
    }, [listCards])

    const listFlashCards = listCards.map((f) =>
        <Flashcard
            key={f.id}
            onClick={() => openFlashcard(f.id)}
            toggle={f.show}
            turn={f.turn}
            userChoice={f.userChoice}
            standBy={f.standBy}
        >
            <span>
                <h1>{f.title}</h1>
                <h2>{f.question}</h2>
                <h3>{f.answer}</h3>
            </span>

            <Box_buttons>
                <Button onClick={() => userRememberAnswer('no', f.id)} color="var(--cor-nao-lembrei)">Não lembrei</Button>
                <Button onClick={() => userRememberAnswer('almost', f.id)} color="var(--cor-quase-nao-lembrei)">Quase não lembrei</Button>
                <Button onClick={() => userRememberAnswer('yes', f.id)} color="var(--cor-zap)">Zap!</Button>
            </Box_buttons>
            <Icon src={f.icon} />
        </Flashcard>
    );

    function openFlashcard(id) {

        const elementClicked = listCards.filter((e) => e.id === id)[0];
        let newList;

        if (elementClicked.show === true) {

            if (elementClicked.turn !== true) {
                console.log('segunda vez')

                const newChange = listCards.map(f => {

                    if (f.id === id) {
                        return { ...f, turn: !f.turn }
                    } else {
                        return f
                    }
                });

                newList = newChange.map(f => f);
            } else {
                return
            }

        } else {
            console.log('primeira vez')

            const newChange = listCards.map(f => {

                if (f.id === id) {
                    return { ...f, show: !f.show }
                } else {
                    return { ...f, standBy: true }
                }
            });

            newList = newChange.map(f => { return f.show ? { ...f, icon: IconTurn } : f });
        }
        setListCards(newList);
    };

    function userRememberAnswer(answer, id) {


        const elementClicked = listCards.filter((e) => e.id === id)[0];
        console.log("elementClicked", elementClicked)
        const newChange = listCards.map(f => {

            if (f.id === elementClicked.id) {
                return { ...f, userChoice: answer, show: !f.show, turn: !f.turn, standBy: true }
            } else {
                return f
            }
        });

        console.log("newChange", newChange)

        const newList = newChange.map((f) => {
            if (f.userChoice === 'no') {

                return { ...f, icon: IconIncorrect }

            } else if (f.userChoice === 'almost') {

                return { ...f, icon: IconHelp }

            } else if (f.userChoice === 'yes') {

                return { ...f, icon: IconCorrect }

            } else {
                return { ...f, standBy: false }
            }
        })

        console.log("newList", newList);
        setListCards(newList);
    }

    const completedCards = listCards.filter((i) => i.userChoice !== '').length;


    return (
        <>
            <Header>
                <img src={Logo} />
                <h1>ZapRecall</h1>
            </Header>

            <Main>
                {listFlashCards.map((i) => <>{i}</>)}
            </Main>

            <Footer>
                <h1>{completedCards}/{listCards.length} CONCLUÍDOS</h1>

                <div>
                    {listCards.filter((i) => i.icon !== IconPlay && i.icon !== IconTurn).map((i) => <Icon src={i.icon} />)}
                </div>
            </Footer>

            <GlobalStyle />
        </>
    );
};