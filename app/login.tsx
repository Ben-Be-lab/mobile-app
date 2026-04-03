import React, { useState } from 'react';
import { View, Text, TextInput, Button, CheckBox, TouchableOpacity } from 'react-native';
import { GoogleSignIn } from 'expo-google-sign-in';
// import necessary Icon components for Google and Apple

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        // Handle login functionality here
    };

    const handleForgotPassword = () => {
        // Handle forgot password functionality here
    };

    const handleSignUp = () => {
        // Handle sign-up functionality here
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f0f8ff' }}>
            <Text style={{ fontSize: 24, color: '#0000ff', textAlign: 'center', marginBottom: 20 }}>Login</Text>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}
            />
            <TextInput
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <CheckBox
                    value={rememberMe}
                    onValueChange={setRememberMe}
                />
                <Text style={{ marginLeft: 10 }}>Remember Me</Text>
            </View>
            <Button title='Login' onPress={handleLogin} />
            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={{ color: '#0000ff', marginTop: 10 }}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp}>
                <Text style={{ color: '#0000ff', marginTop: 10 }}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 20 }}>
                <Button title='Login with Google' onPress={GoogleSignIn} color='#db4437' />
                <Button title='Login with Apple' onPress={() => { /* Handle Apple login */ }} color='#000000' />
            </View>
        </View>
    );
};

export default LoginScreen;