import React, { useEffect, useState } from 'react'
import { apiBaseUrl } from '../..'
import './style.css';

const CityOptions = ({ cities }) => (
	<>
		<option>Vyberte</option>
		{cities.map((city) => (
			<option key={city.code}>{city.name}</option>
		))}
	</>
)

export const JourneyPicker = () => {
	const handleSubmit = (event) => {
		event.preventDefault()
	}

	const [cities, setCities] = useState([])
	useEffect(() => {
		fetch(`${apiBaseUrl}/cities`)
			.then((response) => response.json())
			.then((data) => setCities(data.data))
	}, [])

	return (
		<div className="journey-picker">
			<div className="journey-picker__head">
				Kam chcete jet?
			</div>
			<form onSubmit={handleSubmit}>
				<label>
					Z:
					<select>
						<CityOptions cities={cities} />
					</select>
				</label>
				<label>
					Do:
					<select>
						<CityOptions cities={cities} />
					</select>
				</label>
				<label>
					Datum:
					<select>
						<option>@TODO</option>
					</select>
				</label>
				<button type="submit">Vyhledat spoj</button>
			</form>
		</div>
	)
}