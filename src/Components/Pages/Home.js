import React from 'react'
import Navbar from './Navbar'
import Featuredhostels from './Featuredhostels'
import '../Styles/Home.css'
import Carosal from './Carosal'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <br/>
        <br/>
        <div className='stbar'>
            <h1 className='h1bar'> The SleepSafari commune membership program is now online</h1>
            <button className='btn1member'>Explore</button>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            <Carosal/>
        </div>
        <br/>
        <br/>
        <br/>
         <h2 className='ftdhostel'>FEATURED HOSTELS</h2>
        <Featuredhostels/>
    </div>
  )
}
