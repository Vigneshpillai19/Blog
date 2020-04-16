import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const {state, addBlogPost, delBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={(blogpost) => blogpost.id}
                renderItem={({item}) => {
                    return(
                        <View style={styles.row}>
                            <Text style={styles.txt}>
                                {item.title} - {item.id}
                            </Text>
                            <TouchableOpacity onPress={() => delBlogPost(item.id) }>
                                <Feather style={styles.delicon} name="trash" />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    );
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