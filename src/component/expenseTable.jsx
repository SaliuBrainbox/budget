import React from 'react'
import './expenseTable.css'
import { Card, CardContent, CardHeader, TableContainer, Table, TableRow, TableBody, TableHead, TableCell } from '@mui/material'
import { fetchBudget } from '../helper/helper'
import { useLoaderData } from 'react-router-dom'

export function expenseTableLoader() {
  const Expenses = fetchBudget('spread')

  return {Expenses}
}

const ExpenseTable = () => {

  const {Expenses} = useLoaderData()

  return (
    <div className='expenseTable_container'>
      <Card>
        <CardHeader title='All Expense'></CardHeader>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    purpose
                  </TableCell>
                  <TableCell>
                    amount
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
        </CardContent>
      </Card>
    </div>
  )
}

export default ExpenseTable