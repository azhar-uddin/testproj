import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { HOME_ICON, FRIENDS_ICON, NOTIFICATIONS_ICON} from '../images';

const Footer = (props) => {
	return (
		<View style={styles.footerStyle}>
			<TouchableOpacity style={styles.touchableStyle} 
				onPress={() => props.onNavigate('Home')}
			>
				<Image 
					resizeMode="contain"
					style={styles.imageStyle}
					source={HOME_ICON}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.touchableStyle}
				onPress={() => props.onNavigate('Friends')}
			>
				<Image 
					resizeMode="contain"
					style={styles.imageStyle}
					source={FRIENDS_ICON}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.touchableStyle}
				onPress={() => props.onNavigate('Notifications')}
			>
				<Image 
					resizeMode="contain"
					style={styles.imageStyle}
					source={NOTIFICATIONS_ICON}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = {
	footerStyle: {
		flex: 1,
		flexDirection: "row",
		justifyContent: 'space-around',
		backgroundColor: '#ddd',
		borderTopWidth: 1,
		borderColor: '#7e838a',
		padding: 5
	},
	touchableStyle: {
		flex: 1,
    	alignItems: 'center',
	},
	imageStyle: {
		flex: 1,
	}
};

export { Footer };