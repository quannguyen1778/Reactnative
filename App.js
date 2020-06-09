import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screen/HomeScreen';
import ImageInfor from './Screen/ImageInfor';
import Zoom from './Screen/Zoom';
import Profile from './Screen/Profile';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{ title: 'Đăng Nhập' }}
          />
          <Stack.Screen
            name="infor"
            component={ImageInfor}
            options={{ title: 'Thông Tin Chi Tiết' }}
          />
          <Stack.Screen
            name="listanh"
            component={Profile}
            options={{ title: 'Thư Viện Ảnh' }}
          />
          <Stack.Screen
            name="zoomup"
            component={Zoom}
            options={{ title: 'Phóng To Ảnh' }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})
