import React from 'react'
import { Container, UpHeader, GameCenterButton, NewsLinks, AuthBlock, LoginButton,
         VipBlock, LowerHeader, Menu, RightMenu, Magnifier, Heart, Shop} from './styles/header' 
import {IoIosArrowRoundBack} from 'react-icons/io'
import { GrFavorite } from "react-icons/gr";
import { BiBriefcase } from "react-icons/bi";

export default function Header() {
    return (
        <Container>
            <UpHeader>
               <GameCenterButton> 
                    <IoIosArrowRoundBack/>
                    <p>Игровая зона </p>
                </GameCenterButton>
                <NewsLinks>
                    <p>Перейти в раздел новости</p>
                    <a href="#"> узнать больше </a>
                </NewsLinks>
                <AuthBlock>
                    <LoginButton>
                        <img src="./images/header.svg" alt="header"/>
                        <p>Учетная запись</p>
                    </LoginButton>
                    <VipBlock>
                    <img src="/images/crown.png" alt="crown"/>
                    <p>Vip</p>
                    </VipBlock>
                </AuthBlock>
            </UpHeader>
            <LowerHeader>
                
                <Menu>
                    <img src="images/logo.svg" alt="logo"/>
                    <li> Продукция</li>
                    <li>Узнать больше</li>
                    <li>Получить помощь</li>
                    <li>Праздник</li>   
                </Menu>
                <RightMenu>
                <Magnifier>
                    <img src="images/magnifier.svg" alt="magnifier"/>
                </Magnifier>
                <Heart>
                    <GrFavorite/>
                    <p>(0)</p>
                </Heart>
                <Shop>   
                    <BiBriefcase/>
                    Магазин
                </Shop>     
                </RightMenu>
            </LowerHeader>
        </Container>
    )
}

 

