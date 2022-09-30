import React, { useState } from "react";
import Interface from "../Interface";
import Welcome from "../Welcome";

import Cards from "../../database/defaultCards";

import GlobalStyle from "../GlobalStyle";

export default function App() {

    const [listCards, setListCards] = useState(Cards);

    return (
        <>
            <Welcome />

            <Interface listCards={listCards} setListCards={setListCards} />

            <GlobalStyle />
        </>
    );
};