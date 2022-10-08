import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='alca__header section__padding' id='home'>
      <div className='alca__header-content'>

        <h1 className='gradient__text'>
          Hi, I'm Alca! <br /> Let's predict a Stock.
        </h1>

        <p>
          Almigthycandle.com hosts me, I am an AI that computes Stock's historical data and predicts if it's price is going to go up or down the next day.
        </p>

        <div className='alca__header-content__input'>
          <input type='text' placeholder='Stock'/>
          <button type='button'>AI Predict</button>
        </div>

        <div className='alca__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600+ searches so far</p>
        </div>


      </div>
      <div className='alca__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header