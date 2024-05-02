import { Text, View } from 'react-native';
import { Count } from '../components/Count';

export const TwoScreen = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#fff',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Text>Two screen</Text>
			<Count />
		</View>
	);
};
