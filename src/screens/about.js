import React from 'react';
import {Text, View, StyleSheet, Image, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function about() {
  return (
    <View style={{backgroundColor: '#FFFF'}}>
      <View style={styles.descBox}>
        <Text
          style={{
            textAlign: 'center',
            paddingTop: 30,
            paddingHorizontal: 20,
            fontSize: 18,
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            color: '#DA674A',
          }}>
          Aplikasi ini merupakan final project dari bootcamp React Native Pemula
          Sanbercode Batch-18. Keterangan lebih lanjut mengenai aplikasi ini
          dapat dibaca di
        </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://github.com/dhcxzz/KertasDinding')
          }>
          <Text
            style={{
              textAlign: 'center',
              paddingBottom: 30,
              fontSize: 18,
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              color: '#2B4D59',
            }}>
            github
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: 'center',
          marginVertical: 5,
          fontSize: 36,
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          color: '#2B4D59',
        }}>
        developed by :
      </Text>
      <View style={styles.developerBox}>
        <Image
          source={require('../assets/among.png')}
          style={{
            width: 150,
            height: 150,
            margin: 10,
            borderRadius: 15,
            padding: 10,
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 5,
            fontSize: 30,
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            color: '#2B4D59',
          }}>
          Syarif Hilmi Ramadhani
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://github.com/dhcxzz')}>
          <Image
            source={require('../assets/github.png')}
            style={{
              width: 80,
              height: 80,
              margin: 10,
              padding: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default about;

const styles = StyleSheet.create({
  descBox: {
    borderRadius: 30,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  developerBox: {
    borderRadius: 30,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
});
