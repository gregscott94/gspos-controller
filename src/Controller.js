import React from 'react';
import App from 'grommet/components/App';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Button from 'grommet/components/Button';

import StartScreen from './screens/StartScreen';
import RemoteScreen from './screens/RemoteScreen';

const SCREENS = {
  START: 0,
  REMOTE: 1
};

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeScreen: SCREENS.REMOTE };
  }

  render() {
    const { activeScreen } = this.state;
    const screenOptions = [<StartScreen />, <RemoteScreen />];
    return <App>{screenOptions[activeScreen]}</App>;
  }
}
