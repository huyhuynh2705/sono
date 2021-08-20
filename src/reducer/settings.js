import { TYPE_UNIT } from '../helper/constant';
const settingsReducer = (settings = { typeUnit: null }, action) => {
	switch (action.type) {
		case 'CHANGE_SETTINGS':
		case 'GET_SETTINGS':
			return action.payload;
		case 'DELETE_ALL':
			return { typeUnit: TYPE_UNIT.THOUSAND };
		default:
			return settings;
	}
};

export default settingsReducer;
