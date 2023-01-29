import styled from "styled-components";

export const Container = styled.header`

background-color: var(--header-color) ;
display:flex ;
justify-content:space-between ;
padding-inline: 80px;
height:5rem ;
margin-bottom:2rem ;
align-items:center ;

  @media (max-width: 1024px) {
    padding-inline: 30px;
  }
  @media (max-width: 720px) {
    padding-inline:30px;
  }
div.logo{
    color: var(--background-color);
    display:flex ;
    align-items:center ;
    gap:0.4rem
}

p{
    font-size:17px ;
    font-weight:bold ;
}

button{
    background-color:var(--button-color) ;
    color:#000000;
    display:flex ;
    align-items:center ;
    gap:20px;
    height:fit-content ;
    padding:7px 15px ;
    border-radius:5px ;
    transition:0.2s ;
    border:none ;
    cursor:pointer ;
    :hover{   
        opacity:0.9 ;
    }
}

h1{
    font-size: 2.5rem ;
    font-weight:bold ;
}
span{
    margin-top:15px ;
}

`

