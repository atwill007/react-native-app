/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import InitComponent from './src/components/InitComponent';
import HelloWorldApp from './src/components/HelloWorldApp';
import Bananas from './src/components/Bananas';
import PizzaTranslator from './src/components/PizzaTranslator';
import TouchEvent from './src/components/TouchEvent';
import ScrollDemo from './src/components/ScrollDemo';
import FlatListDemo from './src/components/FlatListDemo';
import ApiFetch from './src/components/ApiFetch';
import MovieList from './src/components/MovieList';

const App: () => React$Node = () => {
  const tabDict = {
    init: <InitComponent />,
    custom: (
      <React.Fragment>
        <HelloWorldApp name="RN" />
        <Bananas />
        <PizzaTranslator />
        <TouchEvent />
        <ScrollDemo />
        <FlatListDemo />
        <ApiFetch />
      </React.Fragment>
    ),
    movies: <MovieList/>
  };
  const tabNavs = Object.keys(tabDict);
  const [currTab, setTab] = useState(tabNavs[0]);

  const content = tabDict[currTab];
  // Alert.alert('content: ', tabNavs.join('-'))

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Header /> */}
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              {tabNavs.map((item) => (
                <Button
                  key={item}
                  title={item}
                  color={currTab === item ? '#841584' : ''}
                  onPress={() => setTab(item)} />
              ))}
            </View>
            {content}
          </View>
        </ScrollView>
      </>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    // backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
