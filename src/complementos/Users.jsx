import React from 'react'
import {Row, Col, Form, Button, Image} from 'react-bootstrap'
import './Fondo.css'
import Imagen from './fondo4.jpg'

const Users = () => {
    return (
		<>
		<br/>
        <section id="Users" className="w-50 mx-auto Users rounded" sm={6}>
		<Row>
			<Col className="w-25 ">
				<Image src={Imagen} className="Imagen"></Image>
			</Col>
			<Col className="p-3">
				<Form>
					<Form.Label className="text-white mt-0 mb-4"><h2>Registration Info</h2></Form.Label>
					<Form.Group controlId="formName" className="border-bottom text-white mr-5">
						<input type="text" placeholder="Name" className="Input" />
					</Form.Group>

					<Form.Group controlId="formBasicDate" className="border-bottom mr-5">
						<input type="date" placeholder="Birthdate" className="Input"/>
					</Form.Group>
					<Form.Group controlId="formBasicSelect" className="border-bottom mr-5">
						<Form.Control as="select" size="md" custom className="Input">
							<option selected>Gender</option>
							<option>Female</option>
							<option>Male</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId="formBasicEmail" className="border-bottom mr-5">
						<input type="text" placeholder="Email" className="Input"/>
					</Form.Group>
					<Form.Group controlId="formPhone" className="border-bottom text-white mr-5">
						<input type="text" placeholder="Phone" className="Input" />
					</Form.Group>
					<Button variant="success" type="submit">
						Submit
					</Button>
				</Form>
			</Col>
		</Row>
	</section>
	<br/><br/><br/>
	<br/><br/><br/>
	</>
    )
}
export default Users