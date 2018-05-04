import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Category from './Category';
import { users } from './users_data'

const Home = () => {
	const { scrollViewStyle, viewStyle } = styles
	return(
		<ScrollView style={scrollViewStyle}>
			<View style={viewStyle}>
				<Category type="nearby" user={users[0]}/>
				<Category type="friendsuggestion" user={users[1]}/>
				<Category type="stokesuggestion" user={users[2]}/>
			</View>
		</ScrollView>
	);
}

const styles = {
	scrollViewStyle: {
		backgroundColor: '#ffffff',
		padding: 10,
		flex: 1,
	},
	viewStyle: {
		flex: 1,
		paddingBottom: 20,
	}
}

export { Home };