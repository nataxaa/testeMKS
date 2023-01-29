import {createSlice} from '@reduxjs/toolkit'
import { useEffect, useState } from 'react';
import { api } from '../pages/api/hello';


interface cartProps{
    id:number;
    name:string;
    price:number;
    qtd: number;
    photo: string;
}


export interface ICart {
  value: number;
  cart: cartProps[];
  cart1: cartProps[];
  side:boolean;
  totalPrice: number;
  totalProducts: number;
}

const initialState: ICart = {
    value: 0,
    cart: [] ,
    cart1: [],
    side: false,
    totalPrice: 0,
    totalProducts: 0,
  };
  
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
      addToCart: (state, action) => {
       let find = state.cart.findIndex((item:cartProps) => item.id == action.payload.id);       
       const auxQtd = parseInt(action.payload.price)
       if(find>=0){
          state.cart[find] = {
            ...state.cart[find],
            qtd: state.cart[find].qtd + 1 
          }
       }else{ // adicionar elemento que nao esta no cart
        let temp = action.payload
        state.cart.push(temp)
      }
        state.totalProducts += 1
        state.totalPrice += auxQtd
      },

      removeToCart:(state, action)=>{
        let find = state.cart.findIndex((item:cartProps) => item.id == action.payload.id);
        const auxQtd = parseInt(action.payload.price)
        if(state.cart[find].qtd > 1){
          state.cart[find].qtd -= 1
        }else if(state.cart[find].qtd == 1){
          const nextCart = state.cart.filter(props=> props.id !== action.payload.id)
          state.cart = nextCart
        }
        state.totalProducts -= 1
        state.totalPrice -= auxQtd
      },

      removeCompleteToCart:(state, action)=>{
        state.cart.map(props=>{
          if(props.id == action.payload.id){
            const nextCart = state.cart.filter(filter=>filter.id !== props.id)
            state.cart = nextCart
          }
        })
        const auxQtd = parseInt(action.payload.price)
        state.totalPrice -= auxQtd*action.payload.qtd
        state.totalProducts -= action.payload.qtd 

      },

      SideBoolean:(state)=>{
        if(state.side){
            state.side=false
        }else{
            state.side=true
        }
    }
    }
})

export const {
  addToCart,
  SideBoolean,
  removeToCart,
  removeCompleteToCart,
  } = cartSlice.actions;

  export default cartSlice.reducer;