import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { CustomForm } from './components/Form.jsx'
import { UserContext } from './context/UserContext.jsx'


function App() {

  const initialUser = {
    id: 1,
    email: "iam@hacker.com",
    name: "Otto Mate",
    username: "otto"
  }

  const [user, setUser] = useState(initialUser);
  // const [basket, setBasket] = useState(initialUser);

  const value = { user, setUser};
  // const basketValue = { basket, setBasket};

  return (
    <>
      <UserContext.Provider value={value} >
        <div>
          <Header />
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h2> React Context API</h2>
        <CustomForm />
    </UserContext.Provider>

    </>
  )
}

export default App
