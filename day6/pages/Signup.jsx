import { Button, ButtonToolbar, Form } from "rsuite"
import "../assets/css/login.css"
import { Link } from "react-router-dom"
const Signup=()=>{
  return(
    <div className="logincontainer1">
     <Form className="form1">
    <Form.Group controlId="name">
      <Form.ControlLabel className="formlogin">USER NAME</Form.ControlLabel>
      <Form.Control name="name" />
        </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel className="formlogin">EMAIL ID</Form.ControlLabel>
      <Form.Control name="email" type="email" />
       </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel className="formlogin">PHONE NUMBER</Form.ControlLabel>
      <Form.Control name="email" type="email" />
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel className="formlogin">GENDER</Form.ControlLabel>
      <Form.Control name="email" type="email" />
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel  className="formlogin">AGE</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel  className="formlogin">CREATE PASSWORD</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button className="formbutton"><Link to='/login'>SUBMIT</Link></Button>
      </ButtonToolbar>
    </Form.Group>
        <p className="formp">Already have an account? <Link to='/login'>LOGIN</Link></p>
  </Form>
  </div>
  )
}
export default Signup