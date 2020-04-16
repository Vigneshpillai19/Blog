import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(val) => setTitle(val)} />
            <Text style={styles.heading}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(val) => setContent(val)} />
            <TouchableOpacity onPress={() => onSubmit(title, content)}>
                <View style={styles.btn}><Text style={styles.btnText}>Save</Text></View>
            </TouchableOpacity>
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 20,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        textAlignVertical: 'center',
        paddingLeft: 5,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    btnText: {
        backgroundColor: 'red',
        color: 'white',
        // width: 80,
        // height: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
});

export default BlogPostForm;