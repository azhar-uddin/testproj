import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { HEART_ICON, CROSS_ICON, IMAGE1, FRIENDS_ICON } from '../images';

const Buttons = (props) => {
	const { buttonsViewStyle, touchableStyle, iconStyle } = styles
	return(
		<View style={buttonsViewStyle}>
			<TouchableOpacity 
				style={touchableStyle}
				onPress={() => props.showCategory("dislike")}
			>
				<Image 
					resizeMode="contain"
					style={iconStyle}
					source={CROSS_ICON}
				/>
			</TouchableOpacity>
			<TouchableOpacity 
				style={touchableStyle}
				onPress={() => props.setupFriend(true)}
			>
				<Image 
					resizeMode="contain"
					style={iconStyle}
					source={FRIENDS_ICON}
				/>
			</TouchableOpacity>
			<TouchableOpacity 
				style={touchableStyle}
				onPress={() => props.showCategory("like")}
			>
				<Image 
					resizeMode="contain"
					style={iconStyle}
					source={HEART_ICON}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = {
	buttonsViewStyle: {
		flex:1,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	touchableStyle: {
		flex: 1,
		alignItems: 'center'
	},
	iconStyle: {
		flex: 1,
		height: undefined
	}
}

export default Buttons;