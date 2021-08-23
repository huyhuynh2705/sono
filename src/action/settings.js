import AsyncStorage from '@react-native-async-storage/async-storage';

import { TYPE_UNIT, DEFAULT_TAB } from '../helper/constant';

const settingsStore = '@settings';

export const getSettings = () => async (dispatch) => {
	try {
		const jsonValue = await AsyncStorage.getItem(settingsStore);
		if (jsonValue) {
			dispatch({ type: 'GET_SETTINGS', payload: JSON.parse(jsonValue) });
		} else {
			await AsyncStorage.setItem(
				settingsStore,
				JSON.stringify({ typeUnit: TYPE_UNIT.THOUSAND, default: DEFAULT_TAB.DEPT })
			);
			dispatch({ type: 'GET_SETTINGS', payload: { typeUnit: TYPE_UNIT.THOUSAND, default: DEFAULT_TAB.DEPT } });
		}
	} catch (e) {
		console.log(e);
	}
};

export const changeSettings = (setting) => async (dispatch) => {
	try {
		await AsyncStorage.setItem(settingsStore, JSON.stringify({ typeUnit: setting.typeUnit, default: setting.default }));
		dispatch({ type: 'CHANGE_SETTINGS', payload: { typeUnit: setting.typeUnit, default: setting.default } });
	} catch (e) {
		console.log(e);
	}
};
