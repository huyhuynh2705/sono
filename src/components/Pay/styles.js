import { StyleSheet } from 'react-native';

import { themeDarkGray, themeWhite, themeRed, themeColor } from '../../helper/color';

const styles = StyleSheet.create({
	container: {
		marginTop: -15,
		marginBottom: 10,
		backgroundColor: themeWhite,
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},
	payAll: {
		backgroundColor: themeColor,
		borderColor: themeDarkGray,
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginBottom: 10,
	},
	cancel: {
		backgroundColor: themeRed,
		borderColor: themeDarkGray,
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		// marginBottom: 10,
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
		// marginBottom: 10,
		width: '49%',
		marginLeft: '1%',
	},
	payDivide: {
		backgroundColor: themeColor,
		borderColor: themeDarkGray,
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
	},
	input: {
		paddingHorizontal: 15,
		height: 50,
		width: '100%',
		borderRadius: 5,
		borderColor: themeDarkGray,
		borderWidth: 1,
		marginBottom: 10,
	},
	delete: {
		backgroundColor: themeRed,
		borderColor: themeDarkGray,
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});

export default styles;
