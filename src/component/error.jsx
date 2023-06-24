import { Button } from '@mui/material'
import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {

  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <div>
      Error
      <p> {error.message} </p>
      <p> {error.status} </p>
      <Button onClick= {() => navigate(-1)} > go bak</Button>
    </div>
  )
}

export default Error