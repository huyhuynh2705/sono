import AsyncStorage from '@react-native-async-storage/async-storage';

import { deleteHistoryOfDeptors } from './deptors';

const historyStore = '@history';

export const getHistory = () => async (dispatch) => {
	try {
		const jsonValue = await AsyncStorage.getItem(historyStore);
		if (jsonValue) {
			dispatch({ type: 'GET_HISTORY', payload: JSON.parse(jsonValue) });
		} else {
			await AsyncStorage.setItem(historyStore, JSON.stringify([]));
			dispatch({ type: 'GET_HISTORY', payload: [] });
		}
	} catch (e) {
		console.log(e);
	}
};

export const deleteHistory = (data) => async (dispatch) => {
	try {
		const oldDepts = await AsyncStorage.getItem(historyStore);
		const parsedDeptse = JSON.parse(oldDepts);
		await AsyncStorage.setItem(historyStore, JSON.stringify(parsedDeptse.filter((dept) => dept.index !== data.index)));
		dispatch({ type: 'DELETE_HISTORY', payload: data });
		const updatedDeptors = await deleteHistoryOfDeptors(data.name, data.value, data.type);
		dispatch({ type: 'UPDATE_DEPTOR', payload: updatedDeptors });
	} catch (e) {
		console.log(e);
	}
};
