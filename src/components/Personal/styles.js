import { StyleSheet } from 'react-native';

import { selectedThemeColor, themeWhite, themeRed, themeColor } from '../../helper/color';

const styles = StyleSheet.create({
	container: {
		backgroundColor: themeWhite,
		marginVertical: 10,
		marginHorizontal: 10,
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 5,
		alignItems: 'center',
	},
	text: {
		fontSize: 14,
		textAlign: 'center',
	},
	text2: {
		fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 5,
	},
	container2: {
		backgroundColor: themeRed,
		marginVertical: 10,
		marginHorizontal: 10,
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 5,
	},
	text3: {
		fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold',
		color: themeWhite,
	},
	accept: {
		backgroundColor: themeRed,
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginBottom: 10,
	},
	cancel: {
		backgroundColor: themeColor,
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginBottom: 10,
	},
	container3: {
		backgroundColor: themeWhite,
		marginVertical: 10,
		marginHorizontal: 10,
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 5,
	},
	buttonContainer: {
		borderRadius: 5,
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '100%',
	},
	button1: {
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		backgroundColor: themeColor,
		padding: 10,
		alignItems: 'center',
		flexGrow: 1,
		flexBasis: 0,
		flexShrink: 0,
	},
	button1Active: {
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		backgroundColor: selectedThemeColor,
		padding: 10,
		alignItems: 'center',
		flexGrow: 1,
		flexBasis: 0,
		flexShrink: 0,
	},
	button2: {
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		backgroundColor: themeColor,
		padding: 10,
		alignItems: 'center',
		flexGrow: 1,
		flexBasis: 0,
		flexShrink: 0,
	},
	button2Active: {
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		backgroundColor: selectedThemeColor,
		padding: 10,
		alignItems: 'center',
		flexGrow: 1,
		flexBasis: 0,
		flexShrink: 0,
	},
});

export default styles;
