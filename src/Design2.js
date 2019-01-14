import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, Picker} from 'react-native';

export default class Design2 extends Component {
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

        <View style={styles.textInputTwoColContainer}>
          <View style={styles.textInputLeftContainer} >
            <Text style={styles.text} >Language</Text>
            <View style={{ height: 50, width: 100, borderBottomWidth: 1, borderBottomColor: '#ced8db' }} >
              <Picker
                style={{ height: 50, width: 100 }}
                >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          </View>

          <View style={styles.textInputRightContainer} >
            <Text style={styles.text} >Language</Text>
            <View style={{ height: 50, width: 100, borderBottomWidth: 1, borderBottomColor: '#ced8db' }} >
              <Picker
                style={{ height: 50, width: 100 }}
                >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
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
    backgroundColor: '#fff',
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
    borderBottomWidth: 1,
    borderColor: '#ced8db',
  },
  textInputContainer: {
    marginTop: 20
  },
  textInputTwoColContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  textInputLeftContainer: {
    marginTop: 20,
    width: '50%',

  },
  textInputRightContainer: {
    marginTop: 20,
    width: '50%',
  
  }

});
