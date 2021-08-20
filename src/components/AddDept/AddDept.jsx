import React, { useState } from 'react';
import { Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addDept } from '../../action/index';
import { TYPE_UNIT } from '../../helper/constant';

import styles from './styles';

const initialState = { name: '', value: '', note: '', date: null };

const AddDept = () => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const [form, setForm] = useState(initialState);
	const recentDeptors = useSelector((state) => state.deptors);
	const typeUnit = useSelector((state) => state.settings.typeUnit);
	const handleAdd = () => {
		Keyboard.dismiss();
		if (form.name.trim() !== '' && form.value.trim() !== '' && !isNaN(form.value)) {
			dispatch(addDept({ ...form, date: new Date(), index: Date.now() }));
			setIsOpen(false);
			setForm(initialState);
		}
	};

	return isOpen ? (
		<View style={{ marginBottom: 10 }}>
			<View style={styles.container}>
				<TextInput
					value={form.name}
					style={styles.input}
					placeholder={'Người mượn'}
					onChangeText={(text) => setForm({ ...form, name: text })}
				/>
			</View>
			<ScrollView horizontal={true} style={styles.deptorContainer}>
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
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					onPress={() => {
						setIsOpen(false);
						setForm(initialState);
					}}
				>
					<View style={styles.cancelButton}>
						<Text style={styles.text}>Hủy</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => handleAdd()}>
					<View style={styles.addButton}>
						<Text style={styles.text}>Thêm</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	) : (
		<TouchableOpacity onPress={() => setIsOpen(true)}>
			<View style={styles.addContainer}>
				<Text style={styles.addDeptText}>Thêm</Text>
			</View>
		</TouchableOpacity>
	);
};

export default AddDept;
