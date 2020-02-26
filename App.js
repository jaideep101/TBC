/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import HomeScreen from './src/scenes/HomeScreen';
import splashscreen from './src/scenes/SplashScreen';
// import {Provider} from 'react-redux';
// import configureStore from './configureStore';
import { YellowBox } from 'react-native';

import {
  GoogleAnalyticsTracker,
  GoogleAnalyticsSettings,
} from 'react-native-google-analytics-bridge';
import loginScreen from './src/scenes/LoginScreen';
import Realm from 'realm';
import ScarletScreen from './src/scenes/TScenes/ScarletScreen';
import GrayScreen from './src/scenes/TScenes/GrayScreen';
import BlueScreen from './src/scenes/TScenes/BlueScreen';
import FBaseWrite from './src/scenes/FirebaseRW/FBaseWrite';
import FBaseReadItems from './src/scenes/FirebaseRW/FBaseReadItems';
import GoldScreen from './src/scenes/TScenes/GoldScreen';
import BlackScreen from './src/scenes/TScenes/BlackScreen';
import ModalScreen from './src/scenes/TScenes/ModalScreen';
import SearchScreen from './src/scenes/SearchScreen';
import TabIcon from './src/components/TabIcon'
import {
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },

  tabBarStyle: {
    backgroundColor: '#fff',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

let realm;

let tracker = new GoogleAnalyticsTracker('G-LC2MDJK4YT');

// const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    realm = new Realm({
      path: 'UserDatabase.realm',
      schema: [
        {
          name: 'user_details',
          properties: {
            user_name: 'string',
            user_password: 'string',
          },
        },
      ],
    });
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
    YellowBox.ignoreWarnings(['Setting a timer']);
    YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps has been renamed']);

  }
  componentDidMount() {
    tracker.trackScreenView('Home Screen');
    GoogleAnalyticsSettings.setDispatchInterval(30);
  }

  render() {
    return (
      // <Provider /*store={store}*/>
      <Router hideNavBar={true}>
        <Scene key="root" hideNavBar>
          <Scene
            key="splash"
            component={splashscreen}
            initial={true}
            title="splash"
            duration={0}
          />
          <Scene
            key="login"
            type={ActionConst.RESET}
            component={loginScreen}
            title="login"
            duration={0}
          />
          {/* <Scene
            key="home"
            type={ActionConst.RESET}
            component={HomeScreen}
            title="Home"
            duration={0}
          /> */}
          {this.renderTabbar()}
          <Scene
            key="modal"
            direction="vertical"
            component={ModalScreen}
            title="Modal"
            hideNavBar
          />
          <Scene
            key="SearchScreen"
            component={SearchScreen}
            title="Search"
            duration={0}
          />
        </Scene>
      </Router>
      // </Provider>
    );
  }

  renderTabbar() {
    return (
      <Scene
        key="tabbar"
        tabs={true}
        tabBarStyle={styles.tabBarStyle} tabBarSelectedItemStyle={styles.tabBarStyle} hideNavBar={true} showLabel={false}>
        {/* Tab and it's scenes */}
        <Scene key="osu" title="OSU" icon={TabIcon} hideNavBar>
          <Scene key="scarlet" component={ScarletScreen} title="Scarlet" />
          <Scene key="gray" component={GrayScreen} title="Gray" hideNavBar />
          <Scene
            key="SearchScreenWithTabs"
            component={SearchScreen}
            title="Search With tabs"
            direction="vertical"
          />
        </Scene>

        {/* Tab and it's scenes */}
        <Scene key="um" title="UM" icon={TabIcon} hideNavBar>
          <Scene key="blue" component={BlueScreen} title="Blue" hideNavBar />
          <Scene key="fbai" component={FBaseWrite} title="FB Add Item" />
          <Scene key="fbri" component={FBaseReadItems} title="FB Read" />
        </Scene>

        {/* Tab and it's scenes */}
        <Scene key="vu" title="VU" icon={TabIcon} hideNavBar>
          <Scene key="gold" component={GoldScreen} title="Gold" />
          <Scene key="black" component={BlackScreen} title="Black" />
        </Scene>
      </Scene>
    )
  }

  renderLaunchScreen() {
    return (
      <Scene key="splashRoot">
        <Scene
          key="splashScreen"
          component={splashscreen}
          title="Splash"
          initial
          hideNavBar
        />
      </Scene>
    );
  }
}
