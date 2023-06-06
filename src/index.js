import { createRoot } from 'react-dom/client'
import App from './components/App'
import './style.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)


/* Rendu du composant App dans l'élément racine du fichier index.html. */
root.render(<App />)