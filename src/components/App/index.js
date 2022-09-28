import React, { useState } from "react";
import Interface from "../Interface";

import Cards from "../../database/defaultCards";
import Logo from "../../assets/img/logo.png";

import GlobalStyle from "../GlobalStyle";
import { Header } from "./style";

export default function App() {

    const [listCards, setListCards] = useState(Cards);

    return (
        <>
            <Header>
                <img src={Logo} />
                <h1>ZapRecall</h1>
            </Header>

            <Interface listCards={listCards} setListCards={setListCards} />

            <GlobalStyle />
        </>
    );
};