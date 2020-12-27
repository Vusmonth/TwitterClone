import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, Modal, KeyboardAvoidingView, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-paper';
import firebase from 'firebase'
import storage from '@react-native-firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'
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

function WelcomeModal(page) {

    const navigation = useNavigation();

    if (page.page == 0) {
        return (
            <View
                style={{
                    width: '90%',
                    height: '75%',
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    elevation: 15,
                    borderColor: 'rgba(29,161,242,1.00)',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <Text style={{ marginTop: 35, fontSize: 16, fontWeight: 'bold', color: 'rgba(29,161,242,1.00)' }}>Olá, seja bem vindo</Text>

                <Icon name="twitter" size={60} color={'rgba(29,161,242,1.00)'} style={{ marginTop: 20 }} />

                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Este é o Twitter Clone</Text>
                <Text style={{ color: '#999', fontWeight: 'bold', marginHorizontal: 20, textAlign: 'center' }}>
                    Um projeto de estudos desenvolvido por Arthur Martins
                    que utiliza tecnologia react native e Google Firebase
                </Text>

                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <View style={{ width: 10, height: 10, backgroundColor: 'rgba(29,161,242,1.00)', borderRadius: 20, marginHorizontal: 5 }} />
                    <View style={{ width: 10, height: 10, backgroundColor: '#999', borderRadius: 20, marginHorizontal: 5 }} />
                    <View style={{ width: 10, height: 10, backgroundColor: '#999', borderRadius: 20, marginHorizontal: 5 }} />
                    <View style={{ width: 10, height: 10, backgroundColor: '#999', borderRadius: 20, marginHorizontal: 5 }} />
                </View>

            </View>
        )
    }
    if (page.page == 1) {
        return (
            <View
                style={{
                    width: '90%',
                    height: '75%',
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    elevation: 15,
                    borderColor: 'rgba(29,161,242,1.00)',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <Text style={{ marginTop: 35, fontSize: 16, fontWeight: 'bold', color: 'rgba(29,161,242,1.00)' }}>Funções limitadas</Text>

                <Icon name="lock1" size={60} color={'rgba(29,161,242,1.00)'} style={{ marginTop: 20 }} />

                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginHorizontal: 25 }}>A maior parte dos recursos originais esta desativada</Text>
                <Text style={{ color: '#999', fontWeight: 'bold', marginHorizontal: 20, textAlign: 'center' }}>
                    Este app foi programado apenas com as funções basicas e essenciais para o funcionamento
                    e demonstração das ferramentas estudadas.
                </Text>

                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <View style={{ width: 10, height: 10, backgroundColor: '#999', borderRadius: 20, marginHorizontal: 5 }} />
                    <View style={{ width: 10, height: 10, backgroundColor: 'rgba(29,161,242,1.00)', borderRadius: 20, marginHorizontal: 5 }} />
                    <View style={{ width: 10, height: 10, backgroundColor: '#999', borderRadius: 20, marginHorizontal: 5 }} />
                    <View style={{ width: 10, height: 10, backgroundColor: '#999', borderRadius: 20, marginHorizontal: 5 }} />
                </View>

            </View>
        )
    }

    if (page.page == 2) {
        return (
            <View
                style={{
                    width: '90%',
                    height: '75%',
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    elevation: 15,
                    borderColor: 'rgba(29,161,242,1.00)',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <Text style={{ marginTop: 35, fontSize: 16, fontWeight: 'bold', color: 'rgba(29,161,242,1.00)' }}>Entre em contato</Text>

                <Icon name="customerservice" size={60} color={'rgba(29,161,242,1.00)'} style={{ marginTop: 20 }} />

                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginHorizontal: 25, marginBottom: 20 }}>Entre em contato com o desenvolvedor atravez dos canais:</Text>

                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 25 }}>
                    <Icon name="mail" size={25} color={'#999'} />
                    <Text style={{ color: '#999', fontWeight: 'bold', marginLeft: 10, alignSelf: 'center' }}>
                        Arthurmartins08@outlook.com
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 25 }}>
                    <Icon name="instagram" size={25} color={'#999'} />
                    <Text style={{ color: '#999', fontWeight: 'bold', marginLeft: 10, alignSelf: 'center' }}>
                        @Vusmonth
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 25 }}>
                    <Icon name="phone" size={25} color={'#999'} />
                    <Text style={{ color: '#999', fontWeight: 'bold', marginLeft: 10, alignSelf: 'center' }}>
                        (77)981216770
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <View style={{ width: 10, height: 10, backgroundColor: '#999', borderRadius: 20, marginHorizontal: 5 }} />
                    <View style={{ width: 10, height: 10, backgroundColor: '#999', borderRadius: 20, marginHorizontal: 5 }} />
                    <View style={{ width: 10, height: 10, backgroundColor: 'rgba(29,161,242,1.00)', borderRadius: 20, marginHorizontal: 5 }} />
                    <View style={{ width: 10, height: 10, backgroundColor: '#999', borderRadius: 20, marginHorizontal: 5 }} />
                </View>

            </View>
        )
    }

    if (page.page == 3) {
        return (
            <View
                style={{
                    width: '90%',
                    height: '75%',
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    elevation: 15,
                    borderColor: 'rgba(29,161,242,1.00)',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <Text style={{ marginTop: 35, fontSize: 16, fontWeight: 'bold', color: 'rgba(29,161,242,1.00)' }}>Edite seu perfil</Text>

                <Icon name="user" size={60} color={'rgba(29,161,242,1.00)'} style={{ marginTop: 20 }} />

                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginHorizontal: 60, marginBottom: 20 }}>Para começar, editaremos seu perfil.</Text>

                <Text style={{ color: '#999', fontWeight: 'bold', marginHorizontal: 20, alignSelf: 'center', textAlign: 'center' }}>
                    Você será direcionado para uma pagina de edição do perfil, edite como e quando quiser.
                    </Text>

                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <View style={{ width: 10, height: 10, backgroundColor: '#999', borderRadius: 20, marginHorizontal: 5 }} />
                    <View style={{ width: 10, height: 10, backgroundColor: '#999', borderRadius: 20, marginHorizontal: 5 }} />
                    <View style={{ width: 10, height: 10, backgroundColor: '#999', borderRadius: 20, marginHorizontal: 5 }} />
                    <View style={{ width: 10, height: 10, backgroundColor: 'rgba(29,161,242,1.00)', borderRadius: 20, marginHorizontal: 5 }} />
                </View>
            </View>
        )
    }
}

