import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { KeyboardAvoidingView, TouchableOpacity, View, TextInput, StyleSheet, Text} from "react-native";
import { RootStackParamList } from "./ScreenList";

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: React.FC<LoginScreenProps> = (props) => {

    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    return (
        <View style={style.container}>
        <KeyboardAvoidingView style={style.keyboardavoidview}>
            <View>
                <TextInput
                    style={style.textInput}
                    value={username}
                    placeholder={'Username'}
                    onChangeText={text => setUsername(text)}
                />
                <TextInput
                    style={style.textInput}
                    value={password}
                    placeholder={'Password'}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            <View style={style.buttonContainer}>
                <Text style={style.forgotPasswordButton}>Forgot Password?</Text>
                <TouchableOpacity style={style.loginButton}>
                    <Text style={style.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        <TouchableOpacity style={style.createAccountButton}>
            <Text style={style.loginText}>Login</Text>
        </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    keyboardavoidview: {
        width: '70%',
    },
    textInput: {
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(255, 255, 0, 0)',
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
    },
    forgotPasswordButton: {
        marginBottom: 20,
        fontSize: 15,
        color: 'blue',
        alignSelf: 'center',
    },
    loginButton: {
        backgroundColor: 'blue',
        height: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,

    },
    loginText: {
        color: 'white',
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    createAccountButton: {
        width: '70%',
        bottom: 0,
        height: 40,
        borderRadius:10,
        marginBottom: 20,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent:'center',
        position: 'absolute',
    }
});

export default Login;

