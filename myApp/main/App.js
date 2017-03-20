'use strickt';

import React from 'react';
import {
	StyleSheet,
	Navigator,
	StatusBar,
	BackAndroid,
	View,
	Platform,
} from 'react-native';

import AppMain from './AppMain';
import { NaviGoBack } from '../common/CommonUtils';

export const STATUS_BAR_HEIGHT = (Platform.os === 'ios' ? 20 : 0);

var _navigator;
class rootApp extends React.Component {
	constructor(props) {
		super(props);
		this.renderScene = this.renderScene.bind(this);
		this.goBack = this.goBack.bind(this);
		BackAndroid.addEventListener('hardwareBackPess', this.goBack);
	}
	
	goBack() {
		return NaviGoBack(_navigator);
	}
	
	renderScene(route, navigator) {
		let Component = route.component;
		_navigator = navigator;
		return (
			<Component navigator={navigator} route={route} {...route.passProps} />
		);
	}
	
	configureScene(route, routeStack) {
		return Navigator.SceneConfigs.PushFromRight;
	}
	
	render() {
		return (
			<View style={{flex: 1}}>
				<StatusBar
					barStyle='light-content'
					backgroundColor="rgba(0,0,0,0.8)"
					style={{height: STATUS_BAR_HEIGHT}}
				/>
				<Navigator
					ref='navigator'
					style={{flex: 1}}
					configureScene={this.configureScene}
					renderScene={this.renderScene}
					initialRoute={{
						component: AppMain,
						name: 'AppMain'
					}}
				/>
			</View>
		);
	}
	
}

export default rootApp;








































