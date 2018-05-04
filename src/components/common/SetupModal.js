import React, {Component} from 'react';
import {Modal, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { Picture, Icon, FriendList } from '../common';
import { CROSS_ICON, IMAGE3, email_icon } from 'stoke/src/images';

const SetupModal = (props) => {
	const {
		scrollViewStyle,
		mainViewStyle,
		closePopupView,
		imageViewStyle,
		nameStyle,
		inviteViewStyle,
		inviteTextStyle,
		emailInviteView,
		textStyle,
		friendsViewStyle
	} = styles
	return(
		<Modal
			animationType="slide"
			transparent={false}
			visible={props.modalVisible}
			onRequestClose={() => {console.log('Modal has been closed.');}
			}
		>
			<ScrollView style={scrollViewStyle}>
				<View style={mainViewStyle}>
					<View style={closePopupView}>
						<TouchableOpacity
							onPress={() => {
			                  props.setupFriend(!props.modalVisible);
			                }}
						>
							<Icon src={CROSS_ICON} />
						</TouchableOpacity>
					</View>
					<View style={imageViewStyle}>
						<Picture src={IMAGE3}>
							<Text style={nameStyle}>Alfred, 24</Text>
						</Picture>
					</View>
					<View style={inviteViewStyle}>
						<Text style={inviteTextStyle}>Setup Alfred with a Friend</Text>
						<View style={ emailInviteView }>
							<Icon src={email_icon} />
							<Text style={textStyle}>Invite & Setup A New Friend</Text>
						</View>
						<Text>or choose from your friends:</Text>
					</View>
					<FriendList />
				</View>
			</ScrollView>
        </Modal>
	);
}

const styles = {
	scrollViewStyle:{
		flex: 1,
	},
	mainViewStyle: {
		flex: 1,
		padding: 10,
		marginBottom: 20
	},
	closePopupView: {
		flexDirection: 'row-reverse',
		paddingBottom: 10
	},
	imageViewStyle: {
		height: 300
	},
	nameStyle: {
		color: '#ffffff',
		fontSize: 25,
		fontWeight: 'bold'
	},
	inviteViewStyle: {
		padding: 10,
		alignItems: 'center',
	},
	inviteTextStyle: {
		fontWeight: 'bold',
		color: '#000',
		fontSize: 20,
		marginBottom: 10
	},
	emailInviteView: {
		borderWidth: 2,
		borderColor: '#ffbe41',
		borderRadius: 10,
		padding: 10,
		flexDirection: 'row'
	},
	textStyle: {
		fontSize: 20
	},
	friendsViewStyle: {
		padding: 10
	}
}

export { SetupModal };