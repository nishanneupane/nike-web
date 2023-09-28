import React from 'react'
import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from '../constants'


const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={"130px"} height={"29px"} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
          {
            navLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                  {item.label}
                </a>
              </li>
            ))
          }


        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="hamburger" width={"25px"} height={"25px"} className='text-black cursor-pointer' />
        </div>
      </nav>
    </header>
  )
}

export default Nav