function MediaPost(url) {

    const navigation = useNavigation();

    if (url.url != '') {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Media', { mediaUrl: url.url })}>
                <Image
                    resizeMode={'cover'}
                    style={{ width: '90%', height: 200, marginBottom: 0, borderRadius: 15 }}
                    source={{ uri: url.url }}
                />
            </TouchableOpacity>
        )
    }
    else {
        return (
            <Image
                style={{ width: 0, height: 0 }}
                source={{ uri: null }}
            />
        )
    }

}

function TweetPrefab({ _avatar, _name, _tag, _text, _mediaUrl, _ID, _repliesCount }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'flex-start' }} onPress={() => navigation.navigate('Tweet', { tweetID: _ID })}>
            <Avatar.Image size={50} source={{ uri: _avatar }} style={{ marginTop: 15, marginHorizontal: 15, backgroundColor: 'grey' }} />

            <View>
                <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{_name}</Text>
                    <Text style={{ color: '#999', marginHorizontal: 5 }}>@{_tag}</Text>
                </View>
                <Text style={{ maxWidth: '85%', marginBottom: 5 }}>{_text}</Text>

                <MediaPost url={_mediaUrl} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '65%' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        
                        <Icon name="message1" size={15} color={'#999'} style={{ marginVertical: 10 }} />

                        <Text style={{ color: '#999', marginHorizontal: 5 }}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="retweet" size={15} color={'#999'} style={{ marginVertical: 10 }} />
                        <Text style={{ color: '#999', marginHorizontal: 5 }}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="hearto" size={15} color={'#999'} style={{ marginVertical: 10 }} />
                        <Text style={{ color: '#999', marginHorizontal: 5 }}>0</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default class HomeScreen extends React.Component {

    state = {
        contentData: [],
        postModal: false,
        modalTextInput: '',
        mediaUrl: '',
        avatarPost: '',
        page: 0,
        WelcomeModalBool: true
    }

    componentDidMount() {
        this.dataToState()
    }

    dataToState = async () => {

        const profilePic = await AsyncStorage.getItem('profilePic');
        const FirstTime = await AsyncStorage.getItem('FirstTime');

        if(FirstTime == 'false'){
            this.setState({
                WelcomeModalBool: false,
            })
        }
        this.setState({
            avatarPost: profilePic,
        })

        firebase.firestore()
            .collection('Tweets')
            .get()
            .then(querySnapshot => {
                let contentPages = []

                querySnapshot.forEach(documentSnapshot => {
                    contentPages.push({
                        id: documentSnapshot.id,
                        autor: documentSnapshot.data().autor,
                        tag: documentSnapshot.data().tag,
                        contentText: documentSnapshot.data().contentText,
                        avatar: documentSnapshot.data().avatar,
                        mediaUrl: documentSnapshot.data().contentMedia,
                        replies: documentSnapshot.data().replies,
                    })
                });

                this.setState({
                    contentData: contentPages.reverse(),
                })
            })
    }

    changeModalVisible = () => {
        if (this.state.postModal == false) {
            this.setState({
                postModal: true
            })
        }
        else {
            this.setState({
                postModal: false
            })
        }
    }

    postTweet = async () => {
        const name = await AsyncStorage.getItem('username');
        const tag = await AsyncStorage.getItem('tag');
        const profilePic = await AsyncStorage.getItem('profilePic');

        if ((this.state.modalTextInput != '') || (this.state.mediaUrl != '')) {
            firebase.firestore()
                .collection('Tweets')
                .doc((new Date().getTime()).toString())
                .set({
                    avatar: profilePic,
                    autor: name,
                    tag: tag,
                    replies: [],
                    contentText: this.state.modalTextInput,
                    contentMedia: this.state.mediaUrl,
                })
                .then(() => {
                    this.dataToState()
                    this.changeModalVisible()
                });
        }
        else {
            alert('Sua publicação esta vazia!')
        }


    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 0.6,
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

        firebase.storage().ref('/Media').child(fileName)
            .put(file)
            .then(function (snapshot) {
                return firebase.storage().ref('/Media').child(fileName).getDownloadURL()
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

    welcomePage = async () =>{
        this.setState({
            page: this.state.page + 1,
        })

        if(this.state.page >= 3){
            this.setState({
                WelcomeModalBool: false
            })
            this.props.openProfile()
            await AsyncStorage.setItem('FirstTime', 'false')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="light" />

                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.state.WelcomeModalBool}
                >
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                        <WelcomeModal page={this.state.page} />

                        <TouchableOpacity
                            onPress={() => this.welcomePage()}
                            style={{
                                width: '50%',
                                elevation: 20,
                                height: 60,
                                backgroundColor: 'rgba(29,161,242,1.00)',
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 20
                            }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>Proximo</Text>
                        </TouchableOpacity>

                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.postModal}
                >
                    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#fff' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <TouchableOpacity onPress={() => this.changeModalVisible()} style={{ marginTop: 15 }}>
                                    <Icon name="close" color="rgba(29,161,242,1.00)" size={25} style={{ marginLeft: 15 }} />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                onPress={() => this.postTweet()}
                                style={{ backgroundColor: 'rgba(29,161,242,1.00)', margin: 15, borderRadius: 20, width: 80, height: 35, alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Tweetar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Avatar.Image size={45} source={{ uri: this.state.avatarPost }} style={{ marginHorizontal: 15 }} />
                            <TextInput
                                placeholder={'Digite alguma coisa.'}
                                multiline={true}
                                style={{ marginRight: 50, maxWidth: '75%' }}
                                onChangeText={(text) => this.setState({ modalTextInput: text })}
                            />
                        </View>
                    </KeyboardAvoidingView>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => this.pickImage('cu')}
                            style={{
                                backgroundColor: '#9990',
                                borderColor: '#999',
                                borderWidth: 1,
                                marginHorizontal: 15,
                                marginBottom: 50,
                                borderRadius: 20,
                                width: 100,
                                height: 100,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Icon name="camerao" size={45} color={'rgba(29,161,242,1.00)'} />
                        </TouchableOpacity>

                        <Image
                            source={{ uri: this.state.imageUri }}
                            style={{
                                marginHorizontal: 15,
                                marginBottom: 50,
                                borderRadius: 20,
                                width: 100,
                                height: 100,
                                resizeMode: 'cover'
                            }}
                        />

                    </View>
                </Modal>

                <View style={{
                    position: 'absolute',
                    right: '5%',
                    bottom: '12%',
                    zIndex: 2
                }}>

                    <TouchableOpacity
                        onPress={() => this.changeModalVisible()}
                        style={{
                            backgroundColor: 'rgba(29,161,242,1.00)',
                            borderRadius: 30,
                            width: 55,
                            height: 55,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Icon name="plus" size={35} color={'#fff'} />
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 15, alignContent: 'center', borderBottomColor: '#999', borderBottomWidth: 1 }}>
                    <TouchableOpacity onPress={this.props.drawerPress}>
                        <Icon name="bars" size={35} color={'rgba(29,161,242,1.00)'} style={{ marginHorizontal: 25, marginBottom: 15 }} />
                    </TouchableOpacity>
                    <Icon name="twitter" size={25} color={'rgba(29,161,242,1.00)'} style={{ alignSelf: 'center', marginBottom: 15 }} />
                    <Icon name="exclamationcircleo" size={30} color={'rgba(29,161,242,1.00)'} style={{ marginHorizontal: 25, marginBottom: 15 }} />
                </View>

                <FlatList style={{ width: '100%', height: '80%' }}
                    data={this.state.contentData}
                    renderItem={({ item }) =>
                        <TweetPrefab
                            _avatar={item.avatar}
                            _name={item.autor}
                            _tag={item.tag}
                            _text={item.contentText}
                            _mediaUrl={item.mediaUrl}
                            _ID={item.id}
                            _repliesCount={item.replies}
                        />
                    }

                    keyExtractor={item => item.id}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 15, alignContent: 'center', borderTopColor: '#999', borderTopWidth: 1 }}>
                    <Icon name="home" size={25} color={'rgba(29,161,242,1.00)'} style={styles.bottomButtoms} />
                    <Icon name="search1" size={25} color={'rgba(29,161,242,1.00)'} style={styles.bottomButtoms} />
                    <Icon name="bells" size={25} color={'rgba(29,161,242,1.00)'} style={styles.bottomButtoms} />
                    <Icon name="mail" size={25} color={'rgba(29,161,242,1.00)'} style={styles.bottomButtoms} />
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    bottomButtoms: {
        marginHorizontal: 25,
        marginTop: 15
    }
});
