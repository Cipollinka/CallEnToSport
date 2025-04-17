import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const CallEnLoadToSporttAppScreen = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const navigation = useNavigation();

  useEffect(() => {
    navigation.replace('Home');
  }, []);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        zIndex: 1,
        backgroundColor: 'black',
      }}></View>
  );
};

export default CallEnLoadToSporttAppScreen;
