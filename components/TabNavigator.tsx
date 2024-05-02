import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { OneScreen } from '../screens/OneScreen';
import { TwoScreen } from '../screens/TwoScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			backBehavior='history'
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === 'One') {
						return (
							<AntDesign
								name='home'
								size={24}
								color={focused ? 'black' : 'gray'}
							/>
						);
					} else if (route.name === 'Two') {
						return (
							<AntDesign
								name='pluscircleo'
								size={24}
								color={focused ? 'black' : 'gray'}
							/>
						);
					}
				},
				tabBarActiveTintColor: 'black',
				tabBarInactiveTintColor: 'gray',
				tabBarOptions: {
					style: {
						height: 100,
					},
					labelStyle: {
						fontSize: 20,
					},
				},
				tabBarLabelStyle: {
					fontSize: 12,
				},
			})}
		>
			<Tab.Screen name='One' component={OneScreen} />
			<Tab.Screen name='Two' component={TwoScreen} />
		</Tab.Navigator>
	);
}
