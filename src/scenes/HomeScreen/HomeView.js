import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Card,
  Header,
  Body,
  Button,
  Title,
  CardItem,
} from 'native-base';

import ScarletScreen from './../TScenes/ScarletScreen';
import GrayScreen from './../TScenes/GrayScreen';
import BlueScreen from './../TScenes/BlueScreen';
import FBaseWrite from './../FirebaseRW/FBaseWrite';
import FBaseReadItems from './../FirebaseRW/FBaseReadItems';
import GoldScreen from './../TScenes/GoldScreen';
import BlackScreen from './../TScenes/BlackScreen';
import ModalScreen from './../TScenes/ModalScreen';
import {Router, Scene, ActionConst} from 'react-native-router-flux';
import SearchScreen from './../SearchScreen';

const TabIcon = ({selected, title}) => {
  return <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>;
};

class HomeView extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene key="root" hideNavBar>
          {/* {this.renderBaseScreen()} */}
        </Scene>
      </Router>
    );
  }

  renderBaseScreen() {
    return (
      <Scene key="baseRoot" hideNavBar>
        {/* Tab Container */}
        <Scene
          key="tabbar"
          tabs={true}
          hideNavBar
          tabBarStyle={{backgroundColor: 'darkgrey'}}>
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
    );
  }
}

export default HomeView;
