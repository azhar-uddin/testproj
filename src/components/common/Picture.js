import React from 'react';
import { View, ImageBackground } from 'react-native';

const Picture = (props) => {
	const { pictureStyle } = styles;
	return(
		<ImageBackground 
			resizeMode="cover"
			source={props.src}
			borderRadius={15}
			style = {[props.style, pictureStyle]}
		>
			{props.children}
		</ImageBackground>
	);
}

const styles = {
	pictureStyle: {
		flex: 1,
		padding: 20
	}
};

export { Picture }