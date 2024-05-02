import { ReactNode, createContext, useState } from 'react';
import { CountContextType } from '../@types/count';

export const CountContext = createContext<CountContextType | null>(null);

export const CountContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [value, setValue] = useState<number>(0);

	const increment = () => {
		setValue((prev) => prev + 1);
	};

	const decrement = () => {
		setValue((prev) => prev - 1);
	};

	return (
		<CountContext.Provider value={{ value, increment, decrement }}>
			{children}
		</CountContext.Provider>
	);
};
