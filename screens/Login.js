import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard, Button } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            email: '',
            password: '',
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput style={styles.input} placeholder="Email" clearTextOnFocus />
                    <TextInput style={styles.input} placeholder="Password" clearTextOnFocus />
                    <TouchableOpacity style={styles.button}> 
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signupContainer}>
                    <Text>Do not have account yet?</Text>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Signup')}>
                        <Text style={styles.signupBtn}>
                            Signup
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 

    formContainer: {
        // flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        borderBottomWidth: 1,
        marginVertical: 20,
        paddingVertical: 5,
        fontSize: 16,
        width: '80%',
        textAlign: 'center',
    },

    signupContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 10,
        flexDirection: 'row',
        paddingBottom: 30,
    },

    signupBtn: {
        color: '#12799f',
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 10,
    },

    button: {
        width: '80%',
        backgroundColor: '#12799f',
        paddingVertical: 15,
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    }
})