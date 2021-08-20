import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import moment from 'moment';

import Pay from '../../Pay/Pay';

import styles from './styles';

const Dept = ({ data }) => {
	const [isOpenDetail, setIsOpenDetail] = useState(false);

	const date = moment(data.date).format('L');

	const handleClick = (e) => {
		setIsOpenDetail(!isOpenDetail);
	};

	return (
		<View>
			<TouchableOpacity onPress={(e) => handleClick(e)}>
				<View style={styles.container}>
					<View style={{ maxWidth: '80%' }}>
						<Text style={styles.text}>
							Người mượn: <Text style={styles.text2}>{data.name}</Text>
						</Text>
						<Text style={styles.text}>
							Số tiền: <Text style={styles.text2}>{String(data.value).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</Text>
						</Text>
						<Text style={styles.text}>
							Ngày mượn: {date.slice(3, 5) + '/' + date.slice(0, 2) + '/' + date.slice(6, 10)}
						</Text>
						<Text style={styles.text}>Ghi chú: {data.note}</Text>
					</View>
					{/* <View style={styles.pay}>
						<Text style={styles.text3}>✓</Text>
					</View> */}
				</View>
			</TouchableOpacity>
			{isOpenDetail && (
				<Pay
					style={{ zIndex: 2, position: 'relative' }}
					data={data}
					isOpenDetail={isOpenDetail}
					setIsOpenDetail={setIsOpenDetail}
				/>
			)}
		</View>
	);
};

export default Dept;
