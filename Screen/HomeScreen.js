import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Button, TextInput, Image, Alert } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';



export default function ({ navigation }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <View>
            <Image style={{ width: 100, height: 100, marginTop: 30, marginLeft: 120 }}
                source={{ uri: 'https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg' }}></Image>
            <Text style={styles.txt1}>Please enter your account</Text>

            <TextInput style={styles.txt}
                placeholder='Please enter your name'
                underlineColorAndroid="transparent"
                value={username}
                onChangeText={(username) => setUsername(username)}></TextInput>
            <TextInput style={styles.txt}
                placeholder='Please enter your password'
                underlineColorAndroid="transparent"
                secureTextEntry={true}
                value={password}
                onChangeText={(password) => setPassword(password)}></TextInput>
            <TouchableHighlight
                style={styles.btn}
                onPress={() => {
                    if (username == 'admin' && password == 'admin') {
                        navigation.navigate('listanh')
                        alert('Đăng nhập thành công !')
                    } else {
                        Alert.alert(
                            'Thông Báo',
                            'Vui Lòng Nhập Tên Và Mật Khẩu !',
                            [
                                {
                                    text: 'Thoát',
                                    onPress: () => console.log('Cancel Passed'),
                                    style: 'cancel',
                                },
                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                            ],
                            { cancelable: false },
                        );
                    }
                }}>
                <Text>Login</Text>
            </TouchableHighlight>
        </View >
    )
}

const styles = StyleSheet.create({
    txt: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderWidth: 0.5
    },
    txt1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 70
    },
    btn: {
        color: 'white',
        backgroundColor: 'teal',
        width: 50,
        height: 30,
        alignItems: "center",
        marginTop: 20,
        marginLeft: 160
    }
})
