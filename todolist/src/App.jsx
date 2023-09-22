import { useState } from 'react'
import TodoList from './TodoList'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'
import Navbar from './navbar'
function App() {

  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />

    </>
  )
}

export default App
