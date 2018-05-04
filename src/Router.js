import React, { Component } from 'react';
import { View, Image, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { chat_icon, user_profile_icon } from './images';
import { styles } from './styles/commonstyles';

import { Home, Profile, Chats, Friends, Notifications, Footer } from './components'

const RouterComponent = StackNavigator(
  {
   Profile, Friends, Notifications, Home, Chats
  },
  {
    navigationOptions: ({navigation})=> ({
      headerLeft:(
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={user_profile_icon}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      ),
      headerRight:(
        <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
          <Image
            source={chat_icon}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#64C5EA',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  }
);

class Router extends Component {
  onNavigate = (routeName) => {
    this.navigator._navigation.navigate(routeName);
  }
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:12}}>
          <RouterComponent ref={nav => {this.navigator = nav}} />
        </View>
        <View style={{flex:1}}>
          <Footer onNavigate={this.onNavigate} />
        </View>
      </View>
    );
  }
}

export default Router;
