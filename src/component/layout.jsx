import React, {useState} from 'react'
import { Outlet, Link } from 'react-router-dom'
import {Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, Toolbar, AppBar, Avatar, useMediaQuery, useTheme} from '@mui/material'
import HomeSharpIcon from '@mui/icons-material/HomeSharp'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';
import './layout.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../helper/helper';
import { logOut } from '../firebase/firebase';
import { setCurrent } from '../redux_store/user/userAction';
import { person, user, id } from '../redux_store/user/userSelector';




const Layout = () => {

  const currentUser = useSelector(person)
  const current = useSelector(user)
  const userID = useSelector(id)

  const name =  fetchData(userID)

  const [isOpen, setIsOpen] = useState(false)

  const theme = useTheme()
  const dispatch = useDispatch()

  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  const out = async () => {
    try{
      await logOut
      dispatch(setCurrent(false))
      alert('outted')
    } catch(error) {
      alert('cannot log out')
    }
  }
  
  console.log(current)

  const drawWidth = 240

  const style = {
    layout: {
      display: 'flex'
    },

    out:{
      width: '100%'
    },

    drawer: {
      width: drawWidth,
    },

    link: {
      textDecoration: 'none',
      textTransform: 'capitalize'
    },

    bar: {
      width: `calc(100% - ${drawWidth}px)`,
    },
  }

  return (
    <div style={style.layout}>
        
        {
          isMatch ? (
            <>
              <AppBar>
              <div className='toolbar' >
                    <Toolbar>
                      <Typography>welcome {name} </Typography>
                    </Toolbar>
                    <Toolbar>
                      <Typography onClick={out} >sign out</Typography>
                    </Toolbar>
                  </div>
              </AppBar>
              <Drawer style={style.drawer} anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
                  <div className='side' style={style.drawer}>
                    <div className='center'>
                      <p>navigate</p>
                    </div>
                  </div>
                  <List>
                    <Link to={'home'} style={style.link}>
                      <ListItem>
                        <ListItemText>
                          <Typography>
                            home
                          </Typography>
                        </ListItemText>
                        <ListItemIcon>
                          <HomeSharpIcon color='primary'></HomeSharpIcon>
                        </ListItemIcon>
                      </ListItem>
                    </Link>
                    <Link to={'budget'} style={style.link}>
                      <ListItem>
                        <ListItemText>
                          <Typography>
                            create budget
                          </Typography>
                        </ListItemText>
                        <ListItemIcon>
                          <AppRegistrationIcon color='primary'></AppRegistrationIcon>
                        </ListItemIcon>
                      </ListItem>
                    </Link>
                    <Link to={'spread'} style={style.link}>
                      <ListItem>
                        <ListItemText>
                          <Typography>
                            spend
                          </Typography>
                        </ListItemText>
                        <ListItemIcon>
                          <PaymentIcon color='primary'></PaymentIcon>
                        </ListItemIcon>
                      </ListItem>
                    </Link>
                    <Link to={'setting'} style={style.link}>
                      <ListItem>
                        <ListItemText>
                          <Typography>
                            settings
                          </Typography>
                        </ListItemText>
                        <ListItemIcon>
                          <SettingsIcon color='primary'></SettingsIcon>
                        </ListItemIcon>
                      </ListItem>
                    </Link>
                  </List>
              </Drawer>
            </>
          ) : (
            <div>
              <div className='layout_bar'>
                <AppBar style={style.bar}>
                  <div className='toolbar' >
                    <Toolbar>
                      <Typography>welcome {name} </Typography>
                    </Toolbar>
                    <Toolbar>
                      <Typography onClick={out} >sign out</Typography>
                    </Toolbar>
                  </div>
                </AppBar>
              </div>

              <div className='layout_drawer'>
                <Drawer style={style.drawer} variant='permanent' anchor='left'>
                  <div className='side' style={style.drawer}>
                    <div className='center'>
                      <p>navigate</p>
                    </div>
                  </div>
                  <List>
                    <Link to={'home'} style={style.link}>
                      <ListItem>
                        <ListItemText>
                          <Typography>
                            home
                          </Typography>
                        </ListItemText>
                        <ListItemIcon>
                          <HomeSharpIcon color='primary'></HomeSharpIcon>
                        </ListItemIcon>
                      </ListItem>
                    </Link>
                    <Link to={'budget'} style={style.link}>
                      <ListItem>
                        <ListItemText>
                          <Typography>
                            create budget
                          </Typography>
                        </ListItemText>
                        <ListItemIcon>
                          <AppRegistrationIcon color='primary'></AppRegistrationIcon>
                        </ListItemIcon>
                      </ListItem>
                    </Link>
                    <Link to={'spread'} style={style.link}>
                      <ListItem>
                        <ListItemText>
                          <Typography>
                            spend
                          </Typography>
                        </ListItemText>
                        <ListItemIcon>
                          <PaymentIcon color='primary'></PaymentIcon>
                        </ListItemIcon>
                      </ListItem>
                    </Link>
                    <Link to={'setting'} style={style.link}>
                      <ListItem>
                        <ListItemText>
                          <Typography>
                            settings
                          </Typography>
                        </ListItemText>
                        <ListItemIcon>
                          <SettingsIcon color='primary'></SettingsIcon>
                        </ListItemIcon>
                      </ListItem>
                    </Link>
                  </List>
                </Drawer>
              </div>
            </div>
          )
        }

      <div style={style.out} className='outlet_container'>
        <div className='empty'></div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Layout