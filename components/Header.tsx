import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>newAndroidApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#333',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
