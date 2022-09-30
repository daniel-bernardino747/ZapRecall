import React, { useState } from 'react';

import Logo from '../../assets/img/logo-grande.png';

import { Container } from './style';

export default function Welcome() {
    const [welcome, setWelcome] = useState(true);

    return (
        <Container show={welcome}>
            <div>
                <img src={Logo} alt='Logo' />
                <h1>ZapRecall</h1>
            </div>
            <button onClick={() => setWelcome(!welcome)}>Iniciar Recall!</button>
        </Container>
    );
};