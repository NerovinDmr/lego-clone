import React from 'react'
import {
        Container, QuikLinkItem,
        QuikLinkimage, QuikLinkText
       } from './styles/quickLinksBlock'

export default function QuickLinksBlock({quickLinks}) {
   
    return (
        
        <Container>
            {quickLinks.map((quickLinks)=>{
                return(
                    <QuikLinkItem>
                    <QuikLinkimage>
                       <img src={`/images/${quickLinks.url}`} alt = "img"></img>
                   </QuikLinkimage>
                 <QuikLinkText>
                    {quickLinks.text}
                </QuikLinkText>   
              </QuikLinkItem>
                )
            })}
        </Container>
    )
}