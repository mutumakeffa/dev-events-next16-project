import React from 'react'

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        <p>Dashboard Navbar layout</p>
        {children}
        
    </div>
  )
}

export default Layout