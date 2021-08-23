import AsyncStorage from '@react-native-async-storage/async-storage';

import { updateDeptOfDeptors, updatePayOfDeptors, deleteDeptOfDeptors } from './deptors';

const deptsStore = '@depts';
const historyStore = '@history';

export const getDepts = () => async (dispatch) => {
	try {
		const jsonValue = await AsyncStorage.getItem(deptsStore);
		if (jsonValue) {
			dispatch({ type: 'GET_DEPTS', payload: JSON.parse(jsonValue) });
		} else {
			await AsyncStorage.setItem(deptsStore, JSON.stringify([]));
			dispatch({ type: 'GET_DEPTS', payload: [] });
		}
	} catch (e) {
		console.log(e);
	}
};

export const addDept = (form) => async (dispatch) => {
	try {
		const oldDepts = await AsyncStorage.getItem(deptsStore);
		const parsedDepts = JSON.parse(oldDepts);
		const updatedForm = { ...form, pay: 0, datePay: null, index: Date.now(), type: 'dept' };
		await AsyncStorage.setItem(deptsStore, JSON.stringify([updatedForm, ...parsedDepts]));
		dispatch({ type: 'ADD_DEPT', payload: updatedForm });

		const updatedDeptors = await updateDeptOfDeptors(form.name, form.value, 'addDept');
		dispatch({ type: 'UPDATE_DEPTOR', payload: updatedDeptors });
	} catch (e) {
		console.log(e);
	}
};

export const payAll = (data) => async (dispatch) => {
	try {
		const oldDepts = await AsyncStorage.getItem(deptsStore);
		const parsedDepts = JSON.parse(oldDepts);
		await AsyncStorage.setItem(deptsStore, JSON.stringify(parsedDepts.filter((dept) => dept.index !== data.index)));

		const payDept = parsedDepts.filter((dept) => dept.index === data.index)[0];
		const oldHistory = await AsyncStorage.getItem(historyStore);
		const parsedHistory = JSON.parse(oldHistory);
		await AsyncStorage.setItem(historyStore, JSON.stringify([{ ...payDept, datePay: new Date() }, ...parsedHistory]));
		dispatch({ type: 'PAY_ALL', payload: data });

		const updatedDeptors = await updatePayOfDeptors(data.name, data.value, 'payDept');
		dispatch({ type: 'UPDATE_DEPTOR', payload: updatedDeptors });
	} catch (e) {
		console.log(e);
	}
};

export const payAmount = (data, amount) => async (dispatch) => {
	try {
		const oldDepts = await AsyncStorage.getItem(deptsStore);
		const parsedDeptse = JSON.parse(oldDepts);
		await AsyncStorage.setItem(
			deptsStore,
			JSON.stringify(
				parsedDeptse.map((dept) =>
					dept.index === data.index
						? { ...dept, value: String(dept.value - amount), pay: String(dept.pay + amount) }
						: dept
				)
			)
		);
		dispatch({ type: 'PAY_AMOUNT', payload: { index: data.index, amount: amount } });

		const updatedDeptors = await updatePayOfDeptors(data.name, amount, 'payDept');
		dispatch({ type: 'UPDATE_DEPTOR', payload: updatedDeptors });
	} catch (e) {
		console.log(e);
	}
};

export const deleteDept = (data) => async (dispatch) => {
	try {
		const oldDepts = await AsyncStorage.getItem(deptsStore);
		const parsedDeptse = JSON.parse(oldDepts);
		await AsyncStorage.setItem(deptsStore, JSON.stringify(parsedDeptse.filter((dept) => dept.index !== data.index)));
		dispatch({ type: 'DELETE_DEPT', payload: data });

		const updatedDeptors = await deleteDeptOfDeptors(data.name, data.value, 'dept');
		dispatch({ type: 'UPDATE_DEPTOR', payload: updatedDeptors });
	} catch (e) {
		console.log(e);
	}
};
