import homeBanner from '../../assets/home-banner.jpg'
import Thumb from '../../components/Thumb'
import './style.css'
import data from '../../data/logement.json'

function Home() {
	return (
		<section className="home">
			<div className="banner">
				<img src={homeBanner} className="banner-img" alt="Banner" />
				<h1 className="banner-title">Chez vous, partout et ailleurs</h1>
			</div>
			{/* Boucle dans le tableau annonces et affichage de chaque annonce sous la forme d'un Thumb. */}
			<div className="thumb-wrapper">
				{data.map((annonce) => (
					<Thumb
						key={annonce.id}
						link={`/annonce/${annonce.id}`}
						title={annonce.title}
						cover={annonce.cover}
					/>
				))}
			</div>
		</section>
	)
}

export default Home

