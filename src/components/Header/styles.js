import { StyleSheet } from 'react-native';

import { themeColor } from '../../helper/color';

const styles = StyleSheet.create({
	header: {
		backgroundColor: themeColor,
		height: 100,
		paddingHorizontal: 25,
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		marginTop: 25,
		color: '#ffffff',
		fontSize: 25,
		fontWeight: 'bold',
	},
});

export default styles;
