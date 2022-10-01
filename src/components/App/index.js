import React, { useState } from "react";
import GlobalStyle from "../GlobalStyle";
import Interface from "../Interface";
import Welcome from "../Welcome";

import Cards from "../../database/defaultCards";

export default function App() {
    const [listCards, setListCards] = useState(Cards);
    const [goals, setGoals] = useState(0);

    return (
        <>
            <Welcome deck={listCards} setGoals={setGoals} />

            <Interface listCards={listCards} setListCards={setListCards} goals={goals} />

            <GlobalStyle />
        </>
    );
};