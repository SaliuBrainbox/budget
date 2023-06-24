import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import Homepage from './component/hompage';
import Layout from './component/layout';
import Auth from './component/auth'
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { person, user } from './redux_store/user/userSelector';
import {setCurrent} from './redux_store/user/userAction'
// import Expense, { expenseAction, expenseLoader } from './component/expense';
import { delAction } from './component/del';
import { homeLoader } from './component/hompage';
import Error from './component/error';
import Budget, { expenseAction } from './component/budget';
import Spread, { spreadAction, spreadLoader } from './component/spread';
import { update } from './component/tableUpdate';
import Empty from './component/empty';
import ExpenseTable, { expenseTableLoader } from './component/expenseTable'
import BudgetList, { BudgetListLoader } from './component/budgetList';
import AuthLogin from './component/authLogin';
import ParentAuth from './component/parentAuth';


const router = createBrowserRouter(
  [
  {
    path : '/',
    element : <Layout></Layout> ,
    children : [
      {
        path: '/',
        element: <Empty></Empty>,
      },
      {
        path : 'home',
        element : <Homepage></Homepage>,
        loader: homeLoader
      },
      {
        path: 'budget',
        element: <Budget></Budget>,
        action: expenseAction ,
        errorElement: <Error></Error>
      },
      {
        path: 'spread',
        element: <Spread></Spread>,
        loader: spreadLoader,
        action: spreadAction,
        errorElement: <Error></Error>
      },
      {
        path: 'setting',
        element: <h1>settings</h1>
      },
      {
        path: 'expenseTable',
        element: <ExpenseTable></ExpenseTable>,
        loader: expenseTableLoader
      },
      {
        path: 'budgetList',
        element: <BudgetList></BudgetList>,
        loader: BudgetListLoader
      },
      {
        path: 'del',
        action: delAction
      },
      {
        path: 'update',
        action: update
      },
    ]
  },
]
)


const route2 = createBrowserRouter(
  [
    {
      path : '/',
      element : <ParentAuth></ParentAuth>,
      children: [
        {
          path: 'login',
          element: <AuthLogin></AuthLogin>
        },
        {
          path : '/',
          element : <Auth></Auth>,
        }
      ]
    }
  ]
)



function App() {
const dispatch = useDispatch()

const  current  = useSelector(user)
const currentUser = useSelector(person)

console.log(currentUser)

// dispatch(setCurrent(true))
// console.log(current) 

  return (
    <div className="App">
      {
        current ? (
          <RouterProvider router={router}></RouterProvider>
        ) : (
          <RouterProvider router={route2}></RouterProvider>
        )
      }
    </div>
  );
}

export default App;
