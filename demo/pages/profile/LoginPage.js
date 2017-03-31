import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, Navigator} from 'react-native';
import {
    Container, Header, Title, Content, Icon, Button, Left, Body
} from "native-base";
import ToastUtil from "../../utils/ToastUtil";

export default class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			accout: '',
			password: '',
			verifyString: '获取验证码',
			isCounting: false,
		};
	}
	
	render() {
		return (
			<Container>
				<Header style={{backgroundColor: 'white', height: 48}}>

                    <Left>
                        <Button transparent onPress={()=>this._onCloseClick()}>
                            <Icon name='arrow-back' style={{color: '#333'}}/>
                        </Button>
                    </Left>

                    <Body>
                    <Title style={{color: '#333'}}>登录</Title>

                    </Body>

                </Header>
                
                <Content style={{backgroundColor: 'white'}}>
                	<View style={{marginTop: 60}}>
                		<View style={loginStyles.view_account_input_container}>
                			<Icon name="ios-person" />
                			<TextInput 
                				style={loginStyles.input_account}
                				placeholder={'手机号码'}
                				placeholderTextColor={'#b2b2b2'}
                				keyboardType={'numeric'}
                				returnKeyType={'next'}
                				underlineColorAndroid={'transparent'}
                				onChangeText={(value) => {
                					this.setState({
                						account: value
                					});
                				}}
                			/>
                		</View>
                		<View style={loginStyles.view_password_input_container}>
                			<Icon name="unlock" />
                			<TextInput
                				style={loginStyles.input_password}
                				placeholder={'验证码'}
                				placeholderTextColor={'#b2b2b2'}
                				keyboardType={'numeric'}
                				returnKeyType={'next'}
                				clearTextOnFocus={true}
                				underlineColorAndroid={'transparent'}
                				onChangeText={(value) => {
                					this.setState({
                						password: value
                					});
                				}}
                			/>
                			<Text
                				style={loginStyles.tv_verify_code}
                				onPress={() => this._fetchVerifyCode()}
                			>{this.state.verifyString}</Text>
                		</View>
                		
                		<Button block info
                                onPress={()=>this._onLoginButtonClick()}
                                style={loginStyles.btn_commit} style={{marginHorizontal: 15,marginTop: 20}}>
                            <Text style={{fontSize: 18, color: 'white'}}>登录</Text>
                        </Button>

                	</View>
                </Content>
			</Container>
		);
	}
	
	_onCloseClick() {
		const { navigator } = this.props;
		if (navigator) {
			navigator.pop()
		}
	}
	
	//模拟登录操作
    _login() {
        ToastUtil.show("登录成功")
        if (this.props.getIsLogin) {
            this.props.getIsLogin(true);
        }
        this._onCloseClick();
    }
	
	 _onLoginButtonClick() {
        if (!this.state.account) {
            return ToastUtil.show("请输入手机号");
        } else if (this.state.account.length < 11) {
            return ToastUtil.show("手机号格式有误");
        } else if (!this.state.password) {
            return ToastUtil.show("请输入验证码");
        } else if (this.state.password.length < 6) {
            return ToastUtil.show("验证码必须为6位数")
        }
        this._login();
    }
	 
	 //获取验证码
    _fetchVerifyCode() {
        if (!this.state.account) {
            return ToastUtil.show("请输入手机号");
        } else if (this.state.account.length < 11) {
            return ToastUtil.show("手机号格式有误");
        }
        if (this.state.isCounting) {
            return;
        } else {
            this._startCounting();
        }

    }

    _startCounting() {
        var total = 60;
        this.interval = setInterval(()=> {
            this.setState({
                verifyString: total-- + 's 后重新获取',
                isCounting: true,
            })

            if (total <= 0) {
                this.interval && clearInterval(this.interval);
                this.setState({
                    verifyString: '重新获取',
                    isCounting: false,
                })
            }
        }, 1000);
    }
    
     componentWillUnMount() {
        this.interval && clearInterval(this.interval);
    }
}

const loginStyles = StyleSheet.create({
    view_account_input_container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,
        marginBottom: 8,

    },
    view_password_input_container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,

    },
    input_account: {
        flex: 1,
        fontSize: 14,
        paddingVertical: 8,
    },
    input_password: {
        flexGrow: 4,
        fontSize: 14,
        paddingVertical: 8,
    },
    icon_account: {
        fontSize: 26,
        marginRight: 16,
        marginLeft: 8,
        color: '#b2b2b2'
    },
    tv_verify_code: {
        color: '#333',
        height: 30,
        backgroundColor: '#ddd',
       	flexGrow: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20,
    },
    btn_commit: {
        height: 48,
        backgroundColor: '#333',
        marginTop: 38,
        marginHorizontal: 14,
    }
})

















