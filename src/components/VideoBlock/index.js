import React from 'react'
import {Container,VideoContainer,Video,VideoLeftBlock} from './styles/videoBlock'
import {Button} from '../../components/'


export default function VideoBlock () {
return (
    <Container>
            <VideoContainer>
                <Video>
                    <video autoPlay="autoPlay" preload="auto" muted={true} loop="loop" >
                        <source src="/videos/frontvideo.mp4" type="video/mp4"/>
                    </video>
                      <VideoLeftBlock>
                          <h2>Создавайте правила, чтобы нарушать их</h2>
                          <span>Откройте мир Rebuild the World</span>
                        
                        <Button bg = {'black'} text={'white'}/>
                        
                    </VideoLeftBlock>
                </Video>
            </VideoContainer>
        </Container>
)
};
 