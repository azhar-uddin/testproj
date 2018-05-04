import React from 'react';
import { View } from 'react-native';
import { Friend } from '../common';

const FriendList = () => {
	const { viewStyle } = styles
	return (
		<View style={viewStyle}>
			<Friend />
			<Friend />
			<Friend />
			<Friend />
			<Friend />
		</View>
	);
}

const styles = {
	viewStyle: {
		padding: 10
	}
}

export { FriendList };