import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useWilders } from "../contexts/WilderContext";

export default function AddWilderForm() {
	const [name, setName] = useState<string>("");
	const [city, setCity] = useState<string>("");
	const { fetchData } = useWilders();

	// fonction handleSubmit qui va gerer l'evement submit // typage de l'evenement avec le type FormEvent fournit par React
	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		await axios.post("http://localhost:5000/api/wilder", { name, city });
		setName("");
		setCity("");
		fetchData();
	};

	// fonciton qui va gérer les changement sur l'input
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		// ajouter un type TypeScript au ChangeEvent, le HTMLInputElement designe un element input pour avoir acces a target.value
		if (event.target.id === "name") {
			// event.target.id et .value font reference a l input
			setName(event.target.value);
		} else {
			setCity(event.target.value);
		}
	};

	return (
		/// reset={resetFormFields}
		<form className="container" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Nom</label>
				<input
					id="name"
					type="text"
					value={name}
					placeholder="Add Wilder"
					onChange={handleChange}
				></input>
			</div>
			<div>
				<label htmlFor="city">Ville</label>
				<input
					id="city"
					type="text"
					value={city}
					placeholder="Add City"
					onChange={handleChange}
				></input>
			</div>
			<button>Envoyer</button>
		</form>
	);
}
