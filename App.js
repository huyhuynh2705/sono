import React, { useEffect, useState, useRef } from 'react';
import { View, ScrollView, Keyboard, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import Header from './src/components/Header/Header';
import Tabs from './src/components/Tabs/Tabs';
import Deptors from './src/components/Deptors/Deptors';
import Personal from './src/components/Personal/Personal';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import HistoryScreen from './src/components/HistoryScreen/HistoryScreen';

import { store } from './src/helper/redux';

import styles from './styles';

export default function App() {
	const [tab, setTab] = useState(0);
	const [keyboardOpen, setKeboardOpen] = useState(false);
	const slideAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Keyboard.addListener('keyboardDidShow', () => {
			setKeboardOpen(true);
			slideOut();
		});
		Keyboard.addListener('keyboardDidHide', () => {
			setKeboardOpen(false);
			slideIn();
		});
	}, []);

	const slideOut = () => {
		Animated.timing(slideAnim, {
			toValue: 150,
			duration: 250,
			useNativeDriver: true,
		}).start();
	};

	const slideIn = () => {
		Animated.timing(slideAnim, {
			toValue: 0,
			duration: 250,
			useNativeDriver: true,
		}).start();
	};

	const tabRender = (tab) => {
		switch (tab) {
			case 0:
				return <HomeScreen />;
			case 1:
				return <Deptors />;
			case 2:
				return <HistoryScreen />;
			case 3:
				return <Personal />;
			default:
				return;
		}
	};

	return (
		<Provider store={store}>
			<StatusBar style='auto' />
			<View style={styles.container}>
				<Header />
				<ScrollView style={keyboardOpen ? {} : { marginBottom: 55 }}>{tabRender(tab)}</ScrollView>
				<Animated.View
					style={{
						translateY: slideAnim,
						position: 'absolute',
						width: '100%',
						bottom: 0,
					}}
				>
					<Tabs tab={tab} setTab={setTab} />
				</Animated.View>
			</View>
		</Provider>
	);
}
