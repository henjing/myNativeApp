import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class FlexText extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.item}>1</Text>
				<Text style={styles.item}>2</Text>
				<Text style={styles.item}>3</Text>
				<Text style={styles.item}>4</Text>
				<Text style={styles.item_flex_end}>5</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 1,
		backgroundColor: '#0ff',
	},
	item: {
		backgroundColor: '#f0f',
		flexGrow: 1,
		margin: 4,
		height: 100,
	},
	item_flex_end: {
		backgroundColor: '#f0f',
		flexGrow: 1,
		margin: 4,
		height: 100,
		alignSelf: 'center',
	}
})
