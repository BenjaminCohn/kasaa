import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './style.css'

function Header() {
	return (
		<header className="nav-wrapper">
			<Link to="/">
				<img src={logo} alt="Kasa Logo" className="nav-logo" />
			</Link>
			<nav className="nav">
				{/* Il s'agit de deux React Router NavLink, qui changeront la classe active en fonction de l'itinéraire actuel. */}
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/a-propos"
				>
					A Propos
				</NavLink>
			</nav>
		</header>
	)
}

export default Header
