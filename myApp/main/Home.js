'use strict';
import React, { Component } from 'react';
import {
	View,
	Alert,
	Text,
	Dimensions,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	ScrollView,
	InteractionManage,
} from 'react-native';
import Swiper from 'react-native-swiper';

var { height, width } = Dimensions.get('window');

const BANNER_IMGS = [
	require('../imgs/home/1.jpg'),
    require('../imgs/home/2.png'),
    require('../imgs/home/3.jpg'),
    require('../imgs/home/4.png')
];

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: ORDER_DATA.data
		};
	}
	
	render() {
		return (
			<View style={{backgroundColor: '#f5f5f5', flex: 1}}>
				<ScrollView>
					<Swiper
						height={200}
						autoplay={true}
						bounces={true}
						dot={<View style={styles.customDot}/>}
                        activeDot={< View style={styles.customActiveDot}/>}
                        paginationStyle={{bottom: 10}}
					>
						<View style={styles.slide}>
							<Image style={styles.slideImage} source={BANNER_IMGS[0]} />
						</View>
						<View>
							<Image source={BANNER_IMGS[1]} />
						</View>
						<View>
							<Image source={BANNER_IMGS[2]} />
						</View>
						<View>
							<Image source={BANNER_IMGS[3]} />
						</View>
					</Swiper>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	customDot: {
		backgroundColor: '#ccc',
		height: 6,
		width: 6,
		marginLeft: 2,
		marginRight: 2,
		marginTop: 10,
		borderRadius: 3,
	},
	customActiveDot: {
        backgroundColor: 'white',
        height: 6,
        width: 6,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 10,
        borderRadius: 3
   },
   slideImage: {
   	width: width,
   	height: 200
   }
})

export default Home;

