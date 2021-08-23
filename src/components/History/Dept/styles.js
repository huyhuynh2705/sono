import { StyleSheet } from 'react-native';

import { themeDarkGray, themeWhite, themeRed, themeColor } from '../../../helper/color';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 5,
	},
	container2: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
		backgroundColor: '#edf8f6',
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
	pay: {
		width: 35,
		height: 35,
		borderColor: '#95edda',
		borderWidth: 3,
		borderRadius: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
	},
	text3: {
		color: '#95edda',
		fontSize: 16,
		fontWeight: 'bold',
	},
	container3: {
		backgroundColor: themeWhite,
		marginTop: -20,
		marginBottom: 10,
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	container4: {
		backgroundColor: '#edf8f6',
		marginBottom: 10,
		marginTop: -20,
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	delete: {
		backgroundColor: themeRed,
		borderColor: themeDarkGray,
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		width: '100%',
	},
	cancel: {
		backgroundColor: themeRed,
		borderColor: themeDarkGray,
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		width: '49%',
		marginRight: '1%',
	},
	accept: {
		backgroundColor: themeColor,
		borderColor: themeDarkGray,
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		width: '49%',
		marginLeft: '1%',
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});

export default styles;
