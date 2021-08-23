import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const DeptTab = ({ tab, setTab }) => {
	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity
				style={tab === 0 ? styles.button1Active : styles.button1}
				disabled={tab === 0}
				onPress={() => {
					setTab(0);
				}}
			>
				<Text style={{ color: tab === 0 ? '#DDDDDD' : '#FFFFFF' }}>Sổ cho mượn</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={tab === 1 ? styles.button2Active : styles.button2}
				disabled={tab === 1}
				onPress={() => {
					setTab(1);
				}}
			>
				<Text style={{ color: tab === 1 ? '#DDDDDD' : '#FFFFFF' }}>Sổ đi mượn</Text>
			</TouchableOpacity>
		</View>
	);
};

export default DeptTab;
