import React from 'react'
import Sidebar from '../../ components/sidebar/Sidebar'
import "./Home.css"
import Navbar from '../../ components/navbar/Navbar'

export default function Home() {
  return (
    <div className='home'>
     <Sidebar/>
     <div className="homeContainer"> 
     <Navbar/>
     home container</div>
    </div>
  )
}
