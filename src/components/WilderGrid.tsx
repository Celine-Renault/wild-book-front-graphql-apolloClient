import "../../src/App.css";
import "./WilderGrid.css";
import IWilder from "../interfaces/IWilder";
import WilderCard from "../components/WilderCard";

export interface WilderGridProps {
	wilders: IWilder[];
	fetchData: () => void | Promise<void>;
}

export default function WilderGrid({ fetchData }: WilderGridProps) {
	const wilders: IWilder[] = [
		{
			id: 1,
			name: "Jane",
			city: "London",
			skills: [
				{
					id: 1,
					name: "PHP",
				},
			],
		},
	];
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
