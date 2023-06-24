import { Button, FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select, TextField, Card, Avatar } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import React, { useEffect, useRef, useState } from 'react'
import { Form, redirect, useFetcher, useLoaderData, Link } from 'react-router-dom'
import { fetchBudget, createSpread } from '../helper/helper'
import './spread.css'
import SpreadItems from './spreadItems'
import Tables from './table'
import Empty from './empty'


export async function spreadLoader() {
    const Budgets = await fetchBudget('budget')
    const Spread = await fetchBudget('spread')
    return {Budgets, Spread}
}

export async function spreadAction({request}) {
    const data = await request.formData()
    const formData = Object.fromEntries(data)

    try{
        createSpread({
            name: formData.category,
            amount: formData.spread_amount,
            purpose: formData.purpose
        })
        // alert('spread recorded')
    } catch(error) {
        alert("there was a problem")
    }

    return redirect('/spread')
}

const Spread = () => {

    const fetcher = useFetcher()
    const formRef = useRef()

    const isSubmitting = fetcher.state === 'submitting'

    // useEffect(() => {
    //     if(!isSubmitting) {
    //         formRef.current.reset()
    //     }
    // }, [isSubmitting])
    
    const [category, setCategory] = useState('')
    const {Budgets, Spread} = useLoaderData()


    const style = {
        spreadForm : {
            padding : 10,
        },
    }



  return (
      <div>
          {Budgets ? (
              <div>
                  <div>
                      <h2>spread out your budget</h2>
                      <div className='spread_input_container'>
                          <fetcher.Form method='post' ref={formRef} style={style.spreadForm}>
                              <div className='spread_input'>
                                  <FormControl sx={{ minWidth: 120 }}>
                                      <InputLabel>category</InputLabel>
                                      <Select
                                          value={category}
                                          onChange={(e) => setCategory(e.target.value)}
                                          name='category'
                                      >
                                          {
                                              Budgets.map((opt) => (
                                                  <MenuItem key={opt.id} value={opt.name}> {opt.name} </MenuItem>
                                              ))
                                          }
                                      </Select>
                                  </FormControl>
                              </div>
                              <div className='spread_input'>
                                  <FormControl>
                                      <InputLabel>purpose of expense</InputLabel>
                                      <OutlinedInput placeholder='purpose' name='purpose' required></OutlinedInput>
                                  </FormControl>
                              </div>
                              <div className='spread_input'>
                                  <FormControl>
                                      <InputLabel>spread amount</InputLabel>
                                      <OutlinedInput
                                          type='number'
                                          placeholder='0.00'
                                          name='spread_amount'
                                      ></OutlinedInput>
                                  </FormControl>
                              </div>
                              <Button variant='contained' type='submit'>confirm</Button>
                          </fetcher.Form>
                      </div>
                  </div>
                  <h2>existing budgets</h2>
                  <div className='spread'>
                      {
                          Budgets.map((opt) => (
                              <SpreadItems key={opt.id} Budget={opt}></SpreadItems>
                          ))
                      }
                  </div>
                  <Link to={'/budgetList'}><Button variant='contained'>see more budgets</Button></Link>
                  {
                      Spread && Spread.length > 0 && (
                          <div>
                              <h2>expense spread table</h2>
                              <div className='spread_table'>
                                  <Tables Spread={Spread} ></Tables>
                              </div>
                          </div>
                      )
                  }
              </div>
          ) : (
            <Empty></Empty>
          )}
      </div>
  )
}

export default Spread