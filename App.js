import  React ,{ useState } from 'react';
import { View, StyleSheet, Button,TextInput } from 'react-native';
import * as Speech from 'expo-speech';


export default function App() {

  const [text, setText] = useState('');

 /* const speak = () => {
    const thingToSay = 'Chicken';
    Speech.speak(thingToSay);
  };*/
  const speak = (text) => {
   // const thingToSay = 'Chicken';
    Speech.speak(text);
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='text'  onChangeText={text => setText(text)} />
      <Button title="Press to hear text" onPress={() => speak(text)} />
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor : '#000',
    width: 300,
    padding: 10,
    fontSize: 20,
    margin:10,
  },
});