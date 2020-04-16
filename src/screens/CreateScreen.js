import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';

import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { addBlogPost } = useContext(BlogContext);

    return <BlogPostForm onSubmit={(title, content) => {
                    addBlogPost(title, content, () => navigation.navigate('Index'));
                }} 
            />
}

const styles = StyleSheet.create({});

export default CreateScreen;