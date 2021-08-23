import { TYPE_UNIT, DEFAULT_TAB } from '../helper/constant';
const settingsReducer = (settings = { typeUnit: null, default: null }, action) => {
	switch (action.type) {
		case 'CHANGE_SETTINGS':
		case 'GET_SETTINGS':
			return action.payload;
		case 'DELETE_ALL':
			return { typeUnit: TYPE_UNIT.THOUSAND, default: DEFAULT_TAB.DEPT };
		default:
			return settings;
	}
};

export default settingsReducer;
