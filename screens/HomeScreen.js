import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
          <Text style={styles.supa}>Supa</Text>
          <Text style={styles.menu}>Menu</Text>
      </Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        color="#F7941D"
        style={styles.buttonSpace}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
        color="#F7941D"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7941D',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonSpace: {
    marginBottom: 12,
  },
  supa: {
    color: 'white',
  },
  menu: {
    color: 'black',
  }
});
