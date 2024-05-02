import { Text, View } from 'react-native';
import { Count } from '../components/Count';

export const OneScreen = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#fff',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Text>One screen</Text>
			<Count />
		</View>
	);
};
