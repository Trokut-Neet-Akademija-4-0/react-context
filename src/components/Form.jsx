import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

function CustomForm({user, setUserInParentComponent}) {

  const [userObject, setUserObject] = useState(user);
  function changeUsernameHandler(event){
    console.log("new username: ", event.target.value );
    setUserObject({
      ...userObject,
      username: event.target.value
    })
  }

  function changeEmailHandler(event){
    console.log("new email: ", event.target.value );
    console.log("complete userObject: ", userObject );

    // let newUserObject = userObject = {
    //   id: userObject.id,
    //   name: userObject.name,
    //   email: event.target.value,
    //   username: userObject.username
    // }
    // setUserObject(newUserObject);
    //
    setUserObject({
      ...userObject,
      email: event.target.value
    });
  }

  //this sets the user object(state) in parent component on form submit event
  function onSubmit(e){
    e.preventDefault();
    setUserInParentComponent(userObject);
  }

  return (
    <Form style={{ paddingTop: 100, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"
                      placeholder="Enter email"
                      defaultValue={userObject.email}
                      onChange={(event) => changeEmailHandler(event)}
        />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text"
                      placeholder="Username"
                      defaultValue={userObject.username}
                      onChange={(event) => changeUsernameHandler(event)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary"
              type="submit"
              onClick={(event) => onSubmit(event)}
      >
        Submit
      </Button>
    </Form>
  );
}

export {CustomForm};
