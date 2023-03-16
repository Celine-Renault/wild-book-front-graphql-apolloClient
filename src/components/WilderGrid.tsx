import "../../src/App.css";
import "./WilderGrid.css";
// import IWilder from "../interfaces/IWilder";
import WilderCard from "../components/WilderCard";
import { useWilders } from "../contexts/WilderContext";

// 1. Éviter les passage de props à travers l'arbre de composants. (prop drilling)
// 2. Partagez les props directement du Provider -> vers le composant qui consomme la propriété

// Avant, sans API Context, ma liste de wilders
// App.tsx -> Wildergrid

// Avant sans API Context, on devait passer `fetchData`
// App.tsx -> WilderGrid -> Wilder -> Skill
// App.tsx -> AddWilderForm

// Avec l'API Context, on passe `fetchData`
// WildersProvider.tsx -> WilderGrid
// WildersProvider.tsx -> Wilder
// WildersProvider.tsx -> Skill
// WildersProvider.tsx -> AddWilderForm

// Avec l'API Context, on ne passe plus `wilders` et `fetchData` dans les props
// On récupère directement avec ou `useContext(WildersContext)` (raccourci : `useWilders()`)

export default function WilderGrid() {
	const { wilders } = useWilders();

	return (
		<main className="container">
			<h2>Wilders</h2>
			<section className="card-row">
				{wilders.map((wilder) => {
					return (
						<WilderCard
							key={wilder.id}
							id={wilder.id}
							name={wilder.name}
							city={wilder.city}
							skills={wilder.skills}
							// fetchData={fetchData}
						></WilderCard>
					);
				})}
				{/* <WilderCard {...name}{...skills}/> */}
				{/* <WilderCard name/> */}
				{/* <WilderCard name={"John Smith"} /> */}
			</section>
		</main>
	);
}
