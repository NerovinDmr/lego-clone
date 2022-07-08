import React from 'react'
import {quickLinks} from '../assets/quikLinks.json'
import {carusel} from '../assets/carusel.json'
import {largeBlock, SecondLargeBlock, heroBlock,secondheroBlock} from '../assets/largeBlock.json'
import {VideoBlock, QuickLinksBlock,LargeBlock, Carousel, HeroBanner} from '../components/'

function Home() {
    return (
        <>
          <VideoBlock/>
          <QuickLinksBlock quickLinks = {quickLinks}/>
          <LargeBlock 
            largeBlock = {largeBlock} 
            bg ={'transparent'} text={'#fff'}
            position={'absolute'} flex_d={"row"}
            />
            
          <Carousel carusel = {carusel}/>
          <HeroBanner heroBlock = {heroBlock}/>
          <LargeBlock 
            largeBlock = {SecondLargeBlock} 
            bg ={'transparent'} text = {'#000'}
            position={'static'}flex_d={"column"} />        
        <HeroBanner heroBlock={secondheroBlock}/> 
       
       </> 
       
    )
}

export default Home
