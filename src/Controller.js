import React from 'react';
import App from 'grommet/components/App';

import StartScreen from './screens/StartScreen';
import RemoteScreen from './screens/RemoteScreen';

const SCREENS = {
  START: 0,
  REMOTE: 1
};

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeScreen: SCREENS.START };

    this.connection = new WebSocket('ws://127.0.0.1:3012');
    this.connection.onmessage = evt => {
      console.log('Response: ', evt.data);
      this.parseMessage(evt.data);
    };
    this.setScreen = this.setScreen.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  parseMessage(msg) {
    let msgParts = msg.split(':');
    if (msgParts[0] === 'r') {
      switch (msgParts[1]) {
        case 'home':
          this.setScreen(SCREENS.REMOTE);
          break;
        default:
          break;
      }
    }
  }

  sendMessage(msg) {
    this.connection.send(msg);
  }

  setScreen(screen) {
    this.setState({ activeScreen: screen });
  }

  render() {
    const { activeScreen } = this.state;
    const api = {
      sendMessage: this.sendMessage,
      setScreen: this.setScreen,
      SCREENS
    };
    const screenOptions = [
      <StartScreen api={api} />,
      <RemoteScreen api={api} />
    ];
    return <App>{screenOptions[activeScreen]}</App>;
  }
}
