import React from 'react'
import Link from 'next/link'
export const Menu = () => {
  return (
  <div className='nav'>
    <img alt='image not supported' src='logo.jpg'/>
         <div><h1>We Do.</h1> 
         <p>Communicate Collaborate Create.</p>
         </div>
         
    
    <ul className='ul'>
     <li>
      <Link  href="/home">Home</Link>
      </li>
     <li>
      <Link href="/about">About</Link>
     </li>
     <li>
      <Link href="/contact">Contact</Link>
      </li>
      </ul>
    </div> 
  )
}
