import AsyncStorage from '@react-native-async-storage/async-storage';
import { TYPE_UNIT } from '../helper/constant';

const deptsStore = '@depts';
const deptorsStore = '@deptors';
const settingsStore = '@settings';

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
		console.log('Something went wrong.');
	}
};

export const getDeptors = () => async (dispatch) => {
	try {
		const jsonValue = await AsyncStorage.getItem(deptorsStore);
		if (jsonValue) {
			dispatch({ type: 'GET_DEPTORS', payload: JSON.parse(jsonValue) });
		} else {
			await AsyncStorage.setItem(deptorsStore, JSON.stringify([]));
			dispatch({ type: 'GET_DEPTORS', payload: [] });
		}
	} catch (e) {
		console.log('Something went wrong.');
	}
};

export const addDept = (form) => async (dispatch) => {
	try {
		const oldJsonValue = await AsyncStorage.getItem(deptsStore);
		const parsedValue = JSON.parse(oldJsonValue);
		await AsyncStorage.setItem(deptsStore, JSON.stringify([form, ...parsedValue]));
		dispatch({ type: 'ADD_DEPT', payload: form });

		const oldDeptors = await AsyncStorage.getItem(deptorsStore);
		const parsedDeptors = JSON.parse(oldDeptors);
		if (parsedDeptors.length === 0) {
			const updatedDeptors = { name: form.name, dept: form.value, pay: 0 };
			await AsyncStorage.setItem(deptorsStore, JSON.stringify([updatedDeptors]));
			dispatch({ type: 'ADD_DEPTOR', payload: [updatedDeptors] });
		} else {
			if (parsedDeptors.filter((deptor) => deptor.name === form.name).length === 0) {
				const updatedDeptors = { name: form.name, dept: form.value, pay: 0 };
				await AsyncStorage.setItem(deptorsStore, JSON.stringify([updatedDeptors, ...parsedDeptors]));
				dispatch({ type: 'ADD_DEPTOR', payload: [updatedDeptors, ...parsedDeptors] });
			} else {
				const oldDeptors = parsedDeptors.filter((deptor) => deptor.name === form.name)[0];
				const updatedDeptors = { ...oldDeptors, dept: String(Number(oldDeptors.dept) + Number(form.value)) };
				await AsyncStorage.setItem(
					deptorsStore,
					JSON.stringify([updatedDeptors, ...parsedDeptors.filter((deptor) => deptor.name !== form.name)])
				);
				dispatch({
					type: 'ADD_DEPTOR',
					payload: [updatedDeptors, ...parsedDeptors.filter((deptor) => deptor.name !== form.name)],
				});
			}
		}
	} catch (e) {
		console.log(e);
	}
};

export const payAll = (data, amount) => async (dispatch) => {
	try {
		const oldJsonValue = await AsyncStorage.getItem(deptsStore);
		const parsedValue = JSON.parse(oldJsonValue);
		await AsyncStorage.setItem(deptsStore, JSON.stringify(parsedValue.filter((dept) => dept.index !== data.index)));
		dispatch({ type: 'DELETE_DEPT', payload: data.index });

		const deptors = await AsyncStorage.getItem(deptorsStore);
		const parsedDeptors = JSON.parse(deptors);

		const oldDeptors = parsedDeptors.filter((deptor) => deptor.name === data.name)[0];
		const updatedDeptors = { ...oldDeptors, pay: String(Number(oldDeptors.pay) + Number(data.value)) };
		await AsyncStorage.setItem(
			deptorsStore,
			JSON.stringify([updatedDeptors, ...parsedDeptors.filter((deptor) => deptor.name !== data.name)])
		);
		dispatch({
			type: 'PAY_DEPT',
			payload: [updatedDeptors, ...parsedDeptors.filter((deptor) => deptor.name !== data.name)],
		});
	} catch (e) {
		console.log('Something went wrong.');
	}
};

export const payAmount = (data, amount) => async (dispatch) => {
	try {
		const oldJsonValue = await AsyncStorage.getItem(deptsStore);
		const parsedValue = JSON.parse(oldJsonValue);
		await AsyncStorage.setItem(
			deptsStore,
			JSON.stringify(
				parsedValue.map((dept) => (dept.index === data.index ? { ...dept, value: String(dept.value - amount) } : dept))
			)
		);
		dispatch({ type: 'PAY_AMOUNT', payload: { index: data.index, amount: amount } });

		const deptors = await AsyncStorage.getItem(deptorsStore);
		const parsedDeptors = JSON.parse(deptors);
		const oldDeptors = parsedDeptors.filter((deptor) => deptor.name === data.name)[0];
		const updatedDeptors = { ...oldDeptors, pay: String(Number(oldDeptors.pay) + Number(amount)) };
		await AsyncStorage.setItem(
			deptorsStore,
			JSON.stringify([updatedDeptors, ...parsedDeptors.filter((deptor) => deptor.name !== data.name)])
		);
		dispatch({
			type: 'PAY_DEPT',
			payload: [updatedDeptors, ...parsedDeptors.filter((deptor) => deptor.name !== data.name)],
		});
	} catch (e) {
		console.log(e);
	}
};

export const deleteDeptor = (name) => async (dispatch) => {
	try {
		const oldJsonValue = await AsyncStorage.getItem(deptorsStore);
		const parsedValue = JSON.parse(oldJsonValue);
		await AsyncStorage.setItem(deptorsStore, JSON.stringify(parsedValue.filter((deptor) => deptor.name !== name)));
		dispatch({ type: 'DELETE_DEPTOR', payload: name });
	} catch (e) {
		console.log('Something went wrong.');
	}
};

export const deleteAll = () => async (dispatch) => {
	try {
		AsyncStorage.clear();
		await AsyncStorage.setItem(deptsStore, JSON.stringify([]));
		await AsyncStorage.setItem(deptorsStore, JSON.stringify([]));
		await AsyncStorage.setItem(settingsStore, JSON.stringify({ typeUnit: TYPE_UNIT.THOUSAND }));
		dispatch({ type: 'DELETE_ALL' });
	} catch (e) {
		console.log('Something went wrong.');
	}
};

export const getSettings = () => async (dispatch) => {
	try {
		const jsonValue = await AsyncStorage.getItem(settingsStore);
		if (jsonValue) {
			dispatch({ type: 'GET_SETTINGS', payload: JSON.parse(jsonValue) });
		} else {
			await AsyncStorage.setItem(settingsStore, JSON.stringify({ typeUnit: TYPE_UNIT.THOUSAND }));
			dispatch({ type: 'GET_SETTINGS', payload: { typeUnit: TYPE_UNIT.THOUSAND } });
		}
	} catch (e) {
		console.log('Something went wrong.');
	}
};

export const changeSettings = (setting) => async (dispatch) => {
	try {
		await AsyncStorage.setItem(settingsStore, JSON.stringify({ typeUnit: setting }));
		dispatch({ type: 'CHANGE_SETTINGS', payload: { typeUnit: setting } });
	} catch (e) {
		console.log('Something went wrong.');
	}
};
