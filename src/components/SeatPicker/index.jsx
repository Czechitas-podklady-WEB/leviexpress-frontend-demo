import React, { useState } from 'react'

export const SeatPicker = () => {
	const [seats] = useState(() =>
		new Array(35).fill(false).map(() => Math.random() < 0.2),
	)

	return (
		<div>
			<h3>Vyberte sedadlo</h3>
			<ul>
				{seats.map((isOccupied, i) => (
					<li key={i}>
						Sedadlo ({i + 1}): {isOccupied ? 'obsazeno' : 'volné'}
					</li>
				))}
			</ul>
		</div>
	)
}
