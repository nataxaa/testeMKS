import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app";
import { SideBoolean, removeToCart, removeCompleteToCart, addToCart } from "../../redux/cartSlice";
import { Container } from "./style";
import {GrFormSubtract, GrFormAdd} from 'react-icons/gr'

export default function Sidebar(){

    const {totalProducts, cart, totalPrice} = useSelector((state: RootState) => state.allCart)
    const dispatch = useDispatch();

    function toogleSidebar(){
        dispatch(SideBoolean())
    }

    interface itemCartProps{
        id:number
        name:string;
        photo: string;
        price: number;
        qtd:number;
    }

    return(
        <Container>
            <div className="title-sidebar">
                <h1>Carrinho de Compras</h1>
                <button className="button-header" onClick={toogleSidebar}>X</button>
            </div>

            <div className="cart-area">
                {!totalProducts &&(
                <p className="cart-null" >Carrinho Vazio.</p>
                )}
                {cart.map((props:itemCartProps)=>(
                    <div key={props.id} className="cart-product">
                        <button 
                        className="remove-product"
                        onClick={()=>dispatch(removeCompleteToCart(props))}
                        >
                            x
                        </button>
                        <img src={props?.photo}/>
                        <p>{props.name}</p>
                        <div className="qtd-area">
                            <p>Qtd:</p>
                            <div className="sub-qtd-area">
                                <button className="remove" onClick={()=>dispatch(removeToCart(props))}>
                                    <GrFormSubtract className="link-icon"/>
                                </button>
                                <p>{props?.qtd}</p>
                                <button className="add"onClick={()=>dispatch(addToCart(props))}>
                                    <GrFormAdd className="link-icon"/>
                                </button>
                            </div>
                        </div>
                            <span className="price">
                                R${props?.price}
                            </span>
                    </div>
                ))}
            </div>
                    <div className="total-area">
                        <p>Total:</p>
                        <p>R${totalPrice}</p>
                    </div>
                    <button className="button-footer">
                       Finalizar Comprar
                    </button>   
    </Container>
    )
}