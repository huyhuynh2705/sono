import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';

import History from '../History/History';

import { getHistory } from '../../action/history';

import styles from './styles';
const HistoryScreen = () => {
	const dispatch = useDispatch();
	const history = useSelector((state) => state.history);

	useEffect(() => {
		dispatch(getHistory());
	}, []);

	return (
		<View style={styles.container}>
			<History history={history} />
		</View>
	);
};

export default HistoryScreen;
