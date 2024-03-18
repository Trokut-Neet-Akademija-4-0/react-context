
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx'

function NavbarRightComponent(){
  const {user, setUser } = useContext(UserContext);

  return (
    <>
      Signed in as: <a href="#login">{user.username}</a>
    </>
  )
}

export { NavbarRightComponent }
