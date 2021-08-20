import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Deptor from './Deptor/Deptor';

import styles from './styles';

const Deptors = () => {
	const data = useSelector((state) => state.deptors);

	return data?.length > 0 ? (
		<View style={{ marginBottom: 10 }}>
			<View style={{ zIndex: 1, position: 'relative' }}>
				{data?.map((deptor, index) => {
					return <Deptor key={index} data={deptor} />;
				})}
			</View>
		</View>
	) : (
		<View style={styles.container}>
			<Text>Không có người mượn gần đây.</Text>
		</View>
	);
};

export default Deptors;
