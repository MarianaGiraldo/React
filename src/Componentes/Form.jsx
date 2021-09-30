import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import './css/Fondo.css'

const PruebaForm = () => {
    return (
      <Container className="Login">
        <Form className="mx-auto w-50 mt-5 bg-dark p-4 rounded">
        <Form.Label className="text-white mt-0 mb-4"><h1>Login</h1></Form.Label>
          <Form.Group controlId="formBasicEmail" className="border-white ">
            <Form.Label className="text-white"><h4>Email address</h4></Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="text-white"><h4>Password</h4></Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check className="text-white" type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </Container>
    )
}
export default PruebaForm 