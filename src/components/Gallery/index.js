import React, { useState } from 'react'

import sliderArrow from '../../assets/slider-arrow.svg'

import './style.css'

function Gallery({ images }) {
	console.log(images)
	/* Il s'agit d'un React Hook qui crée une variable d'état appelée `current` et la définit sur 0. Il
    crée une fonction appelée `setCurrent` qui prend un paramètre appelé `value` et définit le
    variable d'état `current` à la valeur transmise. */
	const [current, setCurrent] = useState(0)
	const length = images.length

	console.log(images)
	/**
	 * La fonction nextSlide() prend la valeur courante de current et lui ajoute une. Si le courant
	 * la valeur est égale à la longueur du tableau moins un, alors la valeur actuelle est définie sur zéro.
	 * Sinon, la valeur actuelle est définie sur la valeur actuelle plus un
	 */
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	/**
	/* Il s'agit d'une simple vérification pour s'assurer que le tableau d'images n'est pas vide. S'il est vide, alors le
    le curseur ne sera pas rendu. */

	const previousSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	/* Il s'agit d'une simple vérification pour s'assurer que le tableau d'images n'est pas vide. S'il est vide, alors le
    le curseur ne sera pas rendu. */
	if (!Array.isArray(images) || length <= 0) {
		return null
	}

	return (
		<div className="gallery">
			{/* Il s'agit de deux opérateurs ternaires qui vérifient si la longueur du tableau d'images est supérieure à 1. S'il
                est, alors il rendra la flèche. Sinon, il ne rendra pas la flèche. */}
			{length > 1 && (
				<img
					src={sliderArrow}
					className="left-arrow"
					onClick={previousSlide}
					alt="Previous Arrow"
				/>
			)}
			{length > 1 && (
				<img
					src={sliderArrow}
					className="right-arrow"
					onClick={nextSlide}
					alt="Next Arrow"
				/>
			)}
			{images.map((slider, index) => {
				return (
					/* C'est un opérateur ternaire qui vérifie si l'index de l'image est égal à la valeur courante.
                Si c'est le cas, cela rendra la diapositive active. Sinon, il rendra la diapositive comme
                inactif. */
					<div
						className={index === current ? 'slide active' : 'slide'}
						key={`slider-${index}`}
					>
						{index === current && (
							<img
								src={slider}
								alt={'slide ' + (parseInt(index) + 1)}
								className="image"
							/>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default Gallery
