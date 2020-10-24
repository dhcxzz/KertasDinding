import React, {useEffect} from 'react';
import {Image, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/logo.png')}
        style={{
          marginTop: '50%',
        }}
      />
    </View>
  );
};

export default Splash;
