import React from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'
import Featuredhostels from './Featuredhostels'
import '../Styles/Home.css'
import Carosal from './Carosal'
import { Destinationhome } from './Destinationhome'
import NEWSimg from '../Assets/newsltter.svg'
import CheckInForm from './Checkin'
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
        <CheckInForm/>
        <br/>
        
        <br/>
         <h2 className='ftdhostel'>FEATURED HOSTELS</h2>
        <Featuredhostels/>

        <br/>
       <Destinationhome/>
       <br/>

       <div className='newsletter'>
        <img className='imgnews' src={NEWSimg} alt=''/>
        <div className='newsword'>
        <h1>Subscribe to our newsletter</h1>
        <p>Receive updates about the latest launches, exclusive offers and more</p>
        <form className='formnews'>
        <input className='inputnews' type='email'placeholder='Enter your e-mail ID' ></input>
        <button className='btnnews' type='submit'>➡️</button>
        </form>
        </div>
       </div>
 <br/>
 <br/>
 <br/>
 <Footer/>
    </div>
  )
}
