import React from 'react';
import { View, Image } from 'react-native';

const ProfileImage = (props) => {
	const { imageStyle, viewStyle } = styles;
	return(
		<View style={viewStyle}>
			<Image 
				resizeMode="cover"
				source={props.src}
				borderRadius={25}
				style = {imageStyle}
			/>
		</View>
	);
}

const styles = {
	imageStyle: {
		flex: 1,
		width: null, 
		height: null,
	},
	viewStyle: {
		height: 50,
		width: 50,
		borderRadius: 50/2
	}
};

export { ProfileImage }