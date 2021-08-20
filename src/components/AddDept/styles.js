import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		marginHorizontal: 10,
		backgroundColor: '#FFFFFF',
		borderRadius: 5,
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
	},
	addContainer: {
		backgroundColor: '#6fceba',
		marginHorizontal: 10,
		marginVertical: 10,
		padding: 15,
		borderRadius: 5,
		alignItems: 'center',
		borderColor: '#C0C0C0',
		borderWidth: 1,
		borderRadius: 5,
	},
	addDeptText: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		fontSize: 16,
	},
	input: {
		paddingHorizontal: 15,
		width: '100%',
		height: 50,
		borderColor: '#C0C0C0',
		borderWidth: 1,
		borderRadius: 5,
	},
	buttonContainer: {
		paddingTop: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: 10,
	},
	addButton: {
		backgroundColor: '#6fceba',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		width: 125,
	},
	cancelButton: {
		backgroundColor: '#f24343',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		width: 125,
	},
	text: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		fontSize: 16,
	},
	deptorContainer: {
		marginHorizontal: 10,
	},
	deptor: {
		backgroundColor: '#FFFFFF',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#aaaaaa',
		padding: 10,
		marginRight: 5,
		marginTop: 10,
	},
});

export default styles;
