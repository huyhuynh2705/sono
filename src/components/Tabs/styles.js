import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	tab: {
		padding: 10,
		backgroundColor: '#6fceba',
		borderColor: '#C0C0C0',
		borderTopWidth: 1,
		alignItems: 'center',
		flexGrow: 1,
		flexBasis: 0,
		flexShrink: 0,
	},
	activeTab: {
		padding: 10,
		backgroundColor: '#6bb3a4',
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
