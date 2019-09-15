import React from 'react';
import Header from './Header';
import { Card } from 'reactstrap';
import styled from 'styled-components';

export default function WelcomePage() {
	return (
		<section className="welcome-page">
			<header>
				<h1>Welcome to the ultimate fan site!</h1>
				<img
					className="main-img ui centered medium circular image"
					src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
					alt="rick"
				/>
			</header>
		</section>
	);
}
