import AsyncStorage from '@react-native-async-storage/async-storage';

const deptorsStore = '@deptors';

const addOrUpdateDeptor = async (form) => {
	try {
		const oldDeptors = await AsyncStorage.getItem(deptorsStore);
		const parsedDeptors = JSON.parse(oldDeptors);
		await AsyncStorage.setItem(deptorsStore, JSON.stringify([form, ...parsedDeptors]));
	} catch (e) {
		console.log(e);
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
		console.log(e);
	}
};

export const updateDeptOfDeptors = async (name, value, type) => {
	try {
		const oldDeptors = await AsyncStorage.getItem(deptorsStore);
		const parsedDeptors = JSON.parse(oldDeptors);
		const newDeptors = {
			name: name,
			dept: type === 'addDept' ? value : 0,
			pay: 0,
			myDept: type === 'addMyDept' ? value : 0,
			myPay: 0,
		};
		if (parsedDeptors.length === 0) {
			await addOrUpdateDeptor(newDeptors);
			return newDeptors;
		} else {
			if (parsedDeptors.filter((deptor) => deptor.name === name).length === 0) {
				await addOrUpdateDeptor(newDeptors);
				return newDeptors;
			} else {
				const oldDeptors = parsedDeptors.filter((deptor) => deptor.name === name)[0];
				const updatedDeptors = {
					...oldDeptors,
					dept: type === 'addDept' ? String(Number(oldDeptors.dept) + Number(value)) : oldDeptors.dept,
					myDept: type === 'addMyDept' ? String(Number(oldDeptors.myDept) + Number(value)) : oldDeptors.myDept,
				};
				await AsyncStorage.setItem(
					deptorsStore,
					JSON.stringify([updatedDeptors, ...parsedDeptors.filter((deptor) => deptor.name !== name)])
				);
				return updatedDeptors;
			}
		}
	} catch (e) {
		console.log(e);
	}
};

export const updatePayOfDeptors = async (name, value, type) => {
	try {
		const oldDeptors = await AsyncStorage.getItem(deptorsStore);
		const parsedDeptors = JSON.parse(oldDeptors);
		const oldDeptor = parsedDeptors.filter((deptor) => deptor.name === name)[0];
		const updatedDeptors = {
			...oldDeptor,
			pay: type === 'payDept' ? String(Number(oldDeptor.pay) + Number(value)) : oldDeptor.pay,
			myPay: type === 'payMyDept' ? String(Number(oldDeptor.myPay) + Number(value)) : oldDeptor.myPay,
		};
		await AsyncStorage.setItem(
			deptorsStore,
			JSON.stringify([updatedDeptors, ...parsedDeptors.filter((deptor) => deptor.name !== name)])
		);
		return updatedDeptors;
	} catch (e) {
		console.log(e);
	}
};

export const deleteDeptOfDeptors = async (name, value, type) => {
	try {
		const oldDeptors = await AsyncStorage.getItem(deptorsStore);
		const parsedDeptors = JSON.parse(oldDeptors);
		const oldDeptor = parsedDeptors.filter((deptor) => deptor.name === name)[0];
		const updatedDeptors = {
			...oldDeptor,
			dept: type === 'dept' ? String(Number(oldDeptor.dept) - Number(value)) : oldDeptor.dept,
			myDept: type === 'myDept' ? String(Number(oldDeptor.myDept) - Number(value)) : oldDeptor.myDept,
		};
		await AsyncStorage.setItem(
			deptorsStore,
			JSON.stringify([updatedDeptors, ...parsedDeptors.filter((deptor) => deptor.name !== name)])
		);
		return updatedDeptors;
	} catch (e) {
		console.log(e);
	}
};

export const deleteHistoryOfDeptors = async (name, value, type) => {
	try {
		const oldDeptors = await AsyncStorage.getItem(deptorsStore);
		const parsedDeptors = JSON.parse(oldDeptors);
		const oldDeptor = parsedDeptors.filter((deptor) => deptor.name === name)[0];
		const updatedDeptors = {
			...oldDeptor,
			dept: type === 'dept' ? String(Number(oldDeptor.dept) - Number(value)) : oldDeptor.dept,
			pay: type === 'dept' ? String(Number(oldDeptor.pay) - Number(value)) : oldDeptor.pay,
			myDept: type === 'mydepts' ? String(Number(oldDeptor.myDept) - Number(value)) : oldDeptor.myDept,
			myPay: type === 'mydepts' ? String(Number(oldDeptor.myPay) - Number(value)) : oldDeptor.myPay,
		};
		await AsyncStorage.setItem(
			deptorsStore,
			JSON.stringify([updatedDeptors, ...parsedDeptors.filter((deptor) => deptor.name !== name)])
		);
		return updatedDeptors;
	} catch (e) {
		console.log(e);
	}
};
