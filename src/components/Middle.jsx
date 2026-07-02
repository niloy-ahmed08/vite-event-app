import React from 'react'
import imgsrcs from '../assets/custom.png'
import Flex from './Flex'
import ScrollVelocity from './ScrollVelocity/ScrollVelocity'

const Middle = () => {
  return (
    <div className='bg-[#734BDF] py-6 text-white leading-[29px] font-bold'>

      <ScrollVelocity
      
        texts={['*Latest Updates  * New Announcements * Workshop Alerts  * Event Countdown  * Live Notices ']} 
  velocity={100}
  className="custom-scroll-text"
  numCopies={6}
  damping={50}
  stiffness={400}
      
      />

    </div>
  )
}

export default Middle
