import React from 'react'
import { Container, FooterWraper,Logo,License,Social,SocilaLinks } from './styles/footer'

export default function Footer() {
    return (
        <Container>
            <FooterWraper> 
            <Logo>
                <img src="./images/logo.svg"/>
            </Logo>
            <License>
                <p>
                LEGO System A/S, DK-7190 Billund, Denmark. 
                Совершать покупки онлайн могут только лица старше 18 лет.
                LEGO, логотип LEGO, Минифигурка (Minifigure), DUPLO, LEGENDS OF CHIMA,
                NINJAGO, BIONICLE, MINDSTORMS и MIXELS являются товарными знаками и
                объектами авторского права корпорации LEGO Group.
                ©2021 The LEGO Group.
                Все права защищены. Используя этот сайт,
                 вы выражаете свое согласие с Условиями использования.       
                </p>
            </License>
            <Social>
              <span> Присоединяйтесь к нам в соцсетях </span> 
              <SocilaLinks>
                  <img src="./images/facebook.svg"></img>
                  <img src="./images/instagram.svg"></img>
                  <img src="./images/twitter.svg"></img>
                  <img src="./images/youtube.svg"></img>
              </SocilaLinks>
            </Social>
            </FooterWraper>
        </Container>
    )
}

