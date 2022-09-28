import React from 'react';


import IconCorrect from "../../assets/img/correct-icon.svg"
import IconHelp from "../../assets/img/help-icon.svg"
import IconIncorrect from "../../assets/img/incorrect-icon.svg"

import { Box_buttons, Button } from "./style";

export default function Buttons({ id, listCards, setListCards }) {
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

    return (
        <Box_buttons>
            <Button onClick={() => userRememberAnswer('no', id)} color="var(--cor-nao-lembrei)">Não lembrei</Button>
            <Button onClick={() => userRememberAnswer('almost', id)} color="var(--cor-quase-nao-lembrei)">Quase não lembrei</Button>
            <Button onClick={() => userRememberAnswer('yes', id)} color="var(--cor-zap)">Zap!</Button>
        </Box_buttons>
    );
};