import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { LOCATION_ICON, FRIEND_ICON, HEART_ICON, DISLIKE_ICON } from '../images';
import { Icon, Picture, SetupModal } from './common';
import Buttons from './Buttons'

class Category extends Component {
	state = {
		displayCategory: true,
		modalVisible: false
	}

	showCategory = (value) => {
		this.setState({
			displayCategory: value
		})
		setTimeout(()=>{
	        this.setState({ displayCategory: "" })
		}, 1000);
	}

	setupFriend = (visible) => {
		this.setState({modalVisible: visible});
	}


	renderText() {
		const { textViewStyle, textStyle } = styles
		if(this.props.type === "nearby") {
			return(
				<View style={textViewStyle}>
					<Text style={textStyle}>Nearby</Text>
					<Icon src={LOCATION_ICON} />
				</View>
			);
		}
		else if(this.props.type === "friendsuggestion") {
			return(
				<View style={textViewStyle}>
					<Text style={textStyle}>Setup for you</Text>
					<Icon src={FRIEND_ICON} />
				</View>
			);
		}
		else if(this.props.type === "suggestfriend") {
			return(
				<View style={textViewStyle}>
					<Text style={textStyle}>Setup your friend</Text>
					<Icon src={FRIEND_ICON} />
				</View>
			);
		}
		else if(this.props.type === "stokesuggestion") {
			return(
				<View style={textViewStyle}>
					<Text style={textStyle}>Stoke found you a great match</Text>
				</View>
			);
		}
	}

	renderCategory() {
		const { 
			categoryStyle,
			imageViewStyle,
			nameStyle,
			nameViewStyle,
			actionStyle
		} = styles
		if(this.state.displayCategory === true) {
			return(
				<View style={ categoryStyle }>
					{this.renderText()}
					<View style={imageViewStyle}>
						<Picture src={this.props.user.photo}>
							<View style={nameViewStyle}>
								<Text style={nameStyle}>{this.props.user.name}</Text>
							</View>
							<Buttons 
								showCategory={(val) => this.showCategory(val)} 
								setupFriend={(visible) => this.setupFriend(visible)}
							/>
						</Picture>
					</View>
				</View>
			);
		}
		else if (this.state.displayCategory === "like") {
			return(
				<View style={ [actionStyle,categoryStyle] }>
					<Image 
						resizeMode="contain"
						style={styles.imageStyle}
						source={HEART_ICON}
					/>
				</View>
			);
		}
		else if (this.state.displayCategory === "dislike") {
			return(
				<View style={ [actionStyle,categoryStyle] }>
					<Image 
						resizeMode="contain"
						style={styles.imageStyle}
						source={DISLIKE_ICON}
					/>
				</View>
			);
		}
		return (
			<View></View>
		);
	}

	render() {
		return(
			<View>
				<SetupModal 
					modalVisible={this.state.modalVisible} 
					setupFriend={(visible) => this.setupFriend(visible)}
				/>
				{this.renderCategory()}
			</View>
		);
	}
}

const styles = {
	categoryStyle: {
		paddingTop: 10,
		marginBottom: 20,
		flex: 1,
		height: 400
	},
	textViewStyle: {
		flexDirection: 'row-reverse',
		paddingLeft: 10,
		marginBottom: 5,
		flex: 1
	},
	textStyle: {
		marginTop: 5
	},
	nameViewStyle: {
		flex: 5,
	},
	nameStyle: {
		fontSize: 18,
		color: '#ffffff',
		fontWeight: 'bold'
	},
	imageViewStyle: {
		flex:10,
	},
	actionStyle: {
		alignItems: 'center',
		justifyContent: 'center'
	}
}

export default Category;