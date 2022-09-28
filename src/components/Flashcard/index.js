import React from 'react';
import Buttons from '../Buttons';

import IconTurn from "../../assets/img/rotate-icon.svg";

import { Flashcard, Icon } from "./style";


export default function FlashCards({ listCards, setListCards }) {

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

            <Buttons id={f.id} listCards={listCards} setListCards={setListCards} />
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

    return (<>{listFlashCards.map((i) => <>{i}</>)}</>);
};