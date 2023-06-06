import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from '../../pages/Home'
import Error404 from '../../pages/404'
import APropos from '../../pages/A-Propos'
import Annonce from '../../pages/Annonce'

function Router() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				{/*Il s'agit d'une définition d'itinéraire. Il indique au routeur de faire correspondre l'URL `/` et de rendre le composant `<Home />`. */}
				<Route path="/" element={<Home />} />
				{/* Il indique au routeur de faire correspondre l'URL `/annonce/:annonceId` et de rendre le composant `<Annonce />`. */}
				<Route path="/annonce/:id" element={<Annonce />} />
				{/* Il indique au routeur de faire correspondre l'URL `/a-propos` et de rendre le composant `<APropos />`. */}
				<Route path="/a-propos" element={<APropos />} />

				{/* Il indique au routeur de faire correspondre n'importe quelle URL et de rendre le composant `<Error404 />`. */}
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default Router
