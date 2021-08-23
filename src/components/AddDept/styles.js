import { StyleSheet } from 'react-native';

import { themeRed, themeColor, themeDarkGray, themeWhite } from '../../helper/color';

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		backgroundColor: themeWhite,
		borderRadius: 5,
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
	},
	addContainer: {
		backgroundColor: themeColor,
		marginTop: 10,
		padding: 15,
		borderRadius: 5,
		alignItems: 'center',
		borderColor: themeDarkGray,
		borderWidth: 1,
		borderRadius: 5,
	},
	addDeptText: {
		color: themeWhite,
		fontWeight: 'bold',
		fontSize: 16,
	},
	input: {
		paddingHorizontal: 15,
		width: '100%',
		height: 50,
		borderColor: themeDarkGray,
		borderWidth: 1,
		borderRadius: 5,
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
	text: {
		color: themeWhite,
		fontWeight: 'bold',
		fontSize: 16,
	},
	deptor: {
		backgroundColor: themeWhite,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: themeDarkGray,
		padding: 10,
		marginRight: 5,
		marginTop: 10,
	},
});

export default styles;
