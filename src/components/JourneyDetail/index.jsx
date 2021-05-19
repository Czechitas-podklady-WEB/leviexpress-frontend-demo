import React from 'react'
import { useParams } from 'react-router'

export const JourneyDetail = () => {
	const { id } = useParams()

	return (
		<div>
			<h2>Detail cesty {id}</h2>
		</div>
	)
}
