import React, { useState } from "react";

import Logo from "../../assets/img/logo.png";
import IconPlay from "../../assets/img/play-outline-icon.svg";
import IconTurn from "../../assets/img/rotate-icon.svg";
import GlobalStyle from "../GlobalStyle";
import { Container, Header, Main, Flashcard, Footer, Box_buttons, Button, Icon } from "./style";

export default function App() {

    const listCards = [{ id: 1, question: "Pergunta 1", icon: IconPlay }];

    function openFlashcard() {
        console.log('Abri o Flashcard');
    };

    return (
        <>
            <Container>

                <Header>
                    <img src={Logo} />
                    <h1>ZapRecall</h1>
                </Header>

                <Main>
                    {listCards.map((f) =>
                        <Flashcard
                            key={f.id}
                            onClick={openFlashcard}
                        >
                            <h1>{f.question}</h1>
                            <Icon src={f.icon} />
                        </Flashcard>
                    )}
                </Main>

                <Footer>
                    <Box_buttons>
                        <Button color="var(--cor-nao-lembrei)">Não lembrei</Button>
                        <Button color="var(--cor-quase-nao-lembrei)">Quase não lembrei</Button>
                        <Button color="var(--cor-zap)">Zap!</Button>
                    </Box_buttons>
                    <h1>0/4 CONCLUÍDOS</h1>
                </Footer>

            </Container>

            <GlobalStyle />
        </>
    );
};