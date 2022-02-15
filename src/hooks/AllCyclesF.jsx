import React, { useState, useEffect } from 'react';

const Allcyclesf = () => {

	// Datos iniciales del estado del componente
	const initialData = {
		fecha: new Date(),
		edad: 0,
		name: 'Bradley',
		lastName: 'Ramirez'
	}

	const [data, setData] = useState(initialData)

	useEffect(() => {
		// Creación componente
		const timerID = setInterval (
			() => tick(), 1000
		)

		// Actualización componente
		const tick = () => {
			setData((prevState) => 
				{	let edad = prevState.edad +1;
					return {
						...prevState,
						fecha: new Date(),
						edad
					}
				}
			)
		}
		return () => {
			// Componente a desaparecer
			clearInterval(timerID);
		}
	}, [])

	return (
		<div>
			<h2>
				Hora actual: {data.fecha.toLocaleTimeString()}
			</h2>
			<h3>Nombre: {data.name} {data.lastName}</h3>
			<h1>Edad: {data.edad}</h1>
		</div>
	);
}

export default Allcyclesf;
