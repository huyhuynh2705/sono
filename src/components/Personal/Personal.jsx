import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { deleteAll } from '../../action/index';
import { changeSettings, getSettings } from '../../action/settings';
import { TYPE_UNIT, DEFAULT_TAB } from '../../helper/constant';

import styles from './styles';

const Personal = () => {
	const dispatch = useDispatch();
	const [confirm, setConfirm] = useState(false);
	const settings = useSelector((state) => state.settings);
	const deptor = useSelector((state) => state.deptors);
	const depts = useSelector((state) => state.depts);

	const sumValue = (list, type) => {
		if (list.length === 0) return 0;
		if (type === 'dept') {
			let total = 0;
			for (let i of list) {
				total += Number(i.dept);
			}
			return total;
		} else if (type === 'pay') {
			let total = 0;
			for (let i of list) {
				total += Number(i.pay);
			}
			return total;
		}
	};

	const sumMyDeptValue = (list, type) => {
		if (list.length === 0) return 0;
		if (type === 'dept') {
			let total = 0;
			for (let i of list) {
				total += Number(i.myDept);
			}
			return total;
		} else if (type === 'pay') {
			let total = 0;
			for (let i of list) {
				total += Number(i.myPay);
			}
			return total;
		}
	};

	const totalDept = String(sumValue(deptor, 'dept'));
	const totalPay = String(sumValue(deptor, 'pay'));
	const totalMyDept = String(sumMyDeptValue(deptor, 'dept'));
	const totalMyPay = String(sumMyDeptValue(deptor, 'pay'));

	const handleChangeUnit = () => {
		dispatch(
			changeSettings({
				typeUnit: settings.typeUnit === TYPE_UNIT.UNIT ? TYPE_UNIT.THOUSAND : TYPE_UNIT.UNIT,
				default: settings.default,
			})
		);
	};

	const handleChangeDefault = () => {
		dispatch(
			changeSettings({
				typeUnit: settings.typeUnit,
				default: settings.default === DEFAULT_TAB.DEPT ? DEFAULT_TAB.MY_DEPT : DEFAULT_TAB.DEPT,
			})
		);
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
					<Text style={styles.text}>???? cho m?????n: </Text>
					<Text style={styles.text2}>{totalDept?.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}??</Text>
				</View>
				<View>
					<Text style={styles.text}>???? ???????c tr???: </Text>
					<Text style={styles.text2}>{totalPay.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}??</Text>
				</View>
				<View>
					<Text style={styles.text}>Ch??a ???????c tr???: </Text>
					<Text style={styles.text2}>
						{String(Number(totalDept) - Number(totalPay)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}??
					</Text>
				</View>
				<View>
					<Text style={styles.text}> S??? kho???n ch??a tr??? h???t: </Text>
					<Text style={styles.text2}>{depts?.length}</Text>
				</View>
				<View>
					<Text style={styles.text}>???? m?????n: </Text>
					<Text style={styles.text2}>{totalMyDept?.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}??</Text>
				</View>
				<View>
					<Text style={styles.text}>???? tr???: </Text>
					<Text style={styles.text2}>{totalMyPay.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}??</Text>
				</View>
				<View>
					<Text style={styles.text}>C??n n???: </Text>
					<Text style={styles.text2}>
						{String(Number(totalMyDept) - Number(totalMyPay)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}??
					</Text>
				</View>
			</View>
			<View style={styles.container}>
				<Text style={(styles.text, { marginBottom: 5 })}>????n v??? nh???p:</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={settings.typeUnit === TYPE_UNIT.UNIT ? styles.button1Active : styles.button1}
						disabled={settings.typeUnit === TYPE_UNIT.UNIT}
						onPress={() => {
							handleChangeUnit();
						}}
					>
						<Text style={{ color: settings.typeUnit === TYPE_UNIT.UNIT ? '#DDDDDD' : '#FFFFFF' }}>?????ng</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={settings.typeUnit === TYPE_UNIT.THOUSAND ? styles.button2Active : styles.button2}
						disabled={settings.typeUnit === TYPE_UNIT.THOUSAND}
						onPress={() => {
							handleChangeUnit();
						}}
					>
						<Text style={{ color: settings.typeUnit === TYPE_UNIT.THOUSAND ? '#DDDDDD' : '#FFFFFF' }}>Ngh??n ?????ng</Text>
					</TouchableOpacity>
				</View>
				<Text style={(styles.text, { marginVertical: 5 })}>S??? m???c ?????nh:</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={settings.default === DEFAULT_TAB.DEPT ? styles.button1Active : styles.button1}
						disabled={settings.default === DEFAULT_TAB.DEPT}
						onPress={() => {
							handleChangeDefault();
						}}
					>
						<Text style={{ color: settings.default === DEFAULT_TAB.DEPT ? '#DDDDDD' : '#FFFFFF' }}>S??? cho m?????n</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={settings.default === DEFAULT_TAB.MY_DEPT ? styles.button2Active : styles.button2}
						disabled={settings.default === DEFAULT_TAB.MY_DEPT}
						onPress={() => {
							handleChangeDefault();
						}}
					>
						<Text style={{ color: settings.default === DEFAULT_TAB.MY_DEPT ? '#DDDDDD' : '#FFFFFF' }}>S??? ??i m?????n</Text>
					</TouchableOpacity>
				</View>
			</View>
			{!confirm ? (
				<TouchableOpacity style={styles.container2} onPress={() => setConfirm(true)}>
					<Text style={styles.text3}>X??a t???t c??? d??? li???u</Text>
				</TouchableOpacity>
			) : (
				<View style={styles.container3}>
					<Text style={{ textAlign: 'center', marginBottom: 5, fontWeight: 'bold' }}>X??c nh???n x??a t???t c??? d??? li???u?</Text>
					<TouchableOpacity style={styles.cancel} onPress={() => setConfirm(false)}>
						<Text style={styles.text3}>H???y</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.accept} onPress={() => handleDeleteAll()}>
						<Text style={styles.text3}>?????ng ??</Text>
					</TouchableOpacity>
				</View>
			)}
			<View style={{ marginBottom: 10 }}>
				<Text style={{ textAlign: 'center', color: '#BBBBBB' }}>By: Hu???nh Quang Huy</Text>
			</View>
		</View>
	);
};

export default Personal;
