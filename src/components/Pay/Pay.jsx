import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { payAll, payAmount } from '../../action/index';
import { TYPE_UNIT } from '../../helper/constant';

import styles from './styles';

const Pay = ({ data, setIsOpenDetail }) => {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');
	const [confirm, setConfirm] = useState(false);
	const [confirmPayDivide, setConfirmPayDivide] = useState(false);
	const typeUnit = useSelector((state) => state.settings.typeUnit);

	const handlePay = () => {
		dispatch(payAll(data, data.value));
		setConfirm(false);
		setIsOpenDetail(false);
	};

	const handlePayDivide = () => {
		Keyboard.dismiss();
		if (value == data.value) dispatch(payAll(data, data.value));
		else dispatch(payAmount(data, value));
		setConfirmPayDivide(false);
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
				<View style={{ marginTop: -10 }}>
					<Text style={{ textAlign: 'center', marginBottom: 5, fontWeight: 'bold' }}>Xác nhận trả hết?</Text>
					<TouchableOpacity style={styles.payAll} onPress={() => handlePay()}>
						<Text style={{ color: '#FFFFFF' }}>Đồng ý</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cancelPayAll} onPress={() => setConfirm(false)}>
						<Text style={{ color: '#FFFFFF' }}>Hủy</Text>
					</TouchableOpacity>
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
							<TouchableOpacity style={styles.payAll} onPress={() => handlePayDivide()}>
								<Text style={{ color: '#FFFFFF' }}>Đồng ý</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.cancelPayAll}
								onPress={() => {
									setConfirmPayDivide(false);
									setValue('');
								}}
							>
								<Text style={{ color: '#FFFFFF' }}>Hủy</Text>
							</TouchableOpacity>
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
		</View>
	);
};

export default Pay;
