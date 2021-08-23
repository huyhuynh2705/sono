const deptorsReducer = (deptors = [], action) => {
	switch (action.type) {
		case 'GET_DEPTORS':
			// case 'ADD_DEPTOR':
			// case 'PAY_DEPT':
			return action.payload;
		case 'UPDATE_DEPTOR':
			if (deptors.length === 0) return [action.payload];
			return [action.payload, ...deptors.filter((deptor) => deptor.name !== action.payload.name)];
		case 'DELETE_DEPTOR':
			return deptors.filter((deptor) => deptor.name !== action.payload);
		case 'DELETE_ALL':
			return [];
		default:
			return deptors;
	}
};

export default deptorsReducer;
