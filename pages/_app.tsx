import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
      <Toaster position='top-center'></Toaster>
    <Component {...pageProps} /></RecoilRoot> 
}
