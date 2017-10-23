import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator} from 'react-navigation';

//const App = StackNavigator({
//    Home:{ screen: HomeScreen},
//    DrawScreen:{ screen: DrawScreen},
//});

export default class App extends Component {
//    static navigationOptions = {
//        title: 'Home Screen',
//    }
  render() {
//      const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
/*
class DrawScreen extends React.Component {
    <View style={styles.container}>
    <Text> This is the Draw Screen </Text>
    </View>
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
