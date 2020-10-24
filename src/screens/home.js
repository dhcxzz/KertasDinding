import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
function home() {
  const [dataImages, setDataImages] = useState([]);
  const refresh = () => {
    Axios.get(
      'https://api.unsplash.com/photos/random?client_id=0dyaVi7ZARUx_K2R-30aFFetTG2bch_mTmBbAv0AvLM&count=4',
    )
      .then((result) => setDataImages(result.data))
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    refresh();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.layout}>
        {dataImages.map((gambar, index) => (
          <Image
            key={index}
            source={{uri: gambar.urls.small}}
            style={{
              width: 175,
              height: 270,
              margin: 10,
              borderRadius: 30,
            }}
          />
        ))}
      </View>
      <View style={{alignItems: 'center', marginBottom: 15}}>
        <TouchableOpacity onPress={() => refresh()} style={styles.button}>
          <Text style={styles.buttonFont}>refresh</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default home;

const styles = StyleSheet.create({
  layout: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#2B4D59',
    width: 110,
    borderRadius: 30,
    padding: 5,
  },
  buttonFont: {
    color: '#FFDC7C',
    fontFamily: 'Montserrat',
    fontSize: 24,
    textAlign: 'center',
  },
});
