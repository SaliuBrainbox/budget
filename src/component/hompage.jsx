import React, { useState } from 'react'
import { setData, fetchData, fetchBudget, totalSpentBudget } from '../helper/helper'
import Expense from './expense'
import { Link, useLoaderData } from 'react-router-dom'
import { Box, CardHeader, Paper, Card, CardContent, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Avatar, Chip} from '@mui/material'
import BudgetCard from './budgetCard'
import './homepage.css'
import Budget from './budget'
import budgetHome from '../images/budgetHome.jpg'
import AddIcon from '@mui/icons-material/Add';


export function homeLoader() {
  const Budgets = fetchBudget('budget')
  const Expenses = fetchBudget('spread')
  return {Budgets, Expenses}
}


const Homepage = () => {

  const {Budgets, Expenses} = useLoaderData()
  
  const [name, setName] = useState('')
  const [nom, setNom] = useState('')


  const style = {
    sub_1_content : {
      display : 'flex',
      flexWrap : 'wrap',
    },
    budget_card : {
      background : 'lightGray',
      height : 450
    },
    fresh_card : {
      background : 'lightGrey',
      margin : 4,
    },
    add_card : {
      width : 200,
      padding : 12,
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      flexDirection : 'column',
    },
    add_link : {
      textDecoration : 'none',
    }
  }



  return (
  <div>

    {/* <div>
    <p>key</p>
    <input type="text" onChange={(e) => setName(e.target.value)} />
    <p>value</p>
    <input type="text" onChange={(e) => setNom(e.target.value)} />
    <button onClick={() => setData(name, nom)}>click me</button>
    </div> */}
    {
      Budgets ? (
          <div>{
            Budgets && Budgets.length > 0 && (
              <div className='container'>
                <div className='subContainer_1'>
                  <div className='sub_1_card'>
                    <Card style={style.budget_card}>
                      <CardHeader title='Available Budget'></CardHeader>
                      <CardContent style={style.sub_1_content}>
                        {
                          Budgets && Budgets.length > 0 && Budgets.map((budget) => (
                            <BudgetCard key={budget.id} budget={budget}></BudgetCard>
                          ))
                        }
                        <Link to={'/budget'} style={style.add_link}>
                          <Card style={style.add_card}>
                            <Avatar sx={{bgcolor : 'blue'}}>
                              <AddIcon fontSize='large'></AddIcon>
                            </Avatar>
                            <h3>Add Budget</h3>
                          </Card>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                  <div className='sub_1_card'>
                    <Card>
                      <CardHeader title='Recent Expenses'></CardHeader>
                      <CardContent>
                        <TableContainer>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell>
                                  <Typography>purpose</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>amount</Typography>
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {
                                Expenses && Expenses.length > 0 && (
                                  Expenses.map((expense) => (
                                    <TableRow>
                                      <TableCell> {expense.purpose} </TableCell>
                                      <TableCell> {expense.amount} </TableCell>
                                    </TableRow>
                                  ))
                                )
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <div className='sub_1_card_chip'>
                          <Link to={'/expenseTable'}>
                            <Chip label='more expense' color='primary'></Chip>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className='subContainer_2'>
                  <div className='sub_2_card'>
                    <Card>
                      <CardHeader title='Budget Activity'></CardHeader>
                      <CardContent>
                        <TableContainer>
                          <Table>
                            {
                              Budgets.map((budget) => (
                                <TableRow key={budget.id}>
                                  <TableCell> {budget.name} </TableCell>
                                  <TableCell> <progress max={budget.amount} value={totalSpentBudget(budget.name)}></progress> </TableCell>
                                </TableRow>
                              ))
                            }
                          </Table>
                        </TableContainer>
                      </CardContent>
                    </Card>
                  </div>
                  <div className='sub_2_card'>
                    <Card>
                      <CardHeader title='Quote of the Day'></CardHeader>
                      <CardContent>
                        <Typography>
                          Budgeting is telling your money where to go <br />
                          instead of wondering where it went <br />
                          <small>"Dave Ramsey"</small>
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )
          } </div>
      ) : (
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
   
  </div>
  )
}

export default Homepage