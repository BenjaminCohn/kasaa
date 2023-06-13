import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import APropos from '../pages/A-Propos'
import Annonce from '../pages/Annonce'
import Default from '../layouts/Default'
import Blank from '../layouts/Blank'

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Default />}>
					<Route path="/" element={<Home />} />
					<Route path="/annonce/:id" element={<Annonce />} />
					<Route path="/a-propos" element={<APropos />} />
				</Route>

				<Route element={<Blank />}>
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
