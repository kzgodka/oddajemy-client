import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard, Button, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            email: '',
            password: '',
        }
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        let value = await AsyncStorage.getItem('email');
        if (value !== null) {
            this.props.navigation.navigate('Profile');
        }
    }

    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <Image 
                        style={styles.image}
                        source={require('../assets/images/login-screen.jpg')}
                    />
                    <LinearGradient colors={['#5237ed', '#1b1b1b']} style={styles.gradient} />
                    <View style={styles.appWrapper}>
                        <View style={styles.formContainer}>
                            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#fff" clearTextOnFocus onChangeText={ (email) => this.setState({email}) } underlineColorAndroid="transparent" />
                            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#fff" secureTextEntry clearTextOnFocus  onChangeText={ (password) => this.setState({password})} underlineColorAndroid="transparent"/>
                            <TouchableOpacity style={styles.button} onPress={this.login}> 
                                <Text style={styles.buttonText}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.signupContainer}>
                            <Text style={styles.signupText}>Do not have account yet?</Text>
                            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Signup')}> 
                                <Text style={styles.signupBtn}>
                                    Signup
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }

    login = () => {

        fetch('http://0.0.0.0:3000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
        .then(response => response.json())
        .then(res => {
            if(res.success === true) {
                AsyncStorage.setItem('email', res.user);
                this.props.navigation.navigate('Profile');
            } else {
                alert(res.message);
            }
        })
        .done();
    }
}

Login.navigationOptions = {
    header: null,
  };

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },

    container: {
        flex: 1,
    }, 

    appWrapper: {
        flex: 1,
    }, 

    image: {
        flex: 1,
        position: 'absolute',
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      },

    gradient: {
        flex: 1,
        opacity: .5,
        height: '100%',
        width: '100%',
        position: 'absolute',
    },

    formContainer: {
        // flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        borderBottomWidth: 1,
        borderColor: '#fff',
        marginVertical: 20,
        paddingVertical: 5,
        fontSize: 16,
        width: '80%',
        textAlign: 'center',
        color: '#fff',
        opacity: .8,
    },

    signupContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 10,
        flexDirection: 'row',
        paddingBottom: 30,
    },

    signupText: {
        color: '#fff',
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