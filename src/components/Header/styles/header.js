import styled from 'styled-components'


export const Container = styled.div`

`
export const UpHeader = styled.div`
 display:flex ;
 justify-content:space-around;
 margin:20px;
`
export const GameCenterButton = styled.div`
 display:flex ;
 background:rgb(171, 217, 255);
 padding:2px 8px;
 border-radius:3px;
 box-shadow:rgb(48 85 181 / 44%) 0px 1px 4px 0px;
 cursor: pointer;
 text-transform:uppercase;
 
 &:hover{
    background:white; 
 }
`
export const NewsLinks = styled.div`
display:flex;
font-size:14px;
a{
    padding:0 4px;
    
    color: #005eb8;
    cursor:pointer;
    
    &:hover{
        text-decoration-line: underline;
       
    }
}
`
export const AuthBlock = styled.div`
display:flex;
font-size:14px;
`
export const LoginButton = styled.div`
display:flex;
margin-right:10px;
p{
    padding-left:10px;
    padding-right:10px;
}
img{
    
}
`
export const VipBlock = styled.div`
display:flex;
text-transform: uppercase;

border-left:1px solid black;

img{
    width:25px;
    padding-right:5px;
    margin-left: 10px
    
}
`
// ******* Lower part
export const LowerHeader = styled.div`
justify-content:space-between;
background-color:rgb(255, 207, 0);
display:flex;
width:100%;
margin-top:20px;
align-items:center;
img{
    width:55px;
}
`
export const Menu  = styled.ul`

height:70px;
display:flex;
align-content:center;
align-items:center;
margin-left:230px;

    li{
        padding:10px;
        list-style:none;
        margin-left:20px;
        font-weight:500;
        font-size:14px;
        text-transform:uppercase;
        border-radius:3px;    
       &:hover{
        text-decoration-line: underline;
       }
       &:last-child{
         padding-left:25px;
         padding-right:25px;   
         background-color:white;
         color:#c71717;
         cursor: pointer;
         &:hover{
            background-color:black;
            color:white;
       }
    }
}    
`
export const RightMenu = styled.div`
display:flex;
align-items:center;
margin-right:230px;

`
export const Magnifier = styled.div`
display:flex;
justify-content:center;
background-color:white;
border-radius:50%;
width:40px;
height:40px;
img{
    width:15px;
}
`
export const Heart = styled.div`
display:flex;
margin-left:10px;

p{
    margin-left:5px;
}
svg{
    width:18px;
    height:18px;
}
`
export const Shop = styled.div`
    display:flex;
    margin-left:10px;
    svg{
    width:20px;
    height:20px;
}
`