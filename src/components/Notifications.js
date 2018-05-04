import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Notification } from './common';
import { IMAGE1, IMAGE2 } from '../images';

const Notifications = () => {
	const { scrollViewStyle, viewStyle } = styles
	return(
		<ScrollView style={scrollViewStyle}>
			<View style={viewStyle}>
				<Notification 
					profileImg={IMAGE1} 
					notification="Ashley Matched with your setup"
				/>
				<Notification 
					profileImg={IMAGE2}
					notification="Ashley Liked 3 profiles.Ashley Liked 3 profiles.Ashley Liked 3 profiles.Ashley Liked 3 profiles."
				/>
				<Notification 
					profileImg={IMAGE1} 
					notification="Ashley Matched with your setup"
				/>
			</View>
		</ScrollView>
	);
}

const styles = {
	scrollViewStyle: {
		backgroundColor: '#ffffff',
		padding: 10,
		flex: 1,
	},
	viewStyle: {
		padding: 10,
		flex: 1,
		paddingBottom: 10,
	}
}

export { Notifications };