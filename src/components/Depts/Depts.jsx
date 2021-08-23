import React from 'react';
import { View, Text } from 'react-native';

import Dept from './Dept/Dept';

import styles from './styles';

const Depts = ({ tab, data }) => {
	return (
		<View>
			{data?.length > 0 ? (
				<View style={styles.dept}>
					{data?.map((dept, index) => {
						return <Dept key={index} data={dept} tab={tab} />;
					})}
				</View>
			) : (
				<View style={styles.container}>
					{tab === 0 ? <Text>Không có ai mượn tiền.</Text> : <Text>Không mượn tiền ai.</Text>}
				</View>
			)}
		</View>
	);
};

export default Depts;
