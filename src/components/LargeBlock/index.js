import React from 'react'
import {Container, Leftblock, ContentBlock} from './styles/largeBlock'
import{ Button } from '../../components/'

export default function largeBlock({largeBlock,bg,text,position,flex_d}) {
    return (
        <Container>
             {largeBlock.map((largeBlock)=>{
                  return(<>
                    <Leftblock text={text} flex_d={flex_d}>
                       <img src={`/images/${largeBlock.url}`} alt="img"></img>
                         <ContentBlock position={position}>
                            <h2>{largeBlock.heading}</h2>
                                <span>{largeBlock.discriotion}</span>
                              <Button bg = {bg} text={text} />
                         </ContentBlock>  
                 </Leftblock>
                 </>
                  )})}
             
        </Container>
    )
}