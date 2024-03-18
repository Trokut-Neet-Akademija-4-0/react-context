import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { CustomForm } from './components/Form.jsx'


function App() {


  return (
    <>
      <div>
        <Header />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2> React Context API</h2>
      <CustomForm />
    </>
  )
}

export default App
