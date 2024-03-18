
function NavbarRightComponent({user}){
  return (
    <>
      Signed in as: <a href="#login">{user.username}</a>
    </>
  )
}

export { NavbarRightComponent }
