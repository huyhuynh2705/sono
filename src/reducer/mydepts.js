const myDeptsReducer = (myDepts = [], action) => {
	switch (action.type) {
		case 'GET_MY_DEPTS':
			return action.payload;
		case 'ADD_MY_DEPT':
			return [action.payload, ...myDepts];
		case 'DELETE_MY_DEPT':
		case 'PAY_MY_DEPT_ALL':
			return myDepts.filter((dept) => dept.index !== action.payload.index);
		case 'PAY_MY_DEPT_AMOUNT':
			return myDepts.map((dept) =>
				dept.index !== action.payload.index ? dept : { ...dept, value: String(dept.value - action.payload.amount) }
			);
		case 'DELETE_ALL':
			return [];
		default:
			return myDepts;
	}
};

export default myDeptsReducer;
