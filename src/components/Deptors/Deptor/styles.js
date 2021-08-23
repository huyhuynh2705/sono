import { StyleSheet } from 'react-native';

import { themeWhite, themeRed, themeColor, themeDarkGray } from '../../../helper/color';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 10,
		marginHorizontal: 10,
		backgroundColor: themeWhite,
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
	accept1: {
		backgroundColor: themeColor,
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginBottom: 5,
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
	container2: {
		marginTop: -10,
		marginHorizontal: 10,
		backgroundColor: themeWhite,
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
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
