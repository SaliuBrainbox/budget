import { Avatar, Card, CardContent, IconButton, CardHeader } from '@mui/material'
import React from 'react'
import { totalSpentBudget } from '../helper/helper'
import './spreadItems.css'



const SpreadItems = ({Budget}) => {

    const {name, amount} = Budget
    const spent = totalSpentBudget(name)
   


  return (
    <div className='card'>
        <Card>
            <CardHeader
            avatar={<Avatar> {name[0]} </Avatar>}
            action={<IconButton> O </IconButton>}
            title= 'Budget'
            ></CardHeader>

            <CardContent>
                <div><progress max={amount} value={spent}></progress></div>
                <div> {name} </div>
                <div> {spent} </div>
                <div> {amount} </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default SpreadItems