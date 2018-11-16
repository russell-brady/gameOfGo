import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 53.385751, -6.253368
import MapView from 'react-native-maps';

class MapScreen extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      	<MapView
					initialRegion={{
		      	latitude: 53.385751,
			     	longitude: -6.253368,
		    	  latitudeDelta: 0.0922,
     	 			longitudeDelta: 0.0421,
   	 			}}
					style = {styles.container}
  			/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		width: '100%',
		height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

module.exports = MapScreen;
