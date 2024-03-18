import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarRightComponent } from './NavbarRightComponent.jsx'
import { AppContext } from '../context/UserContext.jsx'
import { useContext } from 'react'

function Header() {

  const {user} = useContext(AppContext);

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          React Context API - {user.username}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <NavbarRightComponent />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Header };
