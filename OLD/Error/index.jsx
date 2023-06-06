import { Link } from 'react-router-dom'
import './style.css'

function Error() {
	return (
		<section className="error">
			<h1 className="error-title">Erreur</h1>
			<h2 className="error-subtitle">
				Oops, une erreur est survenue.
				<br className="error404-subtitle-br"></br>
			</h2>
			<Link className="error-link" to="/">
				Retourner sur la page d'accueil
			</Link>
		</section>
	)
}

export default Error
