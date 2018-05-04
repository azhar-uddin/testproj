import React from 'react';
import { View, Text } from 'react-native';
import { ProfileImage } from '../common';
import { IMAGE1 } from 'stoke/src/images';

const Friend = (props) => {
	const { viewStyle, textStyle } = styles
	return(
		<View style={viewStyle}>
			<ProfileImage src={IMAGE1} />
			<Text style={textStyle}>Ashley Accrant</Text>
		</View>
	);
}

const styles = {
	viewStyle: {
		flexDirection: 'row',
		padding: 10,
		marginBottom: 10
	},
	textStyle: {
		padding: 10,
		fontSize: 20,
		marginLeft: 20
	}
}

export { Friend };
