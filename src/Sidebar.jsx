import React from 'react'
import { HouseDash, FilterSquare } from 'react-bootstrap-icons'

const SideBar = () => {
  return (
    <div className='col sidebar'>
      <div className='row h-50'>
        <div className='row'><span className='col-2'><HouseDash /></span>Home</div>
        <div className='row'><span className='col-2'><FilterSquare /></span> Dashboard</div>
        <div className='row'><span className='col-2'><FilterSquare /></span> Projects</div>
        <div className='row'><span className='col-2'><FilterSquare /></span> Tasks</div>
        <div className='row'><span className='col-2'><FilterSquare /></span> Reporting</div>
        <div className='row'><span className='col-2'><FilterSquare /></span> Users</div>
      </div>
      <div className='row h-50'>
        <div className='row'><span className='col-2'><HouseDash /></span> Support</div>
        <div className='row'><span className='col-2'><FilterSquare /></span> Settings</div>
      </div>
    </div>
  )
}

export default SideBar