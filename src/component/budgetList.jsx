import React from 'react'
import { fetchBudget } from '../helper/helper'
import { useLoaderData } from 'react-router-dom'
import SpreadItems from './spreadItems'
import './budgetList.css'

export function BudgetListLoader() {
    const Budgets = fetchBudget('budget')
    return {Budgets}
}

const BudgetList = () => {
    const {Budgets} = useLoaderData()

  return (
      <div>
        <h2>Available Budgets</h2>
        <div className='budgetList_container'>
            {
                Budgets.map((opt) => (
                    <div className='budgetList_item'>
                        <SpreadItems key={opt.id} Budget={opt}></SpreadItems>
                    </div>
                ))
            }
        </div>
      </div>
  )
}

export default BudgetList