import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { CustomForm } from './components/Form.jsx'
import { AppContext } from './context/UserContext.jsx'
import { ProductComponent } from './components/ProductComponent.jsx'
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap'


function App() {

  const initialUser = {
    id: 1,
    email: "iam@hacker.com",
    name: "Otto Mate",
    username: "otto"
  }

  const [user, setUser] = useState(initialUser);
  const [basket, setBasket] = useState({items: []});

  // define initial values to pass to AppContext
  const appContextValues = { user, setUser, basket, setBasket };

  return (
    <>
      <AppContext.Provider value={appContextValues} >
        <div>
          <Header />
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h2> React Context API</h2>
        <CustomForm />
        <Container>
          <Row className={'mb-5 mt-5'}>
            <ProductComponent title={"Asus Mouse"} />
            <ProductComponent title={"Masus aus"} />
            <ProductComponent title={"Suas mas"}/>
            <ProductComponent title={"Susa mus"}/>
          </Row>
        </Container>

    </AppContext.Provider>

    </>
  )
}

export default App
