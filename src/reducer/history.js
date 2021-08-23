const historyReducer = (history = [], action) => {
	switch (action.type) {
		case 'GET_HISTORY':
			return action.payload;
		case 'PAY_ALL':
			return [action.payload, ...history];
		case 'DELETE_HISTORY':
			return history.filter((dept) => dept.index !== action.payload.index);
		case 'DELETE_ALL':
			return [];
		default:
			return history;
	}
};

export default historyReducer;
