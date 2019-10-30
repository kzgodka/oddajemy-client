import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard, Button, Image, StatusBar, KeyboardAvoidingView } from 'react-native';

export default class Profile extends Component {

    render() {
        return(

            <View style={styles.container}>
                <Text>zalogowano poprawnie</Text>
            </View>

        );
    }

}

Profile.navigationOptions = {
    header: null,
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})