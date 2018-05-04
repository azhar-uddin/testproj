import React from 'react';
import { View, Text } from 'react-native';
import { Picture, Icon } from './common';
import { IMAGE1, view_icon, edit_icon, settings_icon } from '../images'

const Profile = () => {
	const { profileViewStyle, pictureStyle, nameStyle, editViewStyle, textStyle } = styles
	return(
		<View>
			<View style={profileViewStyle}>
				<Picture style = {pictureStyle} src={IMAGE1}>
					<Text style={nameStyle}>Hannah, 25</Text>
				</Picture>
			</View>
			<View style={editViewStyle}>
				<Icon src={edit_icon} />
				<Text style={textStyle}>Edit Profile</Text>
			</View>
			<View style={editViewStyle}>
				<Icon src={view_icon} />
				<Text style={textStyle}>View Profile</Text>
			</View>
			<View style={editViewStyle}>
				<Icon src={settings_icon} />
				<Text style={{fontSize: 18}}>Settings</Text>
			</View>
		</View>
	);
}

const styles = {
	profileViewStyle: {
		padding: 10,
		height: 300
	},
	pictureStyle: {
		justifyContent: 'flex-end'
	},
	nameStyle: {
		color: '#ffffff',
		fontSize: 20
	},
	editViewStyle: {
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'center'
	},
	textStyle: {
		fontSize: 18,
		paddingTop: 5,
		color: '#64C5EA'
	}
}

export { Profile };