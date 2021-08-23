import AsyncStorage from '@react-native-async-storage/async-storage';

import { updateDeptOfDeptors, updatePayOfDeptors, deleteDeptOfDeptors } from './deptors';

const myDeptsStore = '@mydepts';
const historyStore = '@history';

export const getMyDepts = () => async (dispatch) => {
	try {
		const jsonValue = await AsyncStorage.getItem(myDeptsStore);
		if (jsonValue) {
			dispatch({ type: 'GET_MY_DEPTS', payload: JSON.parse(jsonValue) });
		} else {
			await AsyncStorage.setItem(myDeptsStore, JSON.stringify([]));
			dispatch({ type: 'GET_MY_DEPTS', payload: [] });
		}
	} catch (e) {
		console.log(e);
	}
};

export const addMyDept = (form) => async (dispatch) => {
	try {
		const oldDepts = await AsyncStorage.getItem(myDeptsStore);
		const parsedDepts = JSON.parse(oldDepts);
		const updatedForm = { ...form, pay: 0, date: new Date(), datePay: null, index: Date.now(), type: 'mydepts' };
		await AsyncStorage.setItem(myDeptsStore, JSON.stringify([updatedForm, ...parsedDepts]));
		dispatch({ type: 'ADD_MY_DEPT', payload: updatedForm });

		const updatedDeptors = await updateDeptOfDeptors(form.name, form.value, 'addMyDept');
		dispatch({ type: 'UPDATE_DEPTOR', payload: updatedDeptors });
	} catch (e) {
		console.log(e);
	}
};

export const payMyDeptAmount = (data, amount) => async (dispatch) => {
	try {
		const oldJsonValue = await AsyncStorage.getItem(myDeptsStore);
		const parsedValue = JSON.parse(oldJsonValue);
		await AsyncStorage.setItem(
			myDeptsStore,
			JSON.stringify(
				parsedValue.map((dept) => (dept.index === data.index ? { ...dept, value: String(dept.value - amount) } : dept))
			)
		);
		dispatch({ type: 'PAY_MY_DEPT_AMOUNT', payload: { index: data.index, amount: amount } });

		const updatedDeptors = await updatePayOfDeptors(data.name, amount, 'payMyDept');
		dispatch({ type: 'UPDATE_DEPTOR', payload: updatedDeptors });
	} catch (e) {
		console.log(e);
	}
};

export const payMyDeptAll = (data) => async (dispatch) => {
	try {
		const oldJsonValue = await AsyncStorage.getItem(myDeptsStore);
		const parsedValue = JSON.parse(oldJsonValue);
		await AsyncStorage.setItem(myDeptsStore, JSON.stringify(parsedValue.filter((dept) => dept.index !== data.index)));

		const payDept = parsedValue.filter((dept) => dept.index === data.index)[0];
		const oldHistory = await AsyncStorage.getItem(historyStore);
		const parsedHistory = JSON.parse(oldHistory);
		await AsyncStorage.setItem(historyStore, JSON.stringify([{ ...payDept, datePay: new Date() }, ...parsedHistory]));
		dispatch({ type: 'PAY_MY_DEPT_ALL', payload: data });

		const updatedDeptors = await updatePayOfDeptors(data.name, data.value, 'payMyDept');
		dispatch({ type: 'UPDATE_DEPTOR', payload: updatedDeptors });
	} catch (e) {
		console.log(e);
	}
};

export const deleteMyDept = (data) => async (dispatch) => {
	try {
		const oldDepts = await AsyncStorage.getItem(myDeptsStore);
		const parsedDeptse = JSON.parse(oldDepts);
		await AsyncStorage.setItem(myDeptsStore, JSON.stringify(parsedDeptse.filter((dept) => dept.index !== data.index)));
		dispatch({ type: 'DELETE_MY_DEPT', payload: data });

		const updatedDeptors = await deleteDeptOfDeptors(data.name, data.value, 'myDept');
		dispatch({ type: 'UPDATE_DEPTOR', payload: updatedDeptors });
	} catch (e) {
		console.log(e);
	}
};
