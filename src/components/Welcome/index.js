import React, { useState } from 'react';
import { Container, ContainerMetas } from './style';
import Logo from '../../assets/img/logo-grande.png';

export default function Welcome({ deck, setGoals }) {
    const [showWelcome, setShowWelcome] = useState(true);
    const [showGoals, setShowGoals] = useState(true);

    const submitGoals = (e) => {
        e.preventDefault();
        setShowGoals(false);
    }

    return (
        <>
            <Container show={showWelcome}>
                <div>
                    <img src={Logo} alt='Logo' />
                    <h1>ZapRecall</h1>
                </div>

                <button onClick={() => setShowWelcome(!showWelcome)}>Iniciar Recall!</button>
            </Container>

            <ContainerMetas show={showGoals}>

                <div>
                    <img src={Logo} alt='Logo' />
                    <h1>ZapRecall</h1>
                </div>

                <form onSubmit={submitGoals}>

                    <select name="setGoal" onChange={e => setGoals(e.target.value)}>

                        <option value="1">Defina sua meta</option>
                        {deck.map((e) => <option key={e.id} value={e.id}>{e.id}</option>)}

                    </select>

                    <input type="submit" value="Definir Meta!"></input>
                </form>


            </ContainerMetas>
        </>
    );
};