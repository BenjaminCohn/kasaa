import React, { useState, useEffect } from 'react'

import loading from '../../assets/loading.gif'

import Error from '../Error'

import './style.css'

function Loading() {
	
/* Il s'agit d'une variable d'état qui sera utilisée pour afficher un message d'erreur. */
	const [error, setError] = useState(false)

	useEffect(() => {
		/* A timeout to show error. */
		const timeError = setTimeout(() => {
			setError(true)
		}, 5000)

		return () => {
			clearTimeout(timeError)
		}
	}, [])

	if (error) {
		return (
			<Error subtitle="Oops, une erreur est survenue lors du chargement." />
		)
	}

	return (
		<div className="loading">
			<img src={loading} alt="Loading" />
		</div>
	)
}

export default Loading