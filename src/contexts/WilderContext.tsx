import { useContext, createContext } from "react";
import IWilder from "../interfaces/IWilder";
import { gql, useQuery } from "@apollo/client";

export interface WilderContextProps {
	wilders: IWilder[];
	fetchData: () => void | Promise<void>;
}

export const WilderContext = createContext<WilderContextProps>({
	wilders: [],
	fetchData: () => {},
});

export interface WilderProviderProps {
	// children?: ReactNode; // typage des elements enfants 1ere façon
	children?: React.ReactNode; // typage des elements enfants 1ere façon
}

const GET_WILDERS = gql`
	query GetAllWilders {
		getAllWilders {
			id
			name
			city
			skills {
				name
				id
			}
		}
	}
`;
export function WilderProvider({ children }: WilderProviderProps) {
	const { data, refetch } = useQuery(GET_WILDERS);
	// console.log("data", data);
	const wilders = data?.getAllWilders || [];

	const fetchData = async () => {
		await refetch();
	};
	return (
		<WilderContext.Provider value={{ wilders, fetchData }}>
			{children}
		</WilderContext.Provider>
	);
}

export const useWilders = () => useContext(WilderContext);
