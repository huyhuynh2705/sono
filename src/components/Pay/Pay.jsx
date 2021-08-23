import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { payMyDeptAll, payMyDeptAmount, deleteMyDept } from '../../action/mydepts';
import { payAll, payAmount, deleteDept } from '../../action/depts';
import { TYPE_UNIT } from '../../helper/constant';

import styles from './styles';

const Pay = ({ data, setIsOpenDetail, tab }) => {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');
	const [confirm, setConfirm] = useState(false);
	const [confirmPayDivide, setConfirmPayDivide] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(false);
	const typeUnit = useSelector((state) => state.settings.typeUnit);

	const handlePay = () => {
		if (tab === 0) dispatch(payAll(data));
		else if (tab === 1) dispatch(payMyDeptAll(data, data.value));
		setConfirm(false);
		setIsOpenDetail(false);
		setConfirmDelete(false);
	};

	const handleDelete = () => {
		if (tab === 0) dispatch(deleteDept(data));
		else if (tab === 1) dispatch(deleteMyDept(data, data.value));
		setConfirm(false);
		setConfirmDelete(false);
		setIsOpenDetail(false);
	};

	const handlePayDivide = () => {
		Keyboard.dismiss();
		if (tab === 0) {
			if (value == data.value) dispatch(payAll(data));
			else dispatch(payAmount(data, value));
		} else if (tab === 1) {
			if (value == data.value) dispatch(payMyDeptAll(data, data.value));
			else dispatch(payMyDeptAmount(data, value));
		}
		setConfirmPayDivide(false);
		setConfirmDelete(false);
		setIsOpenDetail(false);
	};

	return (
		<View style={styles.container}>
			{!confirm ? (
				<View>
					<TouchableOpacity
						style={styles.payAll}
						onPress={() => {
							setConfirm(true);
							setConfirmPayDivide(false);
						}}
					>
						<Text style={{ color: '#FFFFFF' }}>Trả hết</Text>
					</TouchableOpacity>
				</View>
			) : (
				<View style={{ marginTop: -10, marginBottom: 10 }}>
					<Text style={{ textAlign: 'center', marginBottom: 5, fontWeight: 'bold' }}>Xác nhận trả hết?</Text>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.cancel} onPress={() => setConfirm(false)}>
							<Text style={{ color: '#FFFFFF' }}>Hủy</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.accept} onPress={() => handlePay()}>
							<Text style={{ color: '#FFFFFF' }}>Đồng ý</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
			{!confirmPayDivide ? (
				<View>
					<TextInput
						style={styles.input}
						placeholder={`Trả một phần, đơn vị ${typeUnit === TYPE_UNIT.THOUSAND ? 'nghìn đồng' : 'đồng'}`}
						onChangeText={(text) => setValue(typeUnit === TYPE_UNIT.THOUSAND ? String(text * 1000) : text)}
						keyboardType={'number-pad'}
					/>
					<TouchableOpacity
						style={styles.payDivide}
						onPress={() => {
							if (value !== '' && !isNaN(value)) {
								setConfirmPayDivide(true);
								setConfirm(false);
							}
						}}
					>
						<Text style={{ color: '#FFFFFF' }}>Trả một phần</Text>
					</TouchableOpacity>
				</View>
			) : (
				<View>
					{Number(value) <= Number(data.value) ? (
						<View>
							<Text style={{ textAlign: 'center', marginBottom: 5, fontWeight: 'bold' }}>
								Xác nhận trả {String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đồng?
							</Text>
							<View style={styles.buttonContainer}>
								<TouchableOpacity
									style={styles.cancel}
									onPress={() => {
										setConfirmPayDivide(false);
										setValue('');
									}}
								>
									<Text style={{ color: '#FFFFFF' }}>Hủy</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.accept} onPress={() => handlePayDivide()}>
									<Text style={{ color: '#FFFFFF' }}>Đồng ý</Text>
								</TouchableOpacity>
							</View>
						</View>
					) : (
						<View>
							<Text style={{ textAlign: 'center', marginBottom: 5, fontWeight: 'bold', color: '#ec3030' }}>
								Không thể trả nhiều hơn số tiền nợ.
							</Text>
							<TouchableOpacity
								style={styles.payAll}
								onPress={() => {
									setConfirmPayDivide(false);
									setValue('');
								}}
							>
								<Text style={{ color: '#FFFFFF' }}>Đồng ý</Text>
							</TouchableOpacity>
						</View>
					)}
				</View>
			)}
			{!confirmDelete ? (
				<View>
					{!confirm && !confirmPayDivide && (
						<View style={{ marginTop: 10 }}>
							<TouchableOpacity
								style={styles.delete}
								onPress={() => {
									setConfirmDelete(true);
									setConfirm(false);
									setConfirmPayDivide(false);
								}}
							>
								<Text style={{ color: '#FFFFFF' }}>Xóa</Text>
							</TouchableOpacity>
						</View>
					)}
				</View>
			) : (
				<View style={{ marginTop: 5 }}>
					<Text style={{ textAlign: 'center', marginBottom: 5, fontWeight: 'bold' }}>Xác nhận xóa?</Text>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.cancel} onPress={() => setConfirmDelete(false)}>
							<Text style={{ color: '#FFFFFF' }}>Hủy</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.accept} onPress={() => handleDelete()}>
							<Text style={{ color: '#FFFFFF' }}>Đồng ý</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</View>
	);
};

export default Pay;
