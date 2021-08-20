import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>SoNo</Text>
		</View>
	);
};

export default Header;
