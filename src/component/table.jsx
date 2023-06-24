import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table,Paper, Button, Avatar } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { dateFormat, delData, fetchBudget } from '../helper/helper'
import DeleteIcon from '@mui/icons-material/Delete'
import { Form } from 'react-router-dom'


const Tables = ({Spread}) => {
    


  return (
    <div>
        <TableContainer component={Paper}>
              <Table sx={{minWidth: 650}}>
                  <TableHead>
                      <TableRow>
                          {
                              ['category', 'amount', 'purpose', 'date'].map((i, index) => (
                                  <TableCell key={index}> {i} </TableCell>
                              ))
                          }
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {
                          Spread.map((opt) => (
                              <TableRow key={opt.id}>
                                  <TableCell> {opt.name} </TableCell>
                                  <TableCell> {opt.amount} </TableCell>
                                  <TableCell> {opt.purpose} </TableCell>
                                  <TableCell> {dateFormat(opt.createdAt)} </TableCell>
                                  <TableCell>
                                    <Form method='post' action='/update'>
                                    <Button type='submit' onClick={() => delData('spread', opt.id)}><DeleteIcon></DeleteIcon></Button>
                                    </Form>
                                  </TableCell>
                              </TableRow> 
                          ))
                      }
                  </TableBody>
              </Table>
        </TableContainer>
    </div>
  )
}

export default Tables