import AsyncStorage from '@react-native-async-storage/async-storage';
import { TYPE_UNIT, DEFAULT_TAB } from '../helper/constant';

const deptsStore = '@depts';
const deptorsStore = '@deptors';
const myDeptsStore = '@mydepts';
const settingsStore = '@settings';

export const deleteAll = () => async (dispatch) => {
	try {
		AsyncStorage.clear();
		await AsyncStorage.setItem(deptsStore, JSON.stringify([]));
		await AsyncStorage.setItem(deptorsStore, JSON.stringify([]));
		await AsyncStorage.setItem(myDeptsStore, JSON.stringify([]));
		await AsyncStorage.setItem(
			settingsStore,
			JSON.stringify({ typeUnit: TYPE_UNIT.THOUSAND, default: DEFAULT_TAB.DEPT })
		);
		dispatch({ type: 'DELETE_ALL' });
	} catch (e) {
		console.log(e);
	}
};
