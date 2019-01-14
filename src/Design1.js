import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';

export default class Design1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text} >Name</Text>
          <View >
            <TextInput style={styles.textInput} placeholder="isim alanı" />
          </View>
        </View>
        <View style={styles.textInputContainer} >
          <Text style={styles.text} >Name</Text>
          <View >
            <TextInput style={styles.textInput} placeholder="isim alanı" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 50,
  },
  text: {
    color: '#000',
    marginBottom: 2,
  },
  textInput: {
    backgroundColor: '#fff',
    height: 40,
    minWidth: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ced8db',
  },
  textInputContainer: {
    marginTop: 20
  }

});
