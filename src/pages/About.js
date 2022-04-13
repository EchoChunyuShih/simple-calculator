import React from 'react'

const About = () => {
  return (
    <>
      <h1 className='text-6xl mb-4'>Calculator</h1>
      <p className='mb-4 text-2xl font-light'>
        A simple React calculator practice with
        <a href='https://www.youtube.com/watch?v=DgRrrOt0Vr8'>
          {' '}
          The Perfect Beginner React Project <br />
        </a>
        by <strong>Web Dev Simplified</strong>.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>Source Code: {''}</p>
    </>
  )
}

export default About
