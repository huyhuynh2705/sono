import React, { useState } from 'react';
import { Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addMyDept } from '../../action/mydepts';
import { addDept } from '../../action/depts';
import { TYPE_UNIT } from '../../helper/constant';

import styles from './styles';

const initialState = { name: '', value: '', note: '', date: null };

const AddDept = ({ tab }) => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const [form, setForm] = useState(initialState);
	const recentDeptors = useSelector((state) => state.deptors);
	const typeUnit = useSelector((state) => state.settings.typeUnit);

	const handleAdd = () => {
		Keyboard.dismiss();
		if (
			form.name.trim() !== '' &&
			form.value.trim() !== '' &&
			!isNaN(form.value) &&
			Number(form.value) > 0 &&
			isNaN(form.name.trim())
		) {
			const submitForm = { name: form.name.trim(), value: form.value.trim(), note: form.note.trim(), date: new Date() };
			if (tab === 0) dispatch(addDept(submitForm));
			else dispatch(addMyDept(submitForm));
			setIsOpen(false);
			setForm(initialState);
		}
	};

	return isOpen ? (
		<View>
			<View style={styles.container}>
				<TextInput
					value={form.name}
					style={styles.input}
					placeholder={tab === 0 ? 'Người mượn' : 'Người cho mượn'}
					onChangeText={(text) => setForm({ ...form, name: text })}
				/>
			</View>
			<ScrollView horizontal={true}>
				{recentDeptors?.map((deptor, index) => {
					return (
						<TouchableOpacity style={styles.deptor} key={index} onPress={() => setForm({ ...form, name: deptor.name })}>
							<Text>{deptor.name}</Text>
						</TouchableOpacity>
					);
				})}
			</ScrollView>
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder={`Số tiền, đơn vị ${typeUnit === TYPE_UNIT.THOUSAND ? 'nghìn đồng' : 'đồng'}`}
					onChangeText={(text) =>
						setForm({ ...form, value: typeUnit === TYPE_UNIT.THOUSAND ? String(text * 1000) : text })
					}
					keyboardType={'number-pad'}
				/>
			</View>
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder={'Ghi chú'}
					onChangeText={(text) => setForm({ ...form, note: text })}
				/>
			</View>
			<View style={{ marginTop: 10 }}>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.cancel}
						onPress={() => {
							setIsOpen(false);
							setForm(initialState);
						}}
					>
						<Text style={{ color: '#FFFFFF' }}>Hủy</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.accept} onPress={() => handleAdd()}>
						<Text style={{ color: '#FFFFFF' }}>Đồng ý</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	) : (
		<TouchableOpacity onPress={() => setIsOpen(true)}>
			<View style={styles.addContainer}>
				<Text style={styles.addDeptText}>{tab === 0 ? 'Cho mượn' : 'Đi mượn'}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default AddDept;
