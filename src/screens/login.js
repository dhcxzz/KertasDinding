import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function login({navigation}) {
  return (
    <KeyboardAwareScrollView style={{backgroundColor: '#FFF', flex: 1}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 64,
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          color: '#2B4D59',
          marginTop: 10,
          marginBottom: 0,
        }}>
        welcome
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 36,
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          color: '#DA674A',
        }}>
        to kertas dinding,
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontFamily: 'Montserrat',
          fontStyle: 'italic',
          color: '#2B4D59',
          marginTop: 20,
        }}>
        "temukan gambar favoritmu!"
      </Text>
      <View style={styles.kotak}>
        <View style={{marginBottom: 20}}>
          <Text style={styles.login}>login</Text>
          <Text style={styles.namaInput}>nama</Text>
          <TextInput style={styles.input} />

          <Text style={styles.namaInput}>password</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <View style={{alignItems: 'center', marginBottom: 15}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.button}>
            <Text style={styles.buttonFont}>submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
export default login;

const styles = StyleSheet.create({
  kotak: {
    borderRadius: 30,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  input: {
    borderRadius: 30,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
  },
  namaInput: {
    paddingTop: 20,
    fontFamily: 'Montserrat',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#DA674A',
    marginBottom: 5,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#2B4D59',
    width: 110,
    borderRadius: 30,
    padding: 5,
    elevation: 5,
  },
  buttonFont: {
    color: '#FFDC7C',
    fontFamily: 'Montserrat',
    fontSize: 24,
    textAlign: 'center',
  },
  login: {
    color: '#FFAA67',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 64,
    textAlign: 'center',
    paddingBottom: 20,
  },
});
