import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class FlexDiceTest extends Component {
	render() {
		return (
			<View style={FlexDiceTestStyle.container}>
				<Text style={FlexDiceTestStyle.item1}>1</Text>
                <Text style={FlexDiceTestStyle.item1}>2</Text>
                <Text style={FlexDiceTestStyle.item1}>3</Text>
                <Text style={FlexDiceTestStyle.item4}>4</Text>
                <Text style={FlexDiceTestStyle.item1}>5</Text>
                <Text style={FlexDiceTestStyle.item1}>6</Text>
                <Text style={FlexDiceTestStyle.item1}>7</Text>
                <Text style={FlexDiceTestStyle.item1}>8</Text>
                <Text style={FlexDiceTestStyle.item1}>9</Text>
			</View>
		)
	}
}

const FlexDiceTestStyle = StyleSheet.create({
	container: {
		backgroundColor: 'blue',
		height: 300,
		width: 300,
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
	item1: {
		color: '#fff',
		backgroundColor: '#000',
		height: 80,
		width: 80,
		textAlign: 'center',
		textAlignVertical: 'center',
		margin: 4,
	},
	item2: {
		color: '#fff',
		backgroundColor: '#000',
		height: 80,
		width: 80,
		textAlign: 'center',
		textAlignVertical: 'center',
		margin: 4,
	},
	item3: {
		color: '#fff',
		backgroundColor: '#000',
		height: 80,
		width: 80,
		textAlign: 'center',
		textAlignVertical: 'center',
		margin: 4,
	},
	item4: {
		color: '#fff',
		backgroundColor: '#000',
		height: 80,
		width: 80,
		textAlign: 'center',
		textAlignVertical: 'center',
		margin: 4,
		alignSelf: 'center',
	},
	item5: {
		color: '#fff',
		backgroundColor: '#000',
		height: 80,
		width: 80,
		textAlign: 'center',
		textAlignVertical: 'center',
		margin: 4,
	},
	item6: {
		color: '#fff',
		backgroundColor: '#000',
		height: 80,
		width: 80,
		textAlign: 'center',
		textAlignVertical: 'center',
		margin: 4,
	},
	item7: {
		color: '#fff',
		backgroundColor: '#000',
		height: 80,
		width: 80,
		textAlign: 'center',
		textAlignVertical: 'center',
		margin: 4,
	},
	item8: {
		color: '#fff',
		backgroundColor: '#000',
		height: 80,
		width: 80,
		textAlign: 'center',
		textAlignVertical: 'center',
		margin: 4,
	},
	item9: {
		color: '#fff',
		backgroundColor: '#000',
		height: 80,
		width: 80,
		textAlign: 'center',
		textAlignVertical: 'center',
		margin: 4,
	},
});