import React from 'react'
import './SocialProfile.css'
import github from '../../assets/images/github.png'
import insta from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import logo from '../../assets/images/logo.png'
const SocialProfile = () => {
  return (
    <>
     <footer className="socialProfilesContainer relative">
        <div className='BlurBackgroundContainer position-horizontally-center absolute'></div>
        <div className='flex justify-center items-center gap-3'>
            <div className='socialIcons pointer'>
                <img src={github} alt="" />
            </div>
            <div className='socialIcons pointer'>
                <img src={insta} alt="" />
            </div>
            <div className='socialIcons pointer'>
                <img src={linkedin} alt="" />
            </div>
        </div>
        <div className='footerLogoContainer'>
            <img src={logo} alt="" />
        </div>
     </footer> 
    </>
  )
}

export default SocialProfile
