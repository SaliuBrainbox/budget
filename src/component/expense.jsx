import React from 'react'
import { fetchData, createBudget } from '../helper/helper'
import { Form, Link, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import Budget from './budget'

export function expenseLoader() {
    const userName = fetchData('name')
    return {userName}
}

// export async function expenseAction({request}) {
//     const data = await request.formData()
//     const formData = Object.fromEntries(data)

//     try{
//         createBudget({
//             name: formData.budget_name,
//             amount: formData.budget_amount,
//         })
//         alert('budget created')
//     } catch(error) {
//         alert('there was a problem creating ur account')
//     }

//     return redirect('/spread')   
// }

const Expense = () => {
    const navigate = useNavigate()

//    const {userName} = useLoaderData()

  return (
    <div>
        {/* {userName} */}

        {/* <Form  method='post' action='/del'
        onSubmit={(event) => {
            if(!window.confirm('do u want to del')){
                event.preventDefault()
            }
        }}
        >
            <Button type='submit'>
                <Typography>delete</Typography>
            </Button>
        </Form> */}

        <Budget></Budget>

    </div>
  ) 
}

export default Expense