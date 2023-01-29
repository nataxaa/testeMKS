import {FaShoppingCart} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app'
import { SideBoolean } from '../../redux/cartSlice'
import { Container } from './style'

export default function Header(){
    const {totalProducts} = useSelector((state: RootState) => state.allCart)
    const dispatch = useDispatch();

    function toogleSidebar(){
        dispatch(SideBoolean())
    }

    return(
        <Container>
            <div className="logo">
                <h1>MKS</h1> 
                <span >SISTEMAS</span>
            </div>

            <button title='button-test' onClick={toogleSidebar}>
                <FaShoppingCart fontSize={'20px'}/>
                <p >{totalProducts}</p>
            </button>
        </Container>
    )
}