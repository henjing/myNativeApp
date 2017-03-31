import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions,Image } from 'react-native';
import Banner from 'react-native-banner';

export default class FollowPage extends Component {
	constructor(props) {
		super(props);
		
		this.banners = [
			{
				title: 'banner1',
				image: 'http://bbs.qn.img-space.com/g3/M00/05/0F/Cg-77ViIG46IIWULAALkESTkvvgAAIOvgE1QHoAAuQp682.jpg'
			},
			{
                title: 'banner2',
                image: 'http://bbs.qn.img-space.com/g3/M00/00/7E/Cg-40lfrJ5SIXAIRAA86Aw3JE_0AAAxOAJtSqcADzob345.jpg',
            },
			{
                title: 'The next banner has no title',
                image: 'http://bbs.qn.img-space.com/g2/M00/00/5A/Cg-4k1iXPzuILNl5AA2MDg8Y9qYAAAjewM_dz0ADYxK055.jpg',
            },
            {
                // title: 'no title',
                image: 'http://bbs.qn.img-space.com/g2/M00/07/0F/Cg-4k1h3WuCIJSq7ABAsVz05W-4AAK9VgJXPqYAECxv198.jpg',
            },
            {
				title: 'banner1',
				image: 'http://bbs.qn.img-space.com/g3/M00/05/0F/Cg-77ViIG46IIWULAALkESTkvvgAAIOvgE1QHoAAuQp682.jpg'
			},
			{
                title: 'The next banner has no title',
                image: 'http://bbs.qn.img-space.com/g2/M00/00/5A/Cg-4k1iXPzuILNl5AA2MDg8Y9qYAAAjewM_dz0ADYxK055.jpg',
            },
		];
		
		this.state = {
			clickTitle: 'You can try clicking beauty',
			defaultIndex: 0,
		}
		
		this.defaultIndex = 0;
	}
	
	render() {
		var images = this.banners.map(function(item, index) {
			return <Image source={{uri: item.image}} key={index} style={styles.image_width_height}/>
		});
		return (
			<View style={styles.container}>
				<Banner
					banners={this.banners}
					defaultIndex={this.defaultIndex}
					onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
					intent={this.clickListener.bind(this)}
					style={{height: 150}}
				/>
				<Text>{this.state.clickTitle}</Text>
				<View style={{marginTop: 10}}>
					<ScrollView
						contentContainerStyle={{paddingHorizontal: 5}}
						horizontal={true}
						pagingEnabled={false}
						showsHorizontalScrollIndicator={false}
					>
						{images}
						
					</ScrollView>
				</View>
			</View>
		);
	}
	
	clickListener(index) {
		this.setState({
			clickTitle: this.banners[index].title ? `you click ${this.banners[index].title}` : 'this banner has no title',
		});
	}
	
	onMomentumScrollEnd(event, state) {
		console.log(`--->onMomentumScrollEnd page index: ${state.index},total:${state.total}`)
		this.defaultIndex = state.index;
	}
	
}
var {height, width} = Dimensions.get('window');
var theWidth = width/3 - 16;
const styles = StyleSheet.create({
	image_width_height: {
		width: theWidth,
		height: theWidth,
		marginHorizontal: 4,
	},
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
});




















