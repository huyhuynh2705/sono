import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { deleteHistory } from '../../../action/history';

import styles from './styles';

const Dept = ({ data }) => {
	const dispatch = useDispatch();
	const [viewMore, setViewMore] = useState(false);
	const [confirm, setConfirm] = useState(false);
	const date = moment(data.date).format('L');
	const datePay = moment(data.datePay).format('L');

	const handleDelete = () => {
		dispatch(deleteHistory(data));
		setViewMore(false);
		setConfirm(false);
	};

	return (
		<View>
			<TouchableOpacity onPress={() => setViewMore(!viewMore)}>
				<View style={data.type === 'dept' ? styles.container : styles.container2}>
					<View style={{ maxWidth: '80%' }}>
						<Text style={styles.text}>
							{data.type === 'dept' ? 'Người mượn: ' : 'Mượn của: '}
							<Text style={styles.text2}>{data.name}</Text>
						</Text>
						<Text style={styles.text}>
							Số tiền: <Text style={styles.text2}>{String(data.value).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</Text>
						</Text>
						<Text style={styles.text}>
							Ngày mượn: {date.slice(3, 5) + '/' + date.slice(0, 2) + '/' + date.slice(6, 10)}
						</Text>
						<Text style={styles.text}>
							Ngày trả: {datePay.slice(3, 5) + '/' + datePay.slice(0, 2) + '/' + datePay.slice(6, 10)}
						</Text>
					</View>
					<View style={styles.pay}>
						<Text style={styles.text3}>✓</Text>
					</View>
				</View>
				{viewMore && !confirm && (
					<View style={data.type === 'dept' ? styles.container3 : styles.container4}>
						<TouchableOpacity style={styles.delete} onPress={() => setConfirm(true)}>
							<Text style={{ color: '#FFFFFF' }}>Xóa</Text>
						</TouchableOpacity>
					</View>
				)}
				{confirm && (
					<View style={data.type === 'dept' ? styles.container3 : styles.container4}>
						<Text style={{ textAlign: 'center', marginBottom: 5, fontWeight: 'bold' }}>Xác nhận xóa?</Text>
						<View style={styles.buttonContainer}>
							<TouchableOpacity style={styles.cancel} onPress={() => setConfirm(false)}>
								<Text style={{ color: '#FFFFFF' }}>Hủy</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.accept} onPress={() => handleDelete()}>
								<Text style={{ color: '#FFFFFF' }}>Đồng ý</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			</TouchableOpacity>
		</View>
	);
};

export default Dept;
