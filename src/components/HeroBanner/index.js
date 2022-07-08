import React from 'react'
import {Container, HarryLogos, HeroBannerBlock} from './styles/heroBanner'
import { Button } from '../../components/'
export default function HeroBanner({heroBlock}) {
  console.log(heroBlock.id)
    return (
      
        <Container>
          {heroBlock.map((heroBlock)=>{
            return(<>
                <img src = {`./images/${heroBlock.url}`}></img>
                  <HeroBannerBlock>
                     <HarryLogos>
                      {heroBlock.logo ? <img src={`./images/${heroBlock.logo} `} alt ="img"/> : ''}
                      {heroBlock.subLogo ? <img src={`./images/${heroBlock.subLogo}`}alt ="img"/> : ''}
                    </HarryLogos>
                   <span>{heroBlock.heading}</span>
                   <p>{heroBlock.descripton}</p>
                 <Button bg={'#fff'} text={'#000'}/>
              </HeroBannerBlock> 
              </>
            )
          })}
                      
        </Container>
    )
}