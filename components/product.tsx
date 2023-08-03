import React from 'react';

function Product() {
    return (
        <div className='bg-white pt-6 shadow-2xl pb-4 rounded-2xl'>
                <img className='mx-auto w-[350px] h-[200px] object-contain' src="/football.webp" alt="" />
                <div className='mt-4 px-6'>
                    <div className='flex items-center justify-between text-[26px]'>
                        <h1>footbal</h1>
                        <h3>$399</h3>
                    </div>
                    <button className='bg-red-600 text-white py-4 px-12 block mx-auto hover:bg-red-800'>
                        Add to cart
                    </button>
                </div>
        </div>
    );
}

export default Product;