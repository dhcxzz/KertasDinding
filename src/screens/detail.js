import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';

function detail({route}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{
            width: 175,
            height: 300,
            marginLeft: 15,
            marginTop: 20,
            borderRadius: 30,
          }}
          source={{uri: route.params.foto}}
        />
        <View>
          <View style={styles.profilBox}>
            <Image
              source={{uri: route.params.pp}}
              style={{
                width: 60,
                height: 60,
                margin: 10,
                borderRadius: 15,
                padding: 10,
              }}
            />
            <Text style={styles.profilNama}>{route.params.nama}</Text>
          </View>
          <View style={styles.linkBox}>
            <TouchableOpacity
              onPress={() => Linking.openURL(route.params.link)}>
              <Text style={styles.linkIsi}>unsplash page</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.exif}>
        <View style={styles.exifBox}>
          <Text style={styles.exifJudul}>pembuat kamera</Text>
          <Text style={styles.exifIsi}>
            {route.params.pembuatKamera
              ? route.params.pembuatKamera
              : 'Data Tidak Tersedia'}
          </Text>
        </View>
        <View style={styles.exifBox}>
          <Text style={styles.exifJudul}>model kamera</Text>
          <Text style={styles.exifIsi}>
            {route.params.modelKamera
              ? route.params.modelKamera
              : 'Data Tidak Tersedia'}
          </Text>
        </View>
        <View style={styles.exifBox}>
          <Text style={styles.exifJudul}>focal length</Text>
          <Text style={styles.exifIsi}>
            {route.params.focal ? route.params.focal : 'Data Tidak Tersedia'}
          </Text>
        </View>
        <View style={styles.exifBox}>
          <Text style={styles.exifJudul}>aperture</Text>
          <Text style={styles.exifIsi}>
            {route.params.aperture
              ? route.params.aperture
              : 'Data Tidak Tersedia'}
          </Text>
        </View>
        <View style={styles.exifBox}>
          <Text style={styles.exifJudul}>iso</Text>
          <Text style={styles.exifIsi}>
            {route.params.iso ? route.params.iso : 'Data Tidak Tersedia'}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default detail;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  exif: {
    marginTop: 30,
  },
  exifBox: {
    borderRadius: 30,
    elevation: 5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
  },
  exifJudul: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: '#DA674A',
    borderRadius: 30,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    padding: 15,
    width: 170,
  },
  exifIsi: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    padding: 15,
    color: '#2B4D59',
  },
  profilBox: {
    borderRadius: 30,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    width: 150,
    height: 150,
    marginTop: 80,
    marginBottom: 20,
    marginLeft: 20,
    alignItems: 'center',
  },
  profilNama: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#DA674A',
  },
  linkBox: {
    borderRadius: 30,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    width: 150,
    marginLeft: 20,
  },
  linkIsi: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#2B4D59',
    textAlign: 'center',
    padding: 10,
  },
});
