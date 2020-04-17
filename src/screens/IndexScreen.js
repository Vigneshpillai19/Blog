import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const {state, addBlogPost, delBlogPost, getblogPosts } = useContext(BlogContext);

    useEffect(() => {
        getblogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getblogPosts();
        });

        return () => {
            listener.remove();
        }

    }, []);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogpost) => blogpost.id}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity onPress={ () => navigation.navigate('ShowScreen', { id:item.id }) }>
                            <View style={styles.row}>
                                <Text style={styles.txt}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity onPress={() => delBlogPost(item.id) }>
                                    <Feather style={styles.delicon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () =>
            <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        
    }
}

const styles = StyleSheet.create({
    row: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    delicon: {
        fontSize: 24,
    },
    txt: {
        fontSize: 18,
    }
});

export default IndexScreen;