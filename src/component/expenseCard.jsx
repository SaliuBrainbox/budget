import { Card, CardContent, CardHeader, TableContainer, Typography, Table, TableCell, TableHead, TableBody, TableRow } from '@mui/material'
import React from 'react'


const ExpenseCard = ({expense}) => {

    const {purpose, amount} = expense

  return (
    <div>
        <Card>
            <CardContent>
              <TableCell> {purpose} </TableCell>
              <TableCell> {amount} </TableCell>
            </CardContent>
        </Card>
    </div>
  )
}

export default ExpenseCard