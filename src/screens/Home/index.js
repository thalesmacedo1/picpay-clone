import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { Wrapper, Container, Header, BalanceContainer, BalanceContainer2, BalanceTitle, Balance } from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function Home() {
    return (
            <Wrapper>
                <Container>
                    <Header>
                        <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
                        <BalanceContainer>
                            <BalanceTitle>Meu saldo</BalanceTitle>
                            <Balance>R$ 0,00</Balance>
                        </BalanceContainer>
                        <BalanceContainer2>
                            <AntDesign name="gift" size={30} color="#10c86e" />
                            <MaterialCommunityIcons name="ticket-percent" size={30} color="#10c86e" />
                            </BalanceContainer2>
                    </Header>
                    <Suggestions />
                    <Activities />
                    <Tips />
                    <Banner />                    
                </Container>
            </Wrapper>
        );
}