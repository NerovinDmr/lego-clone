import React from 'react'
import{ Container, SliderItem, SliderImageBlock } from './styles/carousel'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "../../components/"

export default function Carousel({carusel}) {
    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll:1,
        responsive: [
            {
              breakpoint: 1024,
                settings: {
                  slidesToShow:3,
                  slidesToScroll: 1,
                  dots: true
               } 
            }
          ]
      };
    return (
        <Container>
          <h2>Рекомендованные Наборы </h2>
        <Slider {...settings}>
         {carusel.map((carusel)=>{
             return(    
                <SliderItem>
                    <SliderImageBlock>
                      <img src= {`/images/${carusel.url}`} />
                   </SliderImageBlock>
                    <span>{carusel.text}</span>
                    <Button bg={'rgb(0, 109, 183)'} text ={'#fff'}></Button>
                </SliderItem>                 
             )
         })}    
        </Slider>
      </Container>
    )
}
