import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import AddDept from '../AddDept/AddDept';
import Depts from '../Depts/Depts';
import DeptTab from '../DeptTab/DeptTab';

import { getDeptors } from '../../action/deptors';
import { getSettings } from '../../action/settings';
import { getMyDepts } from '../../action/mydepts';
import { getDepts } from '../../action/depts';
import { getHistory } from '../../action/history';

import { DEFAULT_TAB } from '../../helper/constant';

import styles from './styles';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const tabDefault = useSelector((state) => state.settings.default);
	const [tab, setTab] = useState(0);
	const depts = useSelector((state) => state.depts);
	const mydepts = useSelector((state) => state.mydepts);

	useEffect(() => {
		setTab(tabDefault === DEFAULT_TAB.DEPT ? 0 : 1);
	}, [tabDefault]);

	useEffect(() => {
		dispatch(getDepts());
		dispatch(getDeptors());
		dispatch(getSettings());
		dispatch(getMyDepts());
		dispatch(getHistory());
	}, []);

	return (
		<View style={styles.container}>
			<DeptTab tab={tab} setTab={setTab} />
			<AddDept tab={tab} />
			<Depts tab={tab} data={tab === 0 ? depts : mydepts} />
		</View>
	);
};

export default HomeScreen;
