import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset
} from 'react-360';
const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 150,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  displayPanel: {
    width: 100,
    height: 100,
    flexDirection: 'column'
  }
});

export default class view1 extends React.Component {

  // Our component will keep track of this state
state = {
  count: 0,
};

// This method increments our count, triggering a re-render
_incrementCount = () => {
  this.setState({count: this.state.count + 1});
};

changeBg = () => {
  Environment.setBackgroundImage(
    asset('1.jpg'),
  );
};

  render() {
    return (
      <View style={styles.panel}>
        <VrButton onClick={this.changeBg}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            View 1
          </Text>
        </View>
        </VrButton>
      </View>
    );
  }
};