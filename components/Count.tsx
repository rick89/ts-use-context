import { useContext } from 'react';
import { CountContext } from '../context/CountContext';
import { Button, Text, View } from 'react-native';
import { CountContextType } from '../@types/count';

export const Count = () => {
	const { value, increment, decrement } = useContext(
		CountContext
	) as CountContextType;

	return (
		<View>
			<Text>The count value is {value}</Text>
			<Button onPress={increment} title='Increment' />
			<Button onPress={decrement} title='Decrement' />
		</View>
	);
};
