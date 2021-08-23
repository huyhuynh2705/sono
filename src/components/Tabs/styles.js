import { StyleSheet } from 'react-native';

import { themeColor, selectedThemeColor, themeDarkGray } from '../../helper/color';

const styles = StyleSheet.create({
	container: {
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
	tab: {
		padding: 10,
		backgroundColor: themeColor,
		borderColor: themeDarkGray,
		borderTopWidth: 1,
		alignItems: 'center',
		flexGrow: 1,
		flexBasis: 0,
		flexShrink: 0,
	},
	activeTab: {
		padding: 10,
		backgroundColor: selectedThemeColor,
		borderColor: '#C0C0C0',
		borderTopWidth: 1,
		alignItems: 'center',
		flexGrow: 1,
		flexBasis: 0,
		flexShrink: 0,
	},
	text: {
		fontSize: 14,
		color: '#FFFFFF',
	},
});

export default styles;
