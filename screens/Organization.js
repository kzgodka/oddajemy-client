import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LinksScreen() {
  return (
     <View style={styles.container}>
        <Text>
          Lista Organizacji
        </Text>
     </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Organizacje',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
