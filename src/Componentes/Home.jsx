import React from 'react';
import './css/Home.css';
import {Container} from 'react-bootstrap';

const Home = () => {
    return (
        <section id="Home">
		<div className="home">
			<br/>
			<Container className="m-auto bg-dark rounded p-3 w-50" > 
				<h1 className="Titulos font-weight-bold" style={{color: "goldenrod" , fontSize: "1.3em"}}>The Golden Book</h1>
				<div className="Hometexto">
					<p >We are an open collaborative public library, designed to share the reading passion where everyone can get access.</p>
					<p>Our page is based on users and books, so if you are new in our page, feel free to register and see the available books we have for you.</p>
				</div>
			</Container>
		</div>
	</section>
    )
}
export default Home