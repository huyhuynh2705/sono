import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getDepts, getDeptors, getSettings } from '../../action/index';

import Dept from './Dept/Dept';

import styles from './styles';

const Depts = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.depts);

	useEffect(() => {
		dispatch(getDepts());
		dispatch(getDeptors());
		dispatch(getSettings());
	}, []);

	return data?.length > 0 ? (
		<View>
			<View style={{ zIndex: 1, position: 'relative' }}>
				{data?.map((dept, index) => {
					return <Dept key={index} data={dept} />;
				})}
			</View>
		</View>
	) : (
		<View style={styles.container}>
			<Text>Không có ai mượn tiền.</Text>
		</View>
	);
};

export default Depts;
