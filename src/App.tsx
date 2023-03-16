import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WilderGrid from "./components/WilderGrid";
import { useState, useEffect } from "react";

function App() {
	const [wilders, setWilders] = useState([]);
	const fetchData = async () => {
		const wilders = await axios.get("http://localhost:5000/api/wilder");
		setWilders(wilders.data);
		console.log("data wilders", wilders.data);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="App">
			<Header></Header>
			<WilderGrid wilders={wilders} fetchData={fetchData}></WilderGrid>
			<Footer></Footer>
		</div>
	);
}

export default App;
