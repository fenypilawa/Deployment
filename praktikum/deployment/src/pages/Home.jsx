import React from 'react'
import image from '../Assets/2010.jpg'

const Home = () => {
  return (
    <div>
      <div className='d-flex justify-content-center mt-4 h2 '>
        Feny Pillawa
      </div>
      <div className='d-flex justify-content-center mt-4 h2'>
        <img src={image} alt="image"  style={{maxWidth:"300px"}}/>
      </div>
      <div className='d-flex justify-content-center mt-4 h2'>
        <p><a href="https://github.com/fenypilawa">My Study Source</a></p>
      </div>
    </div>
  )
}

export default Home