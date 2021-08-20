import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 10,
		marginHorizontal: 10,
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 5,
	},
	text: {
		fontSize: 14,
	},
	text2: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	text3: {
		color: '#f24343',
		fontSize: 16,
		fontWeight: 'bold',
	},
	delete: {
		backgroundColor: '#f8d8d8',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 5,
	},
	accept: {
		backgroundColor: '#6fceba',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginBottom: 10,
	},
	cancel: {
		backgroundColor: '#f24343',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginBottom: 10,
	},
	container2: {
		marginTop: -10,
		marginBottom: 10,
		marginHorizontal: 10,
		backgroundColor: '#ffffff',
		paddingHorizontal: 10,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	container3: {
		marginTop: -10,
		marginHorizontal: 10,
		backgroundColor: '#ffffff',
		paddingHorizontal: 10,
		paddingBottom: 5,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
});

export default styles;
