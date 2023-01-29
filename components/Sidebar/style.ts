import styled from "styled-components";


export const Container = styled.div`

    width:23rem ;
    background-color:var(--header-color) ;
    position:absolute;
    right:0 ;
    z-index:1 ;
    box-shadow:-5px 0px 6px rgba(0, 0, 0, 0.13);

    div.title-sidebar{
        display:flex ;
        align-items:center ;
        justify-content:space-around ;
        h1{
            margin-top:1rem ;
            width:10rem ;
            font-size:25px ;
            color:#FFF ;
        }
        button.button-header{
            color:#FFF;
            background-color:var(--button-close-color) ;
            padding:7px 10px ;
            border-radius:1000px ;
            border:none ;
            cursor:pointer ;
            transition:0.2s ;
            :hover{
                color:#FFF ;
                background-color:var(--border-qtd-color) ;
            }

        }
    }

    div.cart-area{
        margin-top:1rem ;
        display:flex ;
        flex-direction:column ;
        gap:10px;
        padding:25px ;
        margin-bottom:5rem ;
        

        p.cart-null{
            margin:0 auto ;
            font-weight:bold ;
            color:var(--span-red);
            font-size:20px ;
        }
    }

    div.cart-product{
        display:flex ;
        background-color:var(--cart-color) ;
        color:var(--cart-color-text);
        padding:12px ;
        border-radius:5px ;
        box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
        gap:15px;
        align-items:center ;
        button.remove-product{
            background-color:var(--button-close-color) ;
            color: var(--background-color);
            position:absolute ;
            size:4px ;
            padding:0 4px 1.3px ;
            border-radius:1000px ;
            right:1.2rem ;
            margin-top:-5rem ;
            cursor: pointer;
            border:none;
            transition:0.2s ;
            :hover{
                color:#FFF ;
                background-color:var(--border-qtd-color) ;
            }
        }
        img{
            width:55px ;
            height:60px ;
        }
        p{
            width:8rem ;
            font-size:12px ;
        }

        div.qtd-area{
            display:flex ;
            flex-direction:column ;
            
            p{
                font-size: 10px ;
                width:fit-content ;
            }

            div.sub-qtd-area{
                display:flex ;
                align-items:center ;
                width:fit-content ;
                .link-icon{
                    position:relative ;
                    top:2px ;
                }
                button.remove{
                    font-size:13px ;
                    align-items:center ;
                    background:none ;
                    border:1px solid var(--border-qtd-color);
                    border-radius: 5px 0 0 5px ;
                    padding:0 2px ;
                    cursor:pointer ;
                    :hover{
                        opacity:0.8 ;
                        background-color:var(--border-qtd-color) ;
                    }
                }
                button.add{
                    font-size:13px ;
                    background:none ;
                    border:1px solid var(--border-qtd-color);
                    border-radius: 0 5px 5px 0 ;
                    padding: 0 2px ;
                    cursor:pointer ;
                    :hover{
                        opacity:0.8 ;
                        background-color:var(--border-qtd-color) ;
                    }
                }
                p{
                    font-size:13px ;
                    width:fit-content ;
                    padding-inline:3px;
                    border:1px solid var(--border-qtd-color);
                }
            }
        }
        span.price{
            font-size:14px ;
            font-weight:bold ;
            color:#000 ;
        }
    }

    div.total-area{
        display:flex ;
        justify-content:space-between ;
        position:absolute ;
        width:80%;
        padding-inline:20px;
        bottom:4rem;
       
        p{
            font-size:20px ;
            color:var(--button-color);
            font-weight:bold ;
        }
    }
    button.button-footer{
        color:var(--button-color) ;
        position:absolute ;
        bottom: 0 ;
        width:100% ;
        font-size:20px ;
        border-radius: 0 ;
        background-color: var(--button-close-color) ;
        height:60px ;
        cursor: pointer;
        border:none ;
        transition:0.2s ;
        :hover{
            background-color:var(--border-qtd-color); 
        }
        
    }
`