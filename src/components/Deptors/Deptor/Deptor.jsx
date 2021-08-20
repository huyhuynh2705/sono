import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { deleteDeptor } from '../../../action';

import styles from './styles';

const Deptor = ({ data }) => {
	const dispatch = useDispatch();
	const [isOpenDelete, setIsOpenDelete] = useState(false);
	const [unable, setUnable] = useState(false);
	const depts = useSelector((state) => state.depts);

	const isUnableToDelete = () => {
		return depts?.filter((dept) => dept.name === data.name).length === 0 ? true : false;
	};

	const handleDelete = () => {
		if (isUnableToDelete()) {
			dispatch(deleteDeptor(data.name));
			setIsOpenDelete(false);
		} else {
			setUnable(true);
			setIsOpenDelete(false);
		}
	};

	return (
		<View>
			<View style={styles.container}>
				<View style={{ maxWidth: '80%' }}>
					<Text style={styles.text}>
						Tên người mượn: <Text style={styles.text2}>{data.name}</Text>
					</Text>
					<Text style={styles.text}>
						Tổng đã mượn: <Text style={styles.text2}>{String(data.dept).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</Text>
					</Text>
					<Text style={styles.text}>
						Tổng đã trả: <Text style={styles.text2}>{String(data.pay).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</Text>
					</Text>
					<Text style={styles.text}>
						Còn nợ:{' '}
						<Text style={styles.text2}>
							{String(Number(data.dept) - Number(data.pay)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
						</Text>
					</Text>
				</View>
				<TouchableOpacity style={styles.delete} onPress={() => setIsOpenDelete(true)}>
					<Text style={styles.text3}>Xóa</Text>
				</TouchableOpacity>
			</View>
			{unable && (
				<View style={styles.container3}>
					<Text style={{ color: '#f24343', textAlign: 'center', marginBottom: 5 }}>
						Không thể xóa {data.name} vì còn nợ chưa trả.
					</Text>
					<TouchableOpacity style={styles.accept} onPress={() => setUnable(false)}>
						<Text style={{ color: '#FFFFFF' }}>Đồng ý</Text>
					</TouchableOpacity>
				</View>
			)}
			{isOpenDelete && (
				<View style={styles.container2}>
					<Text style={{ textAlign: 'center', marginBottom: 5, fontWeight: 'bold' }}>Xóa {data.name}?</Text>
					<TouchableOpacity style={styles.accept} onPress={() => handleDelete()}>
						<Text style={{ color: '#FFFFFF' }}>Đồng ý</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cancel} onPress={() => setIsOpenDelete(false)}>
						<Text style={{ color: '#FFFFFF' }}>Hủy</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default Deptor;
