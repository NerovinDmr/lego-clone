import styled from 'styled-components'

export const Container = styled.div`
position: relative;
width:80%;
margin:0 auto;
    img{
        width:100%;
    }
    
`
export const HarryLogos = styled.div`
display:flex;
margin-bottom:20px;
    img{
        width:30%;
        height:30%;  
        padding:10px;     
    }
    img:last-child{
        width:20%;
    }
`
export const HeroBannerBlock = styled.div`
position: absolute;
display:flex;
flex-direction:column;
width:30%;
top:20%;
left:5%;
color:#fff;
font-size:32px;

 span{
     margin-bottom:20px;
     font-weight:900;
 }
 p{
     font-size:19px;
     color:#000;
     margin-bottom:20px;
 }
`