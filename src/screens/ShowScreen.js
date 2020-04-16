import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext);
    const blogpost = state.find((blogpost) => blogpost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogpost.title} - {blogpost.id}</Text>
        </View>
    );
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => 
            <TouchableOpacity onPress={() => navigation.navigate('EditScreen', {id: navigation.getParam('id')})}>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
    };
}

const styles = StyleSheet.create({});

export default ShowScreen;