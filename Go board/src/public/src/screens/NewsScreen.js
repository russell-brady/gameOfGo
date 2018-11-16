import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class NewsScreen extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text> Hello NewsScreen! </Text>
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

module.exports = NewsScreen;
