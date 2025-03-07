import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStyle from './Style'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World React Native</Text>
      <text style={styles.textemo}>🐇✨🌕🌈🎸⋆🌊🦈💐</text>
      <text style={styles.textlower}>#ITSakhon </text>
      <text style={MyStyle.textTest}>kod kid tueng Gammmmmm</text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "black",
    fontSize: 30,
  },
  textemo: {
    marginTop: 10,
  },
  textlower: {
    marginTop: 10,
    color: "black",
    fontSize: 20,
  },
});