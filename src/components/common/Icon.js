import React from 'react';
import { View, Image } from 'react-native';

const Icon = (props) => {
	const { iconStyle } = styles;
	return(
		<Image 
			resizeMode="cover"
			source={props.src}
			style = {iconStyle}
		/>
	);
}

const styles = {
	iconStyle: {
		height: 30,
		width: 30,
		marginRight: 5,
		marginLeft: 5
	}
};

export { Icon }