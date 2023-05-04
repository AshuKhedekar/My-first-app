import '@/styles/globals.css'
import { Header }from '@/components/Header';
import {Menu }from '@/components/Menu';
import {Footer}  from '@/components/Footer';
export default function App({ Component, pageProps }) {
  return ( <div className='text-center'> 
    <Header/>
    <Menu/>
    <div style={{position:'absolute',top:'276px', left:'500px'}}>
  <Component {...pageProps} />
  </div>
  <Footer/>
  </div>
  )
}
