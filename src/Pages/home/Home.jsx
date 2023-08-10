import React from 'react'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'
import Post from '../../post/Post'
import './Home.css'
import Footer from '../../footer/Footer'
export default function Home() {
  return (
    <div>
      <Header/>
      <div className='home'>
        <Post/>
        <Sidebar/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  )
}
