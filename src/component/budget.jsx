import React, { useEffect, useRef, useState } from 'react'
import { Box, FormControl, Input, InputLabel, TextField, OutlinedInput,MenuItem, Select, Button } from '@mui/material'
import { Form, useFetcher, useNavigate, redirect } from 'react-router-dom'
import './budget.css'
import { createBudget } from '../helper/helper'

export async function expenseAction({request}) {
    const data = await request.formData()
    const formData = Object.fromEntries(data)

    try{
        createBudget({
            name: formData.budget_name,
            amount: formData.budget_amount,
        })
        alert('budget created')
    } catch(error) {
        alert('there was a problem creating ur account')
    }

    return redirect('/spread')   
}


const Budget = () => {

    const [currency, setCurrency] = useState('')


    const currencies = [
        {
            value: 'USD',
            label: '$',
            id: '1'
        },
        {
            value: 'GHS',
            label: '#',
            id: '2'
        }
    ]

    const fetcher = useFetcher()
    const navigate = useNavigate()
    const isSubmitting = fetcher.state === 'submitting'

    const formRef = useRef()

    useEffect(() => {
        if(!isSubmitting) {
            formRef.current.reset()
        }
    }, [isSubmitting])

  return (
    <div className='budget_main_container'>
    <div className='budget_container'>
        
        <h2>Create Budget</h2>
        <fetcher.Form method='post' ref={formRef} >
              <div className='input'>
                  <TextField
                    label='Budget Name'
                    name='budget_name'
                    placeholder='eg. Groceries'
                  ></TextField>
              </div>
              <div className='input'>
                <FormControl>
                    <InputLabel>Amount</InputLabel>
                    <OutlinedInput
                    type='number'
                    placeholder='0.00'
                    name='budget_amount'
                    ></OutlinedInput>
                </FormControl>
              </div>
              <div className='input'>
                  <FormControl sx={{minWidth:120}}>
                    <InputLabel>currency</InputLabel>
                    <Select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value) }
                    >
                        {
                            currencies.map((opt) => (
                                <MenuItem key={opt.value} value={opt.value}> {opt.value} </MenuItem>
                            ))
                        }
                    </Select>
                  </FormControl>
              </div>
              <Button variant='contained' type='submit'>create</Button>
        </fetcher.Form>

    </div>
    </div>
  )
}

export default Budget