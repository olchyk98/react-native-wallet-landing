import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo';

import styles from './styles';

import avatar from './assets/images/avatar.jpg';
import play from './assets/images/play.png';
import connection from './assets/images/connection.png';
import viacoin from './assets/images/viacoin.png';
import alien from './assets/images/alien.png';
import hat from './assets/images/hat.png';
import clock from './assets/images/clock.png';
import sh from './assets/images/sh.png';
import rc from './assets/images/rc.png';
import ball from './assets/images/ball.png';

const Account = () => (
  <View style={ styles.account }>
    <View style={ styles.accountWallet }>
      <View style={ styles.accountWalletCash }>
        <Text style={ styles.accountWalletCashSymbol }>$</Text>
        <Text style={ styles.accountWalletCashNumber }>16,31</Text>
      </View>
      <Text style={ styles.accountWalletTitle }>Total Assets</Text>
    </View>
    <View style={ styles.accountAvatar }>
      <LinearGradient
        style={ styles.accountAvatarMat }
        colors={[ '#6AEbD4', '#584DFA' ]}>
        <Image
          style={ styles.accountAvatarMatImage }
          source={ avatar }
        />
      </LinearGradient>
      <View style={ styles.accountAvatarNotification }></View>
    </View>
  </View>
);

const ShortcutsBtn = ({ isLarge, text, image }) => (
  <LinearGradient colors={[ '#3836A2', '#202384' ]} style={{
    ...styles.shortcutsViewBtn,
    ...((isLarge) ? styles.shortcutsViewBtnspecial : {} )
  }}>
    <Image
      source={ image }
      style={ styles.shortcutsViewBtnImage }  
    />
    {
      (!text) ? null : (
        <Text style={ styles.shortcutsViewBtnTitle }>{ text }</Text>
      )
    }
  </LinearGradient>
);

const Shortcuts = () => (
  <View style={ styles.shortcuts }>
    <ScrollView
      styles={ styles.shortcutsView }
      horizontal={ true }
      showsHorizontalScrollIndicator={ false }>
        <ShortcutsBtn
          image={ play }
          text="What is bitcoin?"
          isLarge={ true }
        />
        <ShortcutsBtn
          image={ viacoin }
          isLarge={ false }
        />
        <ShortcutsBtn
          image={ alien }
          isLarge={ false }
        />
        <ShortcutsBtn
          image={ connection }
          isLarge={ false }
        />
      </ScrollView>
    <LinearGradient
      colors={[ 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .1)' ]}
      start={[ 0, 0 ]}
      end={[ 1, 0 ]}
      style={ styles.shortcutsTransition }
    />
  </View>
);

const WalletsWallet = ({ image, title, status }) => (
  <LinearGradient colors={[ '#3B38A5', '#26227F' ]} style={ styles.walletsDisplayWallet }>
    <View style={ styles.walletsDisplayWalletImage }>
      <Image style={ styles.walletsDisplayWalletImageMat } source={ image } />
    </View>
    <View style={ styles.walletsDisplayWalletInfo }>
      <Text style={ styles.walletsDisplayWalletInfoTitle }>{ title }</Text>
      <Text style={ styles.walletsDisplayWalletInfoStatus }>{ status }</Text>
    </View>
  </LinearGradient>
);

const Wallets = () => (
  <View style={ styles.wallets }>
    <View style={ styles.walletsTopic }>
      <Text style={ styles.walletsTopicTitle }>Wallets</Text>
      <Text style={ styles.walletsTopicAppend }>+</Text>
    </View>
    <View style={ styles.walletsDisplay }>
    <WalletsWallet
        image={ hat }
        title="Ethereum Wallet #1"
        status="$ 11,32 • 0.1 eth"
      />
      <WalletsWallet
        image={ clock }
        title="Ethereum Wallet #2"
        status="$ 40 • 0.2 eth"
      />
      <WalletsWallet
        image={ sh }
        title="School Wallet #1"
        status="$ 91,64 • 0.25 eth"
      />
      <WalletsWallet
        image={ rc }
        title="School Wallet #2"
        status="$ 116,98 • 0.6 eth"
      />
      <WalletsWallet
        image={ ball }
        title="School Wallet #3"
        status="$ 268,11 • 0.54 eth"
      />
    </View>
  </View>
);

class App extends Component {
  render() {
    return(
      <ScrollView>
        <LinearGradient
          style={ styles.application }
          colors={[ '#201C6C', '#3F3B9A' ]}>
          <Account />
          <Text style={ styles.title }>Hold & appreciate,{"\n"}<Text style={ styles.titleMark }>easy</Text> enough</Text>
          <Shortcuts />
          <Wallets />
        </LinearGradient>
      </ScrollView>
    );
  }
}

export default App;