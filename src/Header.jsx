import React from 'react'
import logo from './Logo.png';
import { PlusCircle } from 'react-bootstrap-icons'
import { Bell } from 'react-bootstrap-icons'
import { CCircle } from 'react-bootstrap-icons'

const Header = () => {
  return (
    <div className='row'>
      <div className='col-3 logo'>
        <img src={logo} alt='Sample Work Logo'/>
      </div>
      <div className='col-6'>Green Building Monitoring</div>
      <div className='col-3 row'>
        <div className='col 4'><PlusCircle /></div>
        <div className='col 4'><Bell /></div>
        <div className='col 4'><CCircle /></div>
      </div>
    </div>
  )
}

export default Header