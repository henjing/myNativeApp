import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableWithoutFeedback, Dimensions} from 'react-native';

import ToastUtil from '../../utils/ToastUtil';
import LoginPage from './LoginPage';

class Header extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{alignItems: 'flex-end'}} >
					<TouchableWithoutFeedback onPress={this.props.onSettingClick}>
						<Image
							source={require('../../imgs/ic_menu_more.png')}
							style={styles.btn_setting}
						/>
					</TouchableWithoutFeedback>
				</View>
				<View style={styles.container_avatar}>
					<TouchableWithoutFeedback onPress={this.props.onAvatarClick}>
						<Image
							source={require('../../imgs/avatar.png')}
							style={styles.img_avatar}
						/>
					</TouchableWithoutFeedback>
					<Text onPress={this.props.onNameClick}>Marno</Text>
				</View>
				<View style={styles.container_favority_and_reply}>
                    <TouchableWithoutFeedback onPress={this.props.onFavorityClick}>
                        <View style={styles.container_favority}>
                            <Image
                                style={styles.img_favority}
                                source={require('../../imgs/ic_action_favorites_grey.png')}/>
                            <Text style={styles.tv_favority}>收藏</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.props.onReplyClick}>
                        <View style={styles.container_reply}>
                            <Image
                                style={styles.img_reply}
                                source={require('../../imgs/ic_action_reply_grey.png')}/>
                            <Text style={styles.tv_reply}>评论</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
			</View>
		);
	}
	
}

const MYITEM = ['MyMessage', 'MyFollow', 'MyCache', 'Feedback', 'Contribute'];

class MyItem extends Component {
	render(){
		return (
			<Text
				tag={this.props.tag}
				style={styles.tv_myItem}
				onPress={this.props.onItemClick}
			>{this.props.title}</Text>
		)
	}
}

export default class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: false,
		};
	}
	
	render() {
		return (
			<View style={{flex: 1}}>
				<ScrollView
					style={{backgroundColor: 'white'}}
					showsVerticalScrollIndicator={true}
				>
					<Header
						onSettingClick={()=>this._onSettingClick()}
	                    onAvatarClick={()=>this._onAvatarClick()}
	                    onNameClick={()=>this._onNameClick()}
	                    onFavorityClick={()=>this._onFavorityClick()}
	                    onReplyClick={()=>this._onReplyClick()}
					/>
					<View>
						<MyItem title="我的消息"
							onItemClick={() => this._onItemClick(MYITEM[0])}
						/>
						<MyItem title="我的关注"
							onItemClick={() => this._onItemClick(MYITEM[1])}
						/>
						<MyItem title="我的缓存"
							onItemClick={() => this._onItemClick(MYITEM[2])}
						/>
						<MyItem title="意见反馈"
							onItemClick={() => this._onItemClick(MYITEM[3])}
						/>
						<MyItem title="我要投稿"
							onItemClick={() => this._onItemClick(MYITEM[4])}
						/>
					</View>
				</ScrollView>
			</View>
		)
	}
	
	_onItemClick(tag) {
		switch (tag) {
			default:
				this._toLoginPage();
				break;
		}
	}
	
	_onSettingClick() {
		ToastUtil.show("打开设置")
	}
	
	_onAvatarClick() {
		ToastUtil.show("点击了头像");
	}
	
	 _onNameClick() {
        ToastUtil.show("点击了昵称");
    }
	 
	  _onFavorityClick() {
        ToastUtil.show("点击了收藏");
    }
	  
	   _onReplyClick() {
        ToastUtil.show("点击了评论");
    }
	   
	_toLoginPage() {
		if (this.state.isLogin) {
			return ToastUtil.show("您已登录，无需重复登录！若要打开登录界面，请在设置中退出登录");
		}
		ToastUtil.show('请先登陆');
		const { navigator } = this.props;
		if (navigator) {
			navigator.push({
				name: 'LoginPage',
				component: LoginPage,
				params: {
					getIsLogin: isLogin => {
						this.setState({
							isLogin: isLogin
						});
					}
				}
			})
		}
	}
}

const styles = StyleSheet.create({
	
	container: {
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#B5B5B5',
        backgroundColor: 'white',
    },
	container_favority_and_reply: {
        flexDirection: 'row',
    },
    container_favority: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderRightColor: '#B5B5B5'
    },
    container_reply: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_avatar: {
        alignItems: 'center',
        marginBottom: 32,
    },
    header: {
        backgroundColor: '#333333',
        height: 240,
    },
    btn_setting: {
        height: 40,
        width: 40,
    },
    img_avatar: {
        borderRadius: 80,
        height: 80,
        width: 80,
        marginBottom: 16,
    },
    tv_favority: {
        color: '#888888',
    },
    tv_reply: {
        color: '#888888',
    },
    img_favority: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 8,
    },
    img_reply: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 8,
    },
    tv_myItem: {
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
})





















