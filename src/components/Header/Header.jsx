import React, { useState } from 'react'
import './Header.css';
import Logo from '../../assets/images/logo.png'
import hamburger from '../../assets/images/bars.png'
import { Link } from 'react-scroll';
const Header = () => {
  const mobileSize = window.innerWidth <=1024 ? true : false
  const [shownav,setShowNav] = useState(false)
  return (
    <header className='p-3 ml-1'>
            <div className='flex justify-between items-center'>
            <div className='logoContainer'><img src={Logo} alt='logo' /></div>
                <div className='headerPagesContainer navigationBar'>
                <ul className={`text-white ${shownav && mobileSize ? 'flex mobileNavbar': 'flex desktopNav'}`}>
                      <Link 
                      to='heroSection'
                      spy={true}
                      smooth={true}
                      >
                      <li onClick={()=>setShowNav(false)}>
                      Home
                      </li>
                      </Link>
                      <Link 
                      to='programs'
                      spy={true}
                      smooth={true}>
                    <li onClick={()=>setShowNav(false)}>
                        Programs
                      </li>
                      </Link>
                      <Link 
                      to='whyUs'
                      spy={true}
                      smooth={true}
                      >
                    <li onClick={()=>setShowNav(false)}>
                      Why us
                      </li>
                      </Link>
                      <Link 
                      to='plans'
                      spy={true}
                      smooth={true}
                      >
                      <li onClick={()=>setShowNav(false)}>
                        Plans
                      </li>
                      </Link>
                      <Link 
                      to='testimonial'
                      spy={true}
                      smooth={true}
                      >
                    <li onClick={()=>setShowNav(false)}>
                      Testimonials
                      </li>
                      </Link>
                </ul>
                </div>
                <div onClick={()=>setShowNav(true)} className='hamburgerMenu pointer'>
                  <img className='h-100' src={hamburger} alt="" />
                </div>
            </div>
      </header>
  )
}

export default Header
