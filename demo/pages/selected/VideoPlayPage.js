import React, {Component} from 'react';
import {Text, Navigator, StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';

export default class VideoPlayPage extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<View style={{flex: 1,backgroundColor: 'black'}}>
				<View style={styles.header}>
					<Text style={styles.backBtn} onPress={this._onBackPress.bind(this)}>返回</Text>
				</View>
				<Video
					source={{uri: this.props.rowData.playUrl}}   // Can be a URL or a local file.
                      ref={(ref) => {
                          this.player = ref
                      }}                             // Store reference
                      rate={1.0}                     // 0 is paused, 1 is normal.
                      volume={1.0}                   // 0 is muted, 1 is normal.
                      muted={false}                  // Mutes the audio entirely.
                      paused={false}                 // Pauses playback entirely.
                      resizeMode="contain"             // Fill the whole screen at aspect ratio.
                      repeat={false}                  // Repeat forever.
                      playInBackground={false}       // Audio continues to play when app entering background.
                      playWhenInactive={false}       // [iOS] Video continues to play when control or notification center are shown.
                      progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
                      style={styles.backgroundVideo}
				/>
			</View>
		)
	}
	
	_onBackPress() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        //position: 'absolute',
        top: 40,
        left: 0,
        bottom: 0,
        right: 0,
    },
    header: {
		flexDirection: 'row',
		height: 40,
		backgroundColor: 'rgba(0,0,0,.9)',
	},
	backBtn: {
		paddingHorizontal: 10,
		textAlignVertical: 'center',
		color: '#fff',
	},
});
