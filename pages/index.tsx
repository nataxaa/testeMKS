import { Box, Button, Flex, Heading, Img, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import Header from '../components/Header/header'
import Sidebar from '../components/Sidebar/sidebar'
import { api } from './api/hello'
import { useSelector, useDispatch } from "react-redux";
import type {RootState } from '../app'
import { addToCart } from '../redux/cartSlice'
import { Container } from './style'
import {AiOutlineFolderAdd} from 'react-icons/ai'

interface productsProps{
  id:number
  name:string;
  brand: string;
  photo: string;
  description: string;
  price: string;
}

interface item1Props{
    id:number;
    name:string;
    photo: string;
    price: number;
    qtd:number;
}


export default function Home(){

  const {side} = useSelector((state: RootState) => state.allCart)
  const dispatch = useDispatch();
  const [products, setProducts] = useState<productsProps[]>([])
  const [item1, setItem1] = useState<item1Props[]>([])  
  const [item, setItem] = useState<item1Props[]>([])  

  useEffect(() => {
    (async ()=>{
        const response = await api.get('products?page=1&rows=8&sortBy=id&orderBy=DESC');
        setProducts(response.data.products)
      })();
    },[])

    function handleAddProduct(id:number, name:string, photo:string, price: string, qtd: number){
        
        const p = parseInt(price)

        item1.push({id:id, name:name, photo:photo, price:p , qtd: qtd})
        //item1.push(copy[0])
        item1.map(props=>(dispatch(addToCart(props))))
        
        const item = item1.pop()
        console.log(item1, 2)
        console.log(item, 1)
    } 

  return(
    <>
    {side && (
      <Sidebar/>
    )}
      <Header/>
    <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
      </Head>
    

      <Container>
       {true && (
        products.map(props=>(
          <div className='cart'>
            <img src={props.photo}/>
            <div className='name-area'>
              <p className='name'>{props.name}</p>
              <p className='price'>R$ {props.price}</p>
            </div>
            <p className='description'>{props.description}</p>
            <button className='button' onClick={()=>handleAddProduct(props.id, props.name, props.photo,  props.price, 1)}>
              
                <AiOutlineFolderAdd className='add'/>
              COMPRAR
              
            </button>
          </div>
        ))
        )}
      </Container>
  </>
  )
}