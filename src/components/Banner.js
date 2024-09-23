import React from 'react'
import BannerImage from '../assets/Designer.png'

function Banner() {
  return (
    <div>
        <div>
            <img src={BannerImage} alt='Main Banner' className='w-full h-[700px]'/>
        </div>
    </div>
  )
}

export default Banner