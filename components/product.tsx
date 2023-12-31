import React from 'react';
import {useRecoilState} from "recoil"
import { cartState } from '@/atoms/cartState';
import { toast } from "react-hot-toast"

function Product({product}:any) {

    const [cartItems, setCartItems] = useRecoilState(cartState)

    const addItemstoCart = () => {
        if(cartItems.findIndex((pro : any) => pro.id == product.id) == -1){
            setCartItems((prevState) : any => [...prevState, product])
        } else{
            setCartItems((prevState: any) => {
                return prevState.map((item : any) => {
                    return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                })
            })
        }
        toast(`${product.name} has been added to the cart!`)
    }

    return (
        <div className='bg-white pt-6 shadow-2xl pb-4 rounded-2xl'>
                <img className='mx-auto w-[350px] h-[200px] object-contain' src={product.image} alt="" />
                <div className='mt-4 px-6'>
                    <div className='flex items-center justify-between text-[26px]'>
                        <h1>{product.name}</h1>
                        <h3>${product.price}</h3>
                    </div>
                    <button className='bg-red-600 text-white py-4 px-12 block rounded-xl mx-auto hover:bg-red-800' onClick={addItemstoCart}>
                        Add to cart
                    </button>
                </div>
        </div>
    );
}

export default Product;