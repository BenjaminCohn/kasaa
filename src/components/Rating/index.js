import star from '../../assets/star.svg'

import './style.css'

function Rating({ rating }) {
	/* Création d'un système de notation de 5 étoiles. */
	const totalStar = 5
	const starNumber = parseInt(rating)
	const emptyStarNumber = totalStar - starNumber

	return (
		<div className="rating-wrapper">
			{/* Affiche le nombre d'étoiles complètes. */}
			{[...Array(starNumber)].map((e, i) => (
				<img
					className="star"
					key={'full-star-' + i}
					src={star}
					alt="Full Star Rating"
				/>
			))}
			{/* Affiche le nombre d'étoiles vides. */}
			{[...Array(emptyStarNumber)].map((e, i) => (
				<img
					className="star-empty"
					key={'empty-star-' + i}
					src={star}
					alt="Empty Star Rating"
				/>
			))}
		</div>
	)
}

export default Rating
