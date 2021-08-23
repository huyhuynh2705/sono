import React from 'react';
import { View, Text } from 'react-native';

import Dept from './Dept/Dept';

import styles from './styles';

const History = ({ history }) => {
	return (
		<View>
			{history?.length > 0 ? (
				<View style={styles.dept}>
					{history?.map((dept, index) => {
						return <Dept key={index} data={dept} />;
					})}
				</View>
			) : (
				<View style={styles.container}>
					<Text>Các khoản mượn đã trả sẽ được lưu vào lịch sử.</Text>
				</View>
			)}
		</View>
	);
};

export default History;
