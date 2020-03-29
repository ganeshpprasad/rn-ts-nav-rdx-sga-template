import React from 'react';
import {SafeAreaView, Text, StatusBar, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {DETAILS} from '.';

const Home: React.FC = ({componentId}) => {
  const pushDetailsScreen = () => {
    Navigation.push(componentId, {
      component: {
        name: DETAILS,
        passProps: {},
        options: {
          topBar: {
            title: {
              text: `Details screen`,
            },
          },
        },
      },
    });
  };

  // check if logged in then return this
  if (true) {
    return (
      <View>
        <Button title={`move to screen`} onPress={() => pushDetailsScreen()} />
      </View>
    );
  }

  // not logged in take him to login screen
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello auth logic</Text>
      </SafeAreaView>
    </>
  );
};

export default Home;
