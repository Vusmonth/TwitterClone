import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-paper';
import firebase from 'firebase'
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

function MediaPost(url) {

    const navigation = useNavigation();

    if (url.url != '') {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Media', { mediaUrl: url.url })}
                style={{ width: '100%', height: 300, marginHorizontal: 15, marginTop: 5 }}
            >
                <Image
                    resizeMode={'cover'}
                    style={{ width: '90%', height: '100%', marginBottom: 0, borderRadius: 15 }}
                    source={{ uri: url.url }}
                />
            </TouchableOpacity>
        )
    }
    else {
        return (
            <Image
                style={{ width: 0, height: 0 }}
                source={{ uri: url.url }}
            />
        )
    }

}

function ReplyPrefab({ _avatar, _autor, _tag, _contentText, _replyTo }) {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '100%', marginTop: 15, borderBottomColor: '#999', borderBottomWidth: 1 }}>
            <Avatar.Image size={60}
                source={{ uri: _avatar }}
                style={{ marginHorizontal: 15, backgroundColor: 'grey' }}
            />

            <View>
                <View style={{ marginTop: 0, flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{_autor}</Text>
                    <Text style={{ color: '#999', marginLeft: 5 }}>@{_tag}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ color: '#999' }}>Em resposta a </Text>
                    <Text style={{ color: 'rgba(29,161,242,1.00)' }}>@{_replyTo}</Text>
                </View>


                <Text style={{ marginTop: 5, width: '70%', marginBottom: 20, }}>
                    {_contentText}
                </Text>
            </View>
        </View>
    )
}

export default class HomeScreen extends React.Component {

    state = {
        tweetData: {
            autor: '...',
            avatar: '',
            contentMedia: '',
            contentText: '...',
            tag: '...',
        },

        replies: [],

        userData: {
            name: '',
            tag: '',
            avatar: ''
        },

        replyText: ''
    }

    componentDidMount() {
        this.dataToState()
        this._restoreData()
        this.replyToState()
    }

    dataToState = () => {
        firebase.firestore()
            .collection('Tweets')
            .doc(this.props.tweetId)
            .get()
            .then(documentSnapshot => {

                this.setState({
                    tweetData: {
                        autor: documentSnapshot.data().autor,
                        avatar: documentSnapshot.data().avatar,
                        contentMedia: documentSnapshot.data().contentMedia,
                        contentText: documentSnapshot.data().contentText,
                        tag: documentSnapshot.data().tag
                    }
                });
            })
    }

    replyToState = () => {
        firebase.firestore()
            .collection('Tweets')
            .doc(this.props.tweetId)
            .get()
            .then(documentSnapshot => {

                this.setState({
                    replies: documentSnapshot.data().replies,
                })
            })
    }

    _restoreData = async () => {
        const name = await AsyncStorage.getItem('username');
        const tag = await AsyncStorage.getItem('tag');
        const profilePic = await AsyncStorage.getItem('profilePic');

        this.setState({
            userData: {
                name: name,
                tag: tag,
                avatar: profilePic
            }
        })
    };

    postReply = async () => {

        if (this.state.replyText != '') {
            firebase.firestore()
                .collection('Tweets')
                .doc(this.props.tweetId)
                .update({
                    replies: firebase.firestore.FieldValue.arrayUnion({
                        'autor': this.state.userData.name,
                        'avatar': this.state.userData.avatar,
                        'tag': this.state.userData.tag,
                        'text': this.state.replyText,
                    }),
                })
                .then(() => {
                    this.setState({
                        replyText: ''
                    })
                    this.replyToState()
                });
        }
        else {
            alert('Seu tweet esta vazio!')
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="light" />

                <FlatList style={{ width: '100%', backgroundColor: '#fff', height: '50%' }}
                    ListHeaderComponent={
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 15 }}>
                                <Avatar.Image size={70}
                                    source={{ uri: this.state.tweetData.avatar }}
                                    style={{ marginHorizontal: 15, backgroundColor: 'grey' }}
                                />

                                <View>
                                    <View style={{ marginTop: 0, flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{this.state.tweetData.autor}</Text>
                                        <Text style={{ color: '#999' }}>@{this.state.tweetData.tag}</Text>
                                    </View>
                                </View>
                            </View>

                            <Text style={{ marginHorizontal: 15, marginTop: 10, fontSize: 20 }}>{this.state.tweetData.contentText}</Text>

                            <MediaPost url={this.state.tweetData.contentMedia} />

                            <Text style={{ marginHorizontal: 15, marginVertical: 10, color: '#999' }}>10:26 - 05/12/2020</Text>

                            <View style={{ flexDirection: 'row', marginHorizontal: 15, borderColor: '#999', borderTopWidth: 1, borderBottomWidth: 1, width: '90%' }}>
                                <Text style={{ marginVertical: 10, color: '#999' }}>3 Comentarios</Text>
                                <Text style={{ marginLeft: 15, marginVertical: 10, color: '#999' }}>225 Curtidas</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', borderColor: '#999', borderBottomWidth: 1 }}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name="message1" size={22} color={'#999'} style={{ marginVertical: 15 }} />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name="retweet" size={22} color={'#999'} style={{ marginVertical: 15 }} />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name="hearto" size={22} color={'#999'} style={{ marginVertical: 15 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    data={this.state.replies}
                    renderItem={({ item }) =>
                        <ReplyPrefab
                            _tag={item.tag}
                            _autor={item.autor}
                            _contentText={item.text}
                            _avatar={item.avatar}
                            _replyTo={this.state.tweetData.tag}
                        />
                    }

                    keyExtractor={item => item.contentText}
                />
                <View style={{ borderTopWidth: 1, borderTopColor: '#999', height: 45, justifyContent: 'center', borderBottomWidth: 2, borderBottomColor: 'rgba(29,161,242,1.00)' }}>
                    <TextInput
                        style={{ marginLeft: 15 }}
                        placeholder={'Tweete sua resposta'}
                        onChangeText={(text) => this.setState({ replyText: text })}
                        value={this.state.replyText}
                    />
                </View>
                <TouchableOpacity
                    style={{ width: 100, height: 35, backgroundColor: 'rgba(29,161,242,1.00)', borderRadius: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', margin: 5 }}
                    onPress={() => this.postReply()}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Responder</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bottomButtoms: {
        marginHorizontal: 25,
        marginTop: 15
    }
});
