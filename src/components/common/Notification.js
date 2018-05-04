import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ProfileImage, Icon } from '../common';
import { chatting_icon, like_icon } from 'stoke/src/images/'

class Notification extends Component {
	render(){
		const { 
			iconViewStyle, 
			notificationViewStyle, 
			textViewStyle, 
			notificationStyle,
			notificationProfiles,
			actionView,
			timeViewStyle,
		} = styles
		return(
			<View style={notificationViewStyle}>
				<View style={iconViewStyle}>
					<ProfileImage src={this.props.profileImg}/>
				</View>
				<View style={textViewStyle}>
					<View style={notificationStyle}>
						<Text>{this.props.notification}</Text>
					</View>
					<View style={notificationProfiles}>
						<ProfileImage src={this.props.profileImg}/>
						<ProfileImage src={this.props.profileImg}/>
						<ProfileImage src={this.props.profileImg}/>
					</View>
					<View style={actionView}>
						<TouchableOpacity style={{marginRight: 20}}>
							<Icon src={like_icon}/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon src={chatting_icon}/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={timeViewStyle}>
					<Text>Time View</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	notificationViewStyle: {
		flexDirection: 'row',
		marginBottom: 10,
	},
	iconViewStyle: {
		flex: 1,
		paddingRight: 10
	},
	textViewStyle: {
		flex: 5,
	},
	notificationStyle: {
		padding: 10
	},
	notificationProfiles: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	actionView: {
		flexDirection: 'row',
		padding: 10
	},
	timeViewStyle: {
		flex: 1,
		paddingTop: 10
	},
}

export { Notification };