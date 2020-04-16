import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { state, editBlogPost } = useContext(BlogContext);

    const id = navigation.getParam('id');

    const blogPost = state.find((blogpost) => blogpost.id === id);

    return <BlogPostForm
        initialValues = {{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop());
        }}
    />
}

const styles = StyleSheet.create({});

export default EditScreen;