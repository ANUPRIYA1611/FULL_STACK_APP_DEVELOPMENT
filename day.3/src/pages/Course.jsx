import { Button, ButtonToolbar, Form } from "rsuite"
import "../assets/css/course.css"
import { Link } from "react-router-dom"
const Course=()=>{
  return(
       <div>
         <h2 className="courseh2">START THE COURSES!!</h2>
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
      <Form.ControlLabel  className="formlogin">INSITITUTION</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel  className="formlogin">DURATION-TIMING</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button className="formbutton"><Link to='/payment'>PAY NOW</Link></Button>
      </ButtonToolbar>
    </Form.Group>

  </Form>
  </div>
  </div>
  )
}
export default Course