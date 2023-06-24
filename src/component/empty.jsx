import React from 'react'
import { Card, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import budgetHome from '../images/budgetHome.jpg'


const Empty = () => {

    const style = {
        sub_1_content : {
          display : 'flex',
          flexWrap : 'wrap'
        },
        fresh_card : {
          background : 'lightGrey',
          margin : 4,
        } 
      }

  return (
    <div className='fresh'>
          <div className='fresh_image'>
            <Box>
              <img src={budgetHome} alt="home" />
            </Box>
          </div>
          <div className='fresh_intro'>
            <Card elevation={6} style={style.fresh_card}>
            <h1>
                Budgeting is telling your money where to go 
                instead of wondering where it went <br />
                <small>"Dave Ramsey"</small>
              </h1>
            </Card>
            <Link to={'/budget'}>
            <Button variant='contained'><p>create budget</p></Button>
            </Link>
          </div>
        </div>
  )
}

export default Empty