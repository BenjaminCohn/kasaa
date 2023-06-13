import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Error404 from '../Error404'
import data from '../../data/logement.json'
import Gallery from '../../components/Gallery'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'

import './style.css'

function Annonce() {
	const [logement, setLogement] = useState({
		tags: [],
		equipments: [],
		pictures: [],
		rating: '',
		description: '',
		host: { name: '', picture: '' },
	})
	const { id } = useParams()

	useEffect(() => {
		data.map((house) => {
			if (house.id === id) {
				setLogement(house)
			}
			return null
		})
	}, [id])

	if (logement.title === undefined) {
		return <Error404 />
	}

	const [firstName, lastName] = logement.host.name.split(' ')
	//cree un paragprahe pour chaque équipement pour liste à puces
	let mapLogementEquipement = logement.equipments.map((l, index) => (
		<p className="pEquipementLogement" key={l}>
		  {logement.equipments[index]}
		</p>
	  ));

	return (
		<section>
			<Gallery images={logement.pictures} />

			<div className="annonce-info-rating-host-wrapper">
				<div className="annonce-info-wrapper">
					<h1 className="annonce-title">{logement.title}</h1>
					<p className="annonce-location">{logement.location}</p>
					<div className="tag-wrapper">
						{logement.tags.map((tag, index) => (
							<Tag tagName={tag} key={`${tag}-${index}`} />
						))}
					</div>
				</div>
				<div className="rating-host-wrapper">
					<Rating rating={logement.rating} />
					<div className="host-wrapper">
						<div className="host-name">
							{firstName}
							<br />
							{lastName}
						</div>
						<img
							className="host-picture"
							src={logement.host.picture}
							alt="Host"
						/>
					</div>
				</div>
			</div>
			<div className="AccordionLogement">
				<Collapse title="Description" content={logement.description} />
				<Collapse title="Équipements" content={<div className="equipments">{mapLogementEquipement}</div>} />
		</div>
		</section>
	)
}

export default Annonce
