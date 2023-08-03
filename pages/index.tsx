import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar"
import Product from '@/components/product'
import data from "../data.json"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <section className='container mx-auto'>
      <h1 className='text-4xl mt-4 text-center'>Our Products</h1>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
        {data.map(product => <Product product={product}></Product>)}
      </div>
    </section>
    </>
  )
}
