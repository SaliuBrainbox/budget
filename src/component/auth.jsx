import { Box, Button, FormControl, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { signUp, userDatabase } from '../firebase/firebase'
import './auth.css'
import { useState } from 'react'
import { setCurrent, setCurrentUser, setUserID} from '../redux_store/user/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { user, person } from '../redux_store/user/userSelector'
import { Form, Link, redirect } from 'react-router-dom'
import { createName, setData } from '../helper/helper'



const Auth = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(person)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  


  const create = async (e) => {
    e.preventDefault();
    try {
      const {user} = await signUp(email, password)
      await userDatabase(user, {displayName})
      dispatch(setCurrentUser(user))
      dispatch(setCurrent(true))
      alert('successful')
      console.log(user.uid)
      dispatch(setUserID(user.uid))
      setData(user.uid, displayName)
    } catch (error) {
      alert('account unable to be created', error.message)
    }
  } 

  

  const style = {
    link : {
      textDecoration: 'none'
    }
  }


  return (
    <div className='auth_container'>
      <h2>create an account to join</h2>
       <Form onSubmit={create}>
       <div className='auth_input'>
            <h3>Name :</h3>
            <FormControl>
              <TextField placeholder='enter username' label='username' name='displayName' required onChange={(e) => setDisplayName(e.target.value)}></TextField>
            </FormControl>
          </div>
          <div className='auth_input'>
            <h3>Email :</h3>
            <FormControl>
              <TextField type='email' placeholder='enter email' label='email' required onChange={(e) => setEmail(e.target.value)}></TextField>
            </FormControl>
          </div>
          <div className='auth_input'>
            <h3>Password :</h3>
            <FormControl>
              <TextField type='password' placeholder='enter password' label='password' required onChange={(e) => setPassword(e.target.value)}></TextField>
            </FormControl>
          </div>
          <div className='auth_input'>
            <h3>Confirm Password :</h3>
            <FormControl>
              <TextField type='password' placeholder='enter password' label='confirm password' required></TextField>
            </FormControl>
          </div>
          
          <Button variant='contained' type='submit'>create account</Button>

       </Form>
         
          <div>
            <small>already have an account? <Link to={'login'} style={style.link}> Login </Link> </small>
          </div>
    
    </div>
  )
}

export default Auth