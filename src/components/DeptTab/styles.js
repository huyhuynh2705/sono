import { StyleSheet } from 'react-native';

import { themeColor, selectedThemeColor } from '../../helper/color';

const styles = StyleSheet.create({
	buttonContainer: {
		marginTop: 10,
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
