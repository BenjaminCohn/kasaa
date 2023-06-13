import './style.css'
import { useState } from 'react'
import React from 'react'

// import chevron from '../../assets/chevron.svg'
const chevron = <i className="fa-solid fa-chevron-up"></i>

function Collapse({ title, content }) {
	const [active, setActive] = useState(false)

	const handleToggle = (e) => {
		setActive(!active)
	}
	return (
		<div className={`AccordionLogement ${active && 'active'}`}>
			<div className="accordionTitle" onClick={handleToggle}>
				{title} <div>{chevron}</div>
			</div>
			<div className="accordionContent">{content}</div>
		</div>
	)
}

export default Collapse
