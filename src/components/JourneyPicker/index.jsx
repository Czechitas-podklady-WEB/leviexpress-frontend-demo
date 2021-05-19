import React from 'react'

export const JourneyPicker = () => {
	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Z:
				<select>
					<option>@TODO</option>
				</select>
			</label>
			<label>
				Do:
				<select>
					<option>@TODO</option>
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
	)
}
