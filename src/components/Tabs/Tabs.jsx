import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import styles from './styles';

const Tabs = ({ tab, setTab }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={tab === 0 ? styles.activeTab : styles.tab} onPress={() => setTab(0)}>
				<Image style={{ height: 15, width: 15, marginBottom: 2 }} source={require('../../../assets/home.png')} />
				<Text style={styles.text}>Sổ nợ</Text>
			</TouchableOpacity>
			<TouchableOpacity style={tab === 1 ? styles.activeTab : styles.tab} onPress={() => setTab(1)}>
				<Image style={{ height: 15, width: 17, marginBottom: 2 }} source={require('../../../assets/friends.png')} />
				<Text style={styles.text}>Bạn bè</Text>
			</TouchableOpacity>
			<TouchableOpacity style={tab === 2 ? styles.activeTab : styles.tab} onPress={() => setTab(2)}>
				<Image style={{ height: 15, width: 17, marginBottom: 2 }} source={require('../../../assets/me.png')} />
				<Text style={styles.text}>Cá nhân</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Tabs;
