import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AddItems() {
  return (
     <View style={styles.container}>
        <Text>
          Dodaj nowy przedmiot
        </Text>
     </View>
  );
}

AddItems.navigationOptions = {
  title: 'Przedmioty',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});


// export default function SettingsScreen() {
//   /**
//    * Go ahead and delete ExpoConfigView and replace it with your content;
//    * we just wanted to give you a quick view of your config.
//    */
//   return <ExpoConfigView />;
// }

// SettingsScreen.navigationOptions = {
//   title: 'app.json',
// };



