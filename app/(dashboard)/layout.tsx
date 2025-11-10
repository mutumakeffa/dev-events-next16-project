import React from 'react'

const Layout = ({children} : {children : React.ReactNode}) => {
  // Note: Pageview tracking is handled automatically by PostHogPageView component
  return (
    <div>
        <p>Dashboard Navbar layout</p>
        {children}

    </div>
  )
}

export default Layout