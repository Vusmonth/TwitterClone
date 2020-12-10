import React from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import firebase from 'firebase'
import storage from '@react-native-firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { AsyncStorage } from 'react-native';

var firebaseConfig = {
    apiKey: "AIzaSyD5vKiGaiyf2ewcy6oHlfO9gYK_bjLnQSA",
    authDomain: "twitterclone-6c3e3.firebaseapp.com",
    databaseURL: "https://twitterclone-6c3e3.firebaseio.com",
    projectId: "twitterclone-6c3e3",
    storageBucket: "twitterclone-6c3e3.appspot.com",
    messagingSenderId: "586997459041",
    appId: "1:586997459041:web:e603973365f3016103a220"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default class ProfileScreen extends React.Component {

    state = {
        nameInput: '',
        tagInput: '',
        mediaUrl: ''
    }

    componentDidMount() {
        this._restoreData()
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            base64: true
        });
        this.setState({
            imageUri: result.uri,
        })

        console.log(result.base64)

        const response = await fetch(result.uri);
        const blob = await response.blob();
        var file = (blob) // use the Blob or File API

        const fileName = (new Date().getTime()).toString()

        firebase.storage().ref('/profilePic').child(fileName)
            .put(file)
            .then(function (snapshot) {
                return firebase.storage().ref('/profilePic').child(fileName).getDownloadURL()
            })
            .then((url) => {
                console.log(url)
                this.setState({
                    mediaUrl: url
                })
            })

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    _storeData = async () => {
        await AsyncStorage.setItem('username', this.state.nameInput)
        await AsyncStorage.setItem('tag', this.state.tagInput)
        await AsyncStorage.setItem('profilePic', this.state.mediaUrl)
        alert('Alterações salvas!')
    };

    _restoreData = async () => {
        const name = await AsyncStorage.getItem('username');
        const tag = await AsyncStorage.getItem('tag');
        const profilePic = await AsyncStorage.getItem('profilePic');

        this.setState({
            mediaUrl: profilePic,
            nameInput: name,
            tagInput: tag
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="light" />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', borderBottomColor: '#999', borderBottomWidth: 1 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                        <TouchableOpacity onPress={this.props.Done}>
                            <Icon name="arrowleft" size={30} color={'rgba(29,161,242,1.00)'} style={{ marginVertical: 15, marginRight: 20 }} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Editar perfil</Text>
                    </View>

                    <TouchableOpacity onPress={() => this._storeData()}>
                        <Text style={{ fontWeight: 'bold', marginRight: 10, color: 'rgba(29,161,242,1.00)' }}>SALVAR</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 15 }}
                    onPress={() => this.pickImage()}
                >
                    <Avatar.Image size={80}
                        source={{ uri: this.state.mediaUrl }}
                        style={{ marginHorizontal: 15, backgroundColor: 'grey' }}
                    />
                    <Text>Toque para editar</Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'center', width: '100%', marginTop: 30 }}>
                    <View style={styles.profileFields}>
                        <Text style={styles.profileTexts}>Nome</Text>
                        <TextInput
                            value={this.state.nameInput}
                            fontSize={16}
                            multiline={false}
                            onChangeText={(text) => this.setState({ nameInput: text })}
                        />
                    </View>

                    <View style={styles.profileFields}>
                        <Text style={styles.profileTexts}>Tag</Text>
                        <TextInput
                            value={this.state.tagInput}
                            fontSize={16}
                            multiline={false}
                            onChangeText={(text) => this.setState({ tagInput: text })}
                        />
                    </View>
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
    },
    profileFields: {
        width: '90%',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(29,161,242,1.00)',
        marginBottom: 15
    },
    profileTexts: {
        color: '#999',
        fontSize: 16,
    }
});
