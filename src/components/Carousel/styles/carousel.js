import styled from 'styled-components'

export const Container = styled.div`
width:70%;
margin:0 auto;
  h2{
    margin:25px;
  }   
`
export const SliderItem = styled.div`
display :flex;
flex-direction:column;
justify-content:space-space-around;
align-items:center;
align-content:center;
width: 450px;
height:450px;
text-align:center;
  span{
     display:block;
     margin-top:20px;
     margin-bottom:20px;
   }
`
export const SliderImageBlock = styled.div`
width: 250px;
height:250px;
border: 1px solid #515151;
margin:0 auto;
  img{
    padding:10px;
    width:100%;
    height:100%;    
  }
`
