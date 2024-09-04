import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Switch, ScrollView } from 'react-native';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const createTwoButtonAlert = () =>
    Alert.alert('Buy me some Coffee!', 'GCash: 09566694381', [
      {text: 'OK'},
    ]);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <ScrollView>
      
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <View>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
          }}
          style={styles.avatar}
        />
      </View>

      <View>
        <View style={[styles.viewFlexDirection, styles.alignLeft]}>
          <Text style={[styles.boldText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Name:
          </Text>
          <Text style={[styles.plainText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Royce Christopher Abante
          </Text>
        </View>

        <View style={[styles.viewFlexDirection, styles.alignLeft]}>
          <Text style={[styles.boldText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Address:
          </Text>
          <Text style={[styles.plainText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Caloocan City
          </Text>
        </View>

        <View style={[styles.viewFlexDirection, styles.alignLeft]}>
          <Text style={[styles.boldText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Email:
          </Text>
          <Text style={[styles.plainText, { color: isDarkMode ? '#fff' : '#000' }]}>
            rc.abante.psa@gmail.com
          </Text>
        </View>
      </View>

      <View>
        <View style={styles.body}>
          <Text style={[styles.boldText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Summary:
          </Text>
          <Text style={[styles.plainText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Passionate and dedicated React Native developer with 1 year of experience in developing cross-platform mobile applications. Seeking to leverage my skills in JavaScript, React Native, and mobile app development in a challenging role that allows me to contribute to innovative projects.
          </Text>
        </View>
      </View>

      <View>
        <View style={styles.body}>
          <Text style={[styles.boldText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Programming Language:
          </Text>
          <Text style={[styles.plainText, styles.textCenter, { color: isDarkMode ? '#fff' : '#000' }]}>
            Javascript, Typescript, Python, Dart, Java, PHP
          </Text>
        </View>
      </View>

      <View>
        <View style={styles.body}>
          <Text style={[styles.boldText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Frameworks:
          </Text>
          <Text style={[styles.plainText, styles.textCenter, { color: isDarkMode ? '#fff' : '#000' }]}>
            React Native, Laravel, FastAPI, Flutter
          </Text>
        </View>
      </View>

      <View>
        <View style={styles.body}>
          <Text style={[styles.boldText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Education:
          </Text>
          <Text style={[styles.plainText, styles.textCenter, { color: isDarkMode ? '#fff' : '#000' }]}>
            Bachelor of Science in Information Technology
          </Text>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={createTwoButtonAlert}>
          <Text style={styles.buttonText}>Buy me some Coffee!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.plainText, { color: isDarkMode ? '#fff' : '#000' }]}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>

      <StatusBar style="auto" translucent={false} backgroundColor='transparent' />
    </View>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  boldText: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  plainText: {
    fontWeight: '400',
    width: 500
  },
  viewFlexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  alignLeft: {
    alignSelf: 'flex-start',
  },
  body: {
    alignItems: 'center',
    margin: 10
  },
  textCenter: {
    textAlign: 'center'
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#5865f2',
    marginBottom: 20,
    width: '80%'
  },
  buttonText:{
    color: 'white'
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  }
});
