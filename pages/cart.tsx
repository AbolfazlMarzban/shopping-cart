import Navbar from '@/components/navbar';
import React from 'react';
import {useRecoilState} from "recoil"
import { cartState } from '@/atoms/cartState';
import CartList from '@/components/CartList';

function Cart() {
    const [cartItems, setCartItems] = useRecoilState(cartState)
    const totalPrice = () => {
        let total =0 
        cartItems.forEach((item:any) => total += (item.price * item.quantity))
        return total;
    }
    const createCheckoutSession = () => {

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto'>
                {cartItems.length <= 0 ? <h1 className='text-center text-4xl mt-32'>Your Cart Is Empty!</h1> : 
                    cartItems.map((item:any) => <CartList key={item.id} data={item}></CartList>)
                }
                {cartItems.length > 0 && (<div className='max-w-[800px] mx-auto mt-4'>
                    <h2 className='text-right text-3xl font-bold'>Total: ${totalPrice()}</h2>
                    <button
                        className='text-right bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800 rounded-xl' onClick={createCheckoutSession}>Checkout</button>
                </div>)}
            </div>
        </div>
    );
}

export default Cart;