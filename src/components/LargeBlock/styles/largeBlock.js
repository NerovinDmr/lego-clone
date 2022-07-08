import styled from 'styled-components'

export const Container = styled.div`
display:flex;
justify-content:center;
`
export const Leftblock = styled.div`
flex-direction:${props=>props.flex_d};
display:flex;  
justify-content:space-between;
position: relative;
margin-top:60px;
margin-right:20px;
color:${props=>props.text};  
img{
    width:100%;
    height:90%;
}
`

export const ContentBlock = styled.div`
position: ${props=>props.position};
display:flex;
flex-direction:column;
top:7%;
text-align:center;
align-items:center;
span{
 margin:20px;
}
`