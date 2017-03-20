import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ToastAndroid } from 'react-native';

export default class FetchNetData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
	}
	
	//发起网络请求，获取数据
	fetchUserList() {
		const url = 'https://api.github.com/users/mralexgray/repos';
		fetch(url)
			.then(response => response.json())
			.then(responseJson => {
				let users = responseJson;
				ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT)
				let firstUser = users[0].owner;
				console.log(firstUser);
				this.setState({
					user: firstUser,
				})
			})
			.catch(error => console.error(error))
	}
	
	componentDidMount() {
		this.fetchUserList();
	}
	
	render() {
		let item = this.state.user;
		if (item) {
			return this.renderItem(item);
		}
		return (
			<Text style={{textAlign: 'center',fontSize: 16,padding: 20}}>加载中···</Text>
		)
	}
	
	renderItem(item) {
		return (
			<View style={styles.container_out}>
				<Image style={styles.image_userAvatar} source={{uri: item.avatar_url}}/>
				<View style={styles.container_right}>
					<Text style={styles.text_UserID}>{item.id}</Text>
					<Text style={styles.text_UserType}>{item.type}</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container_out: {
		backgroundColor: "white",
		height: 100,
		flexDirection: 'row',
		alignItems: 'center',
	},
	
	container_right: {
		flexDirection: 'column',
		height: 80,
		flexGrow: 1,
	},
	
	image_userAvatar: {
		width: 80,
		height: 80,
		borderRadius: 80,
		marginHorizontal: 12,
		resizeMode: 'cover',
	},
	text_UserID: {
        color: "black",
        fontSize: 16,
        lineHeight: 24,
    },
    text_UserType: {
        color: "gray",
        fontSize: 12,
        lineHeight: 20,
    },
})



















