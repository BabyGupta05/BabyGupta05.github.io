import React from 'react'
import Social from './Social';
import './home.css'
import Data from './Data';
import ScrollDown from './ScrollDown';
const Home = () => {
  return (
   <section className="home section" id="home">
    <div className="home__container container grid">
        <div className="home__content grid">
            <Social/>
            <div className="home__img home-img"></div>
            <Data/>
        </div>
        <ScrollDown/>
    </div>
   </section>
  )
}

export default Home;