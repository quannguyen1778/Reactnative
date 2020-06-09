import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default function ImageInfor({ route }) {
    const { name } = route.params;
    const { date } = route.params;
    const { owner } = route.params;
    const { tag } = route.params;
    return (
        <View style={styles.container}>
            <Text>
                Link ảnh:{name}
            </Text>
            <Text>
                Ngày đăng:{date}
            </Text>
            <Text>
                Người đăng:{owner}
            </Text>
            <Text>
                Link ảnh:{name}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    }
})
