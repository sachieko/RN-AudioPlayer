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
    height: 60,
    paddingTop: 20,
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
