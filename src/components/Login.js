import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Text,View,TextInput,TouchableHighlight,StyleSheet} from 'react-native';
export default class Login extends React.Component {
  static navigationOptions = {
    header:null,
  }
  login = () => {
    return(
      this.props.navigation.navigate('Home')
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight

          underlayColor={'#328FE6'}
          onPress= {this.login}

          >
            <Text>LOGIN</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
