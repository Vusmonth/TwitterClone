import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './assets/Home'
import TweetScreen from './assets/Tweet'
import ProfileScreen from './assets/Profile'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Start({ route, navigation }) {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerTintColor: 'black', headerShown: false }} />
      <Stack.Screen name="Media" component={MediaScreen} options={{ headerTintColor: 'black', headerShown: true, title: '', headerTransparent: true }} />
      <Stack.Screen name="Tweet" component={Tweet} options={{ headerTintColor: 'black', headerShown: true, title: 'Tweet', headerTransparent: false }} />
    </Stack.Navigator>

  );
}

function Home({ navigation }) {
  return (
    <HomeScreen
      drawerPress={() => navigation.openDrawer()}
    />
  );
}

function Profile({ navigation }) {
  return (
    <ProfileScreen Done={() => navigation.navigate('Home')}/>
  );
}

function MediaScreen({ route, navigation }) {

  const mediaParams = route.params
  let mediaUrl = mediaParams.mediaUrl

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image
        resizeMode={'contain'}
        style={{ width: '100%', height: '100%', marginBottom: 0 }}
        source={{ uri: mediaUrl }}
      />
    </View>
  );
}

function Tweet({ route, navigation }) {
  const tweetParams = route.params
  let ID = tweetParams.tweetID

  return (
    <TweetScreen tweetId={ID}/>
  );
}

export default function DrawerFunction() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="incio" component={Start} />
        <Drawer.Screen name="Editar Perfil" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
