'use strict';
import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	Alert,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home'; 

const ICON = [
	require('../imgs/ic_tab_home.png'),
	require('../imgs/ic_tab_order.png'),
	require('../imgs/ic_tab_cart.png'),
	require('../imgs/ic_tab_center.png'),
];
const ICON_ACTIVE = [
	require('../imgs/ic_tab_home_press.png'),
	require('../imgs/ic_tab_order_press.png'),
	require('../imgs/ic_tab_cart_press.png'),
	require('../imgs/ic_tab_center_press.png'),
]

class AppMain extends Component {
	constructor(props) { 
		super(props);
		this.state = {
			selectedTab: 'home',
		}
	}
	
	render() {
		return (
			<TabNavigator tabBarStyle={styles.TabNavigator}>
				<TabNavigator.item
					title="主页"
					selected={this.stateselectedTab === 'home'}
					selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => {
                    		Alert.alert('标题', this.state.selectedTab)
                    		return this.setState({selectedTab: 'home'})
                    }}
					renderIcon={() => <Image source={ICON[0]} style={styles.iconStyle} />}
					renderSelectedIcon={() => <Image source={require(ICON_ACTIVE[0])}
                                                     style={styles.iconStyle}/>}
				>
					首页
				</TabNavigator.item>
				
				<TabNavigator.item
					title="投资"
					selected={this.stateselectedTab === 'order'}
					selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => {
                    		return this.setState({selectedTab: 'order'})
                    }}
					renderIcon={() => <Image source={ICON[1]} style={styles.iconStyle}/>}
					renderSelectedIcon={() => <Image source={require(ICON_ACTIVE[1])}
                                                     style={styles.iconStyle}/>}
				>
					投资
				</TabNavigator.item>
				
				<TabNavigator.item
					title="发现"
					selected={this.stateselectedTab === 'order'}
					selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => {
                    		return this.setState({selectedTab: 'order'})
                    }}
					renderIcon={() => <Image source={ICON[2]} style={styles.iconStyle}/>}
					renderSelectedIcon={() => <Image source={require(ICON_ACTIVE[2])}
                                                     style={styles.iconStyle}/>}
				>
					发现
				</TabNavigator.item>
				
				<TabNavigator.item
					title="我"
					selected={this.stateselectedTab === 'order'}
					selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => {
                    		return this.setState({selectedTab: 'order'})
                    }}
					renderIcon={() => <Image source={ICON[3]} style={styles.iconStyle}/>}
					renderSelectedIcon={() => <Image source={require(ICON_ACTIVE[3])}
                                                     style={styles.iconStyle}/>}
				>
					个人中心
				</TabNavigator.item>
				
			</TabNavigator>
		)
	}
}

const styles = StyleSheet.create({
	TabNavigator: {
		backgroundColor: '#3b3738'
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	textStyle: {
		color: '#fff'
	},
	selectedTextStyle: {
		color: '#FFF'
	}
})

export default AppMain;
