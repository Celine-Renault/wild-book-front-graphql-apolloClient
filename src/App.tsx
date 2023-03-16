import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WilderGrid from "./components/WilderGrid";
import { WilderProvider } from "./contexts/WilderContext";
import AddWilderForm from "./components/AddWilderForm";

function App() {
	return (
		<div className="App">
			<WilderProvider>
				<Header />
				<AddWilderForm />
				<WilderGrid />
				<Footer />
			</WilderProvider>
		</div>
	);
}

export default App;
