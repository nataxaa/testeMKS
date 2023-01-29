import styled from "styled-components";

export const Container = styled.div`

display:grid ;
grid-template-columns: 1fr 1fr 1fr 1fr ;
gap:22px;
padding-inline:3rem;
margin:0 auto ;

@media (max-width: 1024px) {
    grid-template-columns:1fr 1fr ;
  }
  @media (max-width: 720px) {
    grid-template-columns:1fr ;
    p.price{
        font-size:12px ;
    }
  }
div.cart{
    display:flex ;
    flex-direction:column ;
    background-color:var(--background-color) ;
    box-shadow:0px 2px 8px rgba(0, 0, 0, 0.135216) ;
    margin-bottom:2rem ;
    img{
        margin:0 auto ;
        width:14rem ;
        height:14rem ;
    }
}

div.name-area{
    display:flex ;
    align-items:center ;
    justify-content:space-between ;
    height:4rem ;
    padding:15px 20px ;
    p.name{
        font-size:16px ;
        width:8rem ;
        color:var(--cart-color-text) ;
    }
    p.price{
        background-color:var(--cart-color-text) ;
        padding:4px 6px ;
        border-radius:5px ;
        color:var(--cart-color) ;
        font-weight:bold ;
    }
}
p.description{
    padding-inline:10px ;
    height:4rem ;
    color:var(--cart-color-text) ;
    font-size:12px ;
}
button.button{
    position: relative;
    background-color:var(--header-color) ;
    border-radius: 0 0 5px 5px ;
    padding:8px 0 ;
    font-size:16px ;
    font-weight:bold ;
    font-family:'Montserrat' ;
    border:none ;
    color:#FFF ;
    cursor: pointer;
    :hover{
        opacity:0.9 ;
    }
    .add{
        font-size:20px ;
        position: relative;
        top:4px ;
        right:8px ;
    }
}



`