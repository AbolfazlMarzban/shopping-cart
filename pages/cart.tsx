import Navbar from '@/components/navbar';
import React from 'react';
import {useRecoilState} from "recoil"
import { cartState } from '@/atoms/cartState';

function Cart() {
    const [cartItems, setCartItems] = useRecoilState(cartState)

    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto'>
                {cartItems.length <= 0 ? <h1 className='text-center text-4xl mt-32'>Your Cart Is Empty!</h1> : 
                    cartItems.map((item:any) => <CartList key={item.id} data={item}></CartList>)
                }
            </div>
        </div>
    );
}

export default Cart;