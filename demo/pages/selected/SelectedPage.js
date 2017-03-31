import React, { Component } from 'react';
import {
	ListView, Text, RefreshControl, StyleSheet, View, Image,
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import DimensUtil from '../../utils/DimensUtil';
import VideoListItem from "./VideoListItem";
import VideoDetailPage from './VideoDetailPage';
import ToastUtil from '../../utils/ToastUtil';

//视频地址，下一页链接会在json中一起返回
const videoUrl = 'http://baobab.wandoujia.com/api/v1/feed?num=1';

export default class SelectedPage extends Component {
	constructor(props) {
		super(props);
		
		let defaultDS = new ListView.DataSource(
			{rowHasChanged: (prevRowData, nextRowData) => prevRowData !== nextRowData}	
		);
		
		this.state = {
			dataSource: defaultDS,
			data: [],
			nextPageUrl: '',
			isRefreshing: false,
		}
	}
	
	render() {
		return this._renderList();
	}
	
	_renderList() {
		if (this.state.data.length !== 0) {
			const {onScroll = () => {}} = this.props;
			return (
				<ListView
					dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
					renderRow={(rowData, rowId) => this._renderRow(rowData, rowId)}
					enableEmptySections={true}
					refreshControl={
						<RefreshControl
							refreshing={this.state.isRefreshing}
							onRefresh={() => this._fetchVideoList()}
						/>
					}
					renderScrollComponent={props => (
						<ParallaxScrollView
							onScroll={onScroll}
							parallaxHeaderHeight={210}
							backgroundSpeed={0}
							fadeOutForeground={false}
							renderBackground={() => (
								<View key="background">
									<Image
										source={require('../../imgs/home_page_header_cover.jpg')}
										style={styles.img_header_background}
									>
										<View key="parallax-header" style={ styles.parallaxHeader } >
											<Image
												source={require('../../imgs/home_page_header_icon.png')}
												style={ styles.avatar }
											/>
											<Text style={ styles.sectionSpeakerText }>
												{ new Date().getFullYear }
											</Text>
										</View>
									</Image>
								</View>
							)}
						/>
					)}
				/>
			)
		} else {
			return (
				<Text style={{flex: 1, textAlignVertical: 'center', textAlign: 'center'}}>加载中...</Text>
			);
		}
		
		
	}
	
	_renderRow(rowData, rowId) {
		return <VideoListItem
			onItemClick={() => this._onItemClick(rowData, rowId)}
			imgUrl={rowData.coverForFeed}
			title={rowData.title}
		/>
	}
	
	_onItemClick(rowData, rowId) {
		const {navigator} = this.props;
		if (navigator) {
			navigator.push({
				name: 'VideoDetailPage',
				component: VideoDetailPage,
				params: {
					rowData: rowData,
					rowId: rowId,
				}
			})
		}
	}
	
	_fetchVideoList() {
		console.log('time1==> ' + new Date().valueOf() + ' _fetchVideoList');
		fetch('http://baobab.wandoujia.com/api/v1/feed?num=1')
		.then((response) => response.json())
		.then((responseJson) => {
			console.log(responseJson)
			let videos = responseJson.dailyList[0].videoList;
			let nextPage = responseJson.nextPageUrl;
			ToastUtil.show('网络请求完成');
			console.log(videos)
			console.log(`下一页${nextPage}`)
			this.setState({
				data: videos,
				nextPageUrl: nextPage,
				isRefreshing: false,
			})
		})
		.catch(error => {
			this.setState({
				isRefreshing: false
			});
		})
	}
	
	componentDidMount() {
		
		console.log('time1==> ' + new Date().valueOf() + ' componentDidMount');
		this._fetchVideoList();
	}
	
	 componentWillMount() {
        console.log('time1==> ' + new Date().valueOf() + ' componentWillMount');
    }
}

const styles = StyleSheet.create({
    parallaxHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 15,
    },
    avatar: {
        height: 150,
        width: 150,
    },
    img_header_background: {
        width: DimensUtil.getScreenWidth(),
        height: 210,
        resizeMode: 'cover'
    }

})
