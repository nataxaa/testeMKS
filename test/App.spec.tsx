import {render, screen} from '@testing-library/react'
import Home from '../pages'
import {Provider} from 'react-redux'
import {store} from '../app/index'
import "@testing-library/jest-dom"
import {FaShoppingCart} from 'react-icons/fa'

describe("MKSteste", ()=>{
    it("sholder render", ()=>{
        render(
            <Provider store={store}>
                <Home/>
            </Provider>
        )
        expect(screen.getByText("MKS")).toBeInTheDocument()
    })

    it("render shooping cart", ()=>{
        render(
            <Provider store={store}>
                <Home/>
            </Provider>
        )
        expect(screen.getByTitle("button-test")).toBeInTheDocument()
    })
})