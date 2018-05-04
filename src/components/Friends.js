import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { FriendList, Icon } from './common';
import { facebook_icon, email_icon } from '../images';

const Friends = () => {
	const { 
		scrollViewStyle,
		viewStyle,
		inputStyle,
		headingStyle,
		inviteViewStyle,
		friendsViewStyle,
		inviteStyle,
		fbInviteStyle,
		emailInviteStyle
	} = styles
	return(
		<ScrollView style={scrollViewStyle}>
			<View style={viewStyle}>
				<View>
					<TextInput 
						style={ inputStyle }
						underlineColorAndroid='transparent'
						placeholder= "Search"
					/>
				</View>
				<View style={inviteViewStyle}>
					<Text style={headingStyle}>Invite</Text>
					<View style={inviteStyle}>
						<View style={fbInviteStyle}>
							<Icon src={facebook_icon} />
							<Text>Facebook Friends</Text>
						</View>
						<View style={emailInviteStyle}>
							<Icon src={email_icon} />
							<Text>by Email</Text>
						</View>
					</View>
				</View>
				<View style={friendsViewStyle}>
					<Text style={headingStyle}>Friends</Text>
					<FriendList />
				</View>
			</View>
		</ScrollView>
	);
}

const styles = {
	scrollViewStyle: {
		padding: 10
	},
	viewStyle: {
		paddingBottom: 20
	},
	inputStyle: {
		backgroundColor: '#ddd',
		borderRadius: 10,
		textAlign: 'center',
		height: 35,
		padding: 0
	},
	headingStyle: {
		fontWeight: 'bold',
		fontSize: 18,
		color: '#000',
		paddingBottom: 10
	},
	inviteViewStyle: {
		padding: 10
	},
	friendsViewStyle: {
		padding: 10
	},
	inviteStyle: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 10
	},
	fbInviteStyle: {
		flex: 1,
		flexDirection: 'row'
	},
	emailInviteStyle: {
		flex: 1,
		flexDirection: 'row'
	}
}

export { Friends };
