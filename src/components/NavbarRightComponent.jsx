
import { useContext } from 'react';
import { AppContext } from '../context/UserContext.jsx'

function NavbarRightComponent(){
  const {user,basket } = useContext(AppContext);

  return (
    <>
      Signed in as: <a href="#login">{user.username}</a>
      &nbsp; &nbsp; items in basket → {basket.items.length}
    </>
  )
}

export { NavbarRightComponent }
