import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

const ProfileScreen = ({navigation, route}) => {
  return (
    <Text
      style={{
        color: 'black',
        fontSize: 20,
      }}>
      This is {route.params.name}'s profile
    </Text>
  );
};

export default ProfileScreen;
