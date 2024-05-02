import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Count } from './components/Count';
import { CountContextProvider } from './context/CountContext';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/TabNavigator';

export default function App() {
	return (
		<CountContextProvider>
			<NavigationContainer>
				<TabNavigator />
			</NavigationContainer>
		</CountContextProvider>
	);
}
