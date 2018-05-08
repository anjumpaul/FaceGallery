import React from 'react';
import Login from './src/components/Login.js';
import Home from './src/components/Home.js';
import {StackNavigator,} from 'react-navigation';
import {Root} from 'native-base';
import { Font, AppLoading } from "expo";
const RootStack = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home:{
      screen: Home,
    },
  },
  {
    initialRouteName: 'Login',
  }
);
export default class App extends React.Component {


    constructor(props) {
      super(props);
      this.state = { loading: true};
    }

    async componentDidMount() {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
      this.setState({ loading: false });
    }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }

    return <RootStack/>
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
