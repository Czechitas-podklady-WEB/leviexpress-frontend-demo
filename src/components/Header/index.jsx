import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

export const Header = () => (
	<header>
		<div className="container">
			<Link to="/">Leviexpress</Link>
		</div>
	</header>
)
