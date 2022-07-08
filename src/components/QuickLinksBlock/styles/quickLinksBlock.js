import styled from 'styled-components'

 export const Container = styled.div`
margin-top:10px;
 display:flex;
 justify-content:center;
`
 export const QuikLinkItem = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 cursor: pointer;
 padding:10px;
 &:hover{
    text-decoration:underline;
    color:rgb(171,217,255);
 }
`
 export const QuikLinkimage = styled.div`


`
 export const  QuikLinkText = styled.div`
text-align:center;
width:107px;
margin-top:10px;
`