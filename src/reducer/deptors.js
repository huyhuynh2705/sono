const deptorsReducer = (deptors = [], action) => {
	switch (action.type) {
		case 'GET_DEPTORS':
		case 'ADD_DEPTOR':
		case 'PAY_DEPT':
			return action.payload;
		case 'DELETE_DEPTOR':
			return deptors.filter((deptor) => deptor.name !== action.payload);
		case 'DELETE_ALL':
			return [];
		default:
			return deptors;
	}
};

export default deptorsReducer;
