const deptsReducer = (depts = [], action) => {
	switch (action.type) {
		case 'GET_DEPTS':
			return action.payload;
		case 'ADD_DEPT':
			return [action.payload, ...depts];
		case 'DELETE_DEPT':
		case 'PAY_ALL':
			return depts.filter((dept) => dept.index !== action.payload.index);
		case 'PAY_AMOUNT':
			return depts.map((dept) =>
				dept.index !== action.payload.index ? dept : { ...dept, value: String(dept.value - action.payload.amount) }
			);
		case 'DELETE_ALL':
			return [];
		default:
			return depts;
	}
};

export default deptsReducer;
