import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RestaurantProfilesContainer from './RestaurantProfile/RestaurantProfileContainer';
import globals from './globals';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            restaurantProfileData : {},

        };
    }



  render() {
    return (
      <View >
        <RestaurantProfilesContainer/>
      </View>
    );
  }
}