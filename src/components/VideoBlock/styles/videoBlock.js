import styled from 'styled-components'

export const Container = styled.div`
   display:flex;
   justify-content:center;
  
`
export const VideoContainer = styled.div`
    
`
export const Video = styled.div`
position:relative;  
 video{
     width:100%;
     height:auto;
 }

`
export const VideoLeftBlock = styled.div`
display:flex;
width:500px;
height:190px;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
z-index:100;
font-size:20px;
position:absolute;
top:30%;
left:7%;
h2{
    font-size:34px;
}

`
