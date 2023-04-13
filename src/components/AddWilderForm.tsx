import { ChangeEvent, FormEvent, useState } from "react";
import { useWilders } from "../contexts/WilderContext";
import { gql, useMutation } from "@apollo/client";

type AddWilderFormState = {
	// pour typer le useState
	name: string;
	city: string;
};
// const initialState = {
// 	name: "",
// 	city: "",
// };

const ADD_WILDER = gql`
	mutation AddWilder($city: String!, $name: String!) {
		addWilder(city: $city, name: $name) {
			name
			id
			city
		}
	}
`;

export default function AddWilderForm() {
	const [addWilder, { data, loading }] = useMutation(ADD_WILDER);
	console.log("data add form", data);

	const [fields, setFields] = useState<AddWilderFormState>({
		// const [fields, setFields] = useState({
		// initialState,
		name: "",
		city: "",
	});
	// const [name, setName] = useState<string>("");
	// const [city, setCity] = useState<string>("");
	const { fetchData } = useWilders();

	// fonction handleSubmit qui va gerer l'evement submit // typage de l'evenement avec le type FormEvent fournit par React
	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		await addWilder({
			// variables: { name, city },
			// fields: { name: "truc", city: "bidule" }
			variables: fields,
			// variables: { name: fields.name, city: fields.city },
		});

		// await axios.post("http://localhost:5000/api/wilder", { name, city });
		// await axios.post("http://localhost:5000/api/wilder", fields);
		// setName("");
		// setCity("");
		setFields({
			name: "",
			city: "",
		});
		// setFields({ initialState });
		fetchData();
	};

	// fonciton qui va gérer les changement sur l'input
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFields({
			// ...fields
			name: fields.name,
			city: fields.city,
			// initialState,
			[event.target.id]: event.target.value,
		});
		// ajouter un type TypeScript au ChangeEvent, le HTMLInputElement designe un element input pour avoir acces a target.value
		// if (event.target.id === "name") {
		// event.target.id et .value font reference a l input
		// setName(event.target.value);
		// } else {
		// setCity(event.target.value);
		// }
	};

	return (
		<form className="container" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					type="text"
					// value={fields.initialState.name}
					value={fields.name}
					placeholder="Add Wilder"
					onChange={handleChange}
				></input>
			</div>
			<div>
				<label htmlFor="city">City</label>
				<input
					id="city"
					type="text"
					value={fields.city}
					// value={initialState.city}
					placeholder="Add City"
					onChange={handleChange}
				></input>
			</div>
			<button disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
		</form>
	);
}
