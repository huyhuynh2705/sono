import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { deleteAll, changeSettings, getSettings } from '../../action/index';
import { TYPE_UNIT } from '../../helper/constant';

import styles from './styles';

const Personal = () => {
	const dispatch = useDispatch();
	const [confirm, setConfirm] = useState(false);
	const typeUnit = useSelector((state) => state.settings.typeUnit);
	const deptor = useSelector((state) => state.deptors);
	const depts = useSelector((state) => state.depts);

	const sumValue = (list, type) => {
		if (list.length === 0) return 0;
		if (type === 'dept') {
			if (list.length === 1)
				return list.reduce((deptor1, deptor2) => Number(deptor1.dept) + Number(deptor2.dept), { dept: 0 });
			return list.reduce((deptor1, deptor2) => Number(deptor1.dept) + Number(deptor2.dept));
		} else if (type === 'pay') {
			if (list.length === 1)
				return list.reduce((deptor1, deptor2) => Number(deptor1.pay) + Number(deptor2.pay), { pay: 0 });
			return list.reduce((deptor1, deptor2) => Number(deptor1.pay) + Number(deptor2.pay));
		}
	};

	const totalDept = String(sumValue(deptor, 'dept'));
	const totalPay = String(sumValue(deptor, 'pay'));

	const handleChangeUnit = () => {
		dispatch(changeSettings(typeUnit === TYPE_UNIT.UNIT ? TYPE_UNIT.THOUSAND : TYPE_UNIT.UNIT));
	};

	const handleDeleteAll = () => {
		dispatch(deleteAll());
		setConfirm(false);
	};

	useEffect(() => {
		dispatch(getSettings());
	}, []);

	return (
		<View>
			<View style={styles.container}>
				<View>
					<Text style={styles.text}>Tổng đang cho mượn: </Text>
					<Text style={styles.text2}>{totalDept?.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</Text>
				</View>
				<View>
					<Text style={styles.text}>Tổng đã được trả: </Text>
					<Text style={styles.text2}>{totalPay.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</Text>
				</View>
				<View>
					<Text style={styles.text}>Tổng chưa được trả: </Text>
					<Text style={styles.text2}>
						{String(Number(totalDept) - Number(totalPay)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
					</Text>
				</View>
				<View>
					<Text style={styles.text}>Tổng số khoản chưa trả hết: </Text>
					<Text style={styles.text2}>{depts?.length}</Text>
				</View>
			</View>
			<View style={styles.container}>
				<Text style={(styles.text, { marginBottom: 5 })}>Đơn vị nhập:</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={typeUnit === TYPE_UNIT.UNIT ? styles.button1Active : styles.button1}
						disabled={typeUnit === TYPE_UNIT.UNIT}
						onPress={() => {
							handleChangeUnit();
						}}
					>
						<Text style={{ color: typeUnit === TYPE_UNIT.UNIT ? '#DDDDDD' : '#FFFFFF' }}>Đồng</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={typeUnit === TYPE_UNIT.THOUSAND ? styles.button2Active : styles.button2}
						disabled={typeUnit === TYPE_UNIT.THOUSAND}
						onPress={() => {
							handleChangeUnit();
						}}
					>
						<Text style={{ color: typeUnit === TYPE_UNIT.THOUSAND ? '#DDDDDD' : '#FFFFFF' }}>Nghìn đồng</Text>
					</TouchableOpacity>
				</View>
			</View>
			{!confirm ? (
				<TouchableOpacity style={styles.container2} onPress={() => setConfirm(true)}>
					<Text style={styles.text3}>Xóa tất cả dữ liệu</Text>
				</TouchableOpacity>
			) : (
				<View style={styles.container3}>
					<Text style={{ textAlign: 'center', marginBottom: 5, fontWeight: 'bold' }}>Xác nhận xóa tất cả dữ liệu?</Text>
					<TouchableOpacity style={styles.cancel} onPress={() => setConfirm(false)}>
						<Text style={styles.text3}>Hủy</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.accept} onPress={() => handleDeleteAll()}>
						<Text style={styles.text3}>Đồng ý</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default Personal;
