import React from 'react';
import {StackNavigator} from 'react-navigation';
import { Container, Header, Content,Footer,Text,FooterTab,Button,Root,ActionSheet} from 'native-base';
import {MaterialIcons,Feather} from '@expo/vector-icons'


var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class Login extends React.Component {
  static navigationOptions = (props) =>({
    title :'Home',
    headerStyle :{
      backgroundColor:'#3762a8'
   },
    headerRight: (
      <Feather
        name="power"
        color="black"
        size={30}
        onPress={() =>
          {props.navigation.navigate('Login')}
        }
      />
    ),
  })

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {


    return (
      <Container>

        <Content padder>
          <Button
            onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Testing ActionSheet"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
          >
            <Text>Actionsheet</Text>
          </Button>
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
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
