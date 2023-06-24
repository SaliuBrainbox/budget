import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import './budgetCard.css'

const BudgetCard = ({budget}) => {

    const {name, amount} = budget 

    const style = {
      card_container : {
        width : 220
      }
    }

  return (
    <div className='budgetContainer'>
        <Card style={style.card_container}>
            <CardHeader title={name}></CardHeader>
            <CardContent>
                <Typography>budgted amount is USD{amount} </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default BudgetCard