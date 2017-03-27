import React, { Component } from 'react';
import {
	Navigator,
	BackAndroid,
	Platform,
} from 'react-native';

import MainPage from './MainPage';
import ToastUtil from '../../utils/ToastUtil';

//记录是第几次按下返回键
let isFirstQuit = 0;

export default class InitApp extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onBackAndroid = this.onBackAndroid.bind(this);
	}
	
	render() {
		return (
			<Navigator
				ref="navigator"
				
				//初始化默认页面，也就是启动app看到的第一屏
				initialRoute={{name: 'MainPage', component: MainPage}}
				
				configureScene={(route) => {
					var config;
					// 先判断传入页面是否自定义了转场动画
					if (route.sceneConfig) {
						config = route.sceneConfig;
					} else {
						config = Navigator.SceneConfigs.HorizontalSwipeJump;
					}
					// 禁用config中的手势返回，否则会导致页面可以左右滑动
					config.gestures = null;
					return config;
				}}
				
				renderScene={(route, navigator) => {
					let Component = route.component;
					return <Component {...route.params} navigator={navigator} />
				}}
				
			/>
		);
	}
	
	componentDidMount() {
		if (Platform.OS === 'android') {
			BackAndroid.addEventListener('hardwareBackPress',this.onBackAndroid);
		}
	}
	
	componentWillUnMount() {
		this.timer && clearTimeout(this.timer);
		if (Platform.OS === 'android') {
			BackAndroid.removeEventListener('hardwareBackPress',this.onBackAndroid)
		}
	}
	
	onBackAndroid() {
		const nav = this.refs.navigator;
		if (nav && nav.getCurrentRoutes().length > 1) {
			nav.pop();
			return true;
		} else {
			if (isFirstQuit == 0) {
				ToastUtil.show('再按一次推出应用');
				isFirstQuit = 1;
				this.timer = setTimeout(() => {
					isFirstQuit = 0;
				},1000)
				return true;
			} else if (isFirstQuit == 1) {
				return false;// 返回false表示执行系统默认实现
			}
		}
	}
}





































