import styled from 'styled-components'
export const ButtonLernMore = styled.div`
display: inline-block;
width:180px;
background-color:${Props=>Props.bg};
color:${Props=>Props.text};
border-radius:3px;
padding:14px 24px;
font-size:18px;
text-align:center;
cursor: pointer;
&:hover{
    background-color:#fff;
    color:black;
}
 svg{
    vertical-align:bottom;
    padding-bottom:1.5px;
 }

`

 