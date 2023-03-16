import axios from "axios";
import {
	useState,
	useEffect,
	useContext,
	createContext,
	ReactNode,
} from "react";
import IWilder from "../interfaces/IWilder";

// const initialWilder: IWilder[] = [] // 2eme façon

export interface WilderContextProps {
	// 3e façon pour typer precisement le createContext
	wilders: IWilder[];
	fetchData: () => void | Promise<void>;
}

// createContext<T> -> fonction générique, la généricité permet de typer finement le WilderContext
// Dans ce cas précis, la généricité est utilsée pour typer finement
// ce que doit contenir le contexte dans `value`
// Et ce qui est placé dans la prop `value` du WilderContext.Provider (et dans la valeur par défaut précisée en-dessous).
export const WilderContext = createContext<WilderContextProps>({
	// wilders: [] as IWilder[], // 1e façon pour creatContext prenne le bon type infré, je vais preciser le type de la liste [],
	// utiliser un alias AS
	// wilders: initialWilder, // 2e façon - bonne pratique
	wilders: [],
	fetchData: () => {},
});

export interface WilderProviderProps {
	children?: ReactNode; // typage des elements enfants 1ere façon
}
// 2eme façon utilisé un type provenant de React : PropsWithChildren c'est un type generique
export function WilderProvider({ children }: WilderProviderProps) {
	const [wilders, setWilders] = useState<IWilder[]>([]);
	const fetchData = async () => {
		const wilders = await axios.get("http://localhost:5000/api/wilder");
		setWilders(wilders.data);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<WilderContext.Provider value={{ wilders, fetchData }}>
			{children}
		</WilderContext.Provider>
	);
}

export const useWilders = () => useContext(WilderContext);
