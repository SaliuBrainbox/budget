import React from 'react'
import { Outlet } from 'react-router-dom'

const ParentAuth = () => {
  return (
    <div>
        <h2>Authentication</h2>
        <Outlet></Outlet>
    </div>
  )
}

export default ParentAuth