import React from 'react'
import './Home.css'
import Navbar from './Navbar'

function Home() {
    return (
        <div className="home">
            <Navbar />
            <img src="base/Group1.png"
            srcSet="
            base/Group13.jpg 950w,
            base/Group11.jpg 1330w,
            base/Group1.png 1400w"
            alt=""/>
            <h1>this is <b>paras</b></h1>
            <small className="home__tagOne">self made self taught</small>
            <small className="home__tagTwo">web designer & developer</small>
        </div>
    )
}

export default Home
