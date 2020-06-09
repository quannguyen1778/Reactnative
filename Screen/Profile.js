import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Profile({ navigation }) {
    const [dulieu, setdulieu] = useState();
    return (
        <View>
            <FlatList
                numColumns='2'
                data={dulieu}
                renderItem={({ item }) =>
                    <View
                        style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('zoomup', { name: item.url_l, date: item.datetaken, owner: item.ownername, tag: item.tags, width: item.width_l, height: item.height_l })
                            }>
                            <Text style={{ fontSize: 12, textAlign: "center", color: '#008080', margin: 20, marginBottom: 0, marginLeft: 5, backgroundColor: '#FFFF99', width: 180 }}>{item.title}</Text>
                            <Image style={{ width: 180, height: 280, borderRadius: 10, margin: 10 }}
                                source={{ uri: item.url_l }}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                }
                keyExtractor={item => item.id}>
            </FlatList>


            <View style={styles.container}>
                <Button title="Load"
                    onPress={() => {
                        fetch('https://www.flickr.com/services/rest', {
                            method: 'POST',
                            body: new URLSearchParams({
                                api_key: "7004c7897f34269a7a0644179becb63e",
                                user_id: "188738998@N07",
                                extras: 'description, license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o,tags',
                                format: 'json',
                                method: 'flickr.favorites.getList',
                                nojsoncallback: '1',
                                per_page: '40',
                                page: '0',
                            }).toString(),
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        })
                            .then(response => response.json())
                            .then(json => { setdulieu(json.photos.photo) }
                            )
                    }}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200
    },
})
