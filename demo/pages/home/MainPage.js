import React, {Component} from "react";
import {StyleSheet, Image, Text} from "react-native";
import TabNavigator from "react-native-tab-navigator";

import FollowPage from '../follow/FollowPage';
import ExplorePage from '../explore/ExplorePage';
import ProfilePage from '../profile/ProfilePage';

const SELECTED_TAG = 'selected';
const SELECTED_TITLE = '精选';
const SELECTED_NORMAL = require('../../imgs/ic_tab_strip_icon_feed.png');
const SELECTED_FOCUS = require('../../imgs/ic_tab_strip_icon_feed_selected.png');

const EXPLORE_TAG = 'explore';
const EXPLORE_TITLE = '发现';
const EXPLORE_NORMAL = require('../../imgs/ic_tab_strip_icon_category.png');
const EXPLORE_FOCUS = require('../../imgs/ic_tab_strip_icon_category_selected.png');

const FOLLOW_TAG = 'follow';
const FOLLOW_TITLE = '关注';
const FOLLOW_NORMAL = require('../../imgs/ic_tab_strip_icon_follow.png');
const FOLLOW_FOCUS = require('../../imgs/ic_tab_strip_icon_follow_selected.png');

const PROFILE_TAG = 'profile';
const PROFILE_TITLE = '我的';
const PROFILE_NORMAL = require('../../imgs/ic_tab_strip_icon_profile.png');
const PROFILE_FOCUS = require('../../imgs/ic_tab_strip_icon_profile_selected.png');

export default class MainPage extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			selectedTab: SELECTED_TAG
		}
	}
	render() {
		return (
			<TabNavigator
				tabBarStyle={styles.tab_container}
				tabBarShowStyle={{height: 0}}
			>
				<TabNavigator.Item
					selected={this.state.selectedTab === "selected"}
					title='精选'
					titleStyle={styles.tab_title}
					selectedTitleStyle={styles.tab_title_selected}
					renderIcon={() => <Image source={SELECTED_NORMAL} style={styles.tab_icon} />}
					renderSelectedIcon={() => <Image source={SELECTED_FOCUS} style={styles.tab_icon} />}
					onPress={() => this.setState({selectedTab: "selected"})}
				>
					<Text>精选</Text>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === "explore"}
					title='发现'
					titleStyle={styles.tab_title}
					selectedTitleStyle={styles.tab_title_selected}
					renderIcon={() => <Image source={EXPLORE_NORMAL} style={styles.tab_icon} />}
					renderSelectedIcon={() => <Image source={EXPLORE_FOCUS} style={styles.tab_icon} />}
					onPress={() => this.setState({selectedTab: "explore"})}
				>
					<ExplorePage />
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === "follow"}
					title='关注'
					titleStyle={styles.tab_title}
					selectedTitleStyle={styles.tab_title_selected}
					renderIcon={() => <Image source={FOLLOW_NORMAL} style={styles.tab_icon}/>}
					renderSelectedIcon={() => <Image source={FOLLOW_FOCUS} style={styles.tab_icon}/>}
					onPress={() => this.setState({selectedTab: "follow"})}
				>
					<FollowPage />
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === "profile"}
					title='我的'
					titleStyle={styles.tab_title}
					selectedTitleStyle={styles.tab_title_selected}
					renderIcon={() => <Image source={PROFILE_NORMAL} style={styles.tab_icon}/>}
					renderSelectedIcon={() => <Image source={PROFILE_FOCUS} style={styles.tab_icon}/>}
					onPress={() => this.setState({selectedTab: "profile"})}
				>
					<ProfilePage {...this.props} />
				</TabNavigator.Item>
			</TabNavigator>
		);
	}
}

const styles = StyleSheet.create(
    {
        tab_container: {
            height: 42,
        },
        tab_icon: {
            width: 25,
            height: 25,
            resizeMode: 'contain',
        },
        tab_title: {
            color: "#929292",
            fontSize: 8,
        },
        tab_title_selected: {
            color: "#333333",
            fontSize: 8,
        }
    }
)
