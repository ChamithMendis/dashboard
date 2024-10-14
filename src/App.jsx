import React from 'react'
import './Header'
import Header from './Header'
import SideBar from './Sidebar'
import Content from './Content'

const App = () => {
  return (
    <div>
      <div className='row header'>  {/*border border-primary border-3*/}
        <Header />
      </div>
      <div className='row bottom'> {/*border border-warning border-3*/}
        <div className='col-2'>
            <SideBar />
          </div>
          <div className='col-10'>
            <Content />
          </div>
      </div>
    </div>
  )
}

export default App;