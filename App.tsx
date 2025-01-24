import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElavatedCards from './components/ElavatedCards';

const App = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.Txt}>Hello Guys</Text>
      <Image
        style={Styles.Image}
        source={{
          uri: 'https://tse2.mm.bing.net/th?id=OIP.GiiyT3mqVP5Y1vWTjZ_engHaHN&pid=Api&P=0&h=180',
        }}></Image>

      <Button title="press me"></Button>
      <TouchableOpacity
        style={Styles.TouchableOpacity}
        onPress={() => Alert.alert('pressed')}>
        <Text>hello</Text>
      </TouchableOpacity>

      <TouchableHighlight style={Styles.TouchableHighlight}>
        <Text>press me too</Text>
      </TouchableHighlight>

      <Pressable style={Styles.Pressable}>
        <Text> Presseble</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default App;

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  Txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  Image: {
    width: 200,
    height: 300,
  },
  TouchableOpacity: {
    padding: 10,
    backgroundColor: 'green',
  },
  TouchableHighlight: {
    padding: 10, backgroundColor: 'red'
  },
  Pressable: {
    padding: 10, backgroundColor: 'yellow'
  },
});
