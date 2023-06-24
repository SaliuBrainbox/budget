import React, {useState} from 'react'
import { Button, FormControl, TextField } from '@mui/material'
import './auth.css'
import { signIn } from '../firebase/firebase'
import { useDispatch } from 'react-redux'
import { setCurrent, setCurrentUser, setUserID } from '../redux_store/user/userAction'

const AuthLogin = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        try {
            const {user} = await signIn(email, password)
            dispatch(setCurrentUser(user))
            dispatch(setCurrent(true))
            dispatch(setUserID(user.uid))
            alert('logged in')
        } catch (error) {
            alert('login failed')
        }
    }

    
  return (
    <div className='auth_container'>
      <h2>login to enter</h2>
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
          <Button variant='contained' onClick={login}>login</Button>
    </div>
  )
}

export default AuthLogin