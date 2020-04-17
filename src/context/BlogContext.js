import React, { useReducer } from 'react';
import jsonServer from '../api/jsonServer';

import createDataContext from '../createDataContext';    
import Axios from 'axios';

const blogReducer = (state, action) => {
    switch(action.type){
        case 'get_blogPosts':
            return action.payload;

        case 'add_blog_post':
            return [...state, {id: '' + Math.floor(Math.random()*99999), title: action.payload.title, content: action.payload.content }];

        case 'del_blog_post':
            return state.filter( blogPost => blogPost.id !== action.payload );

        case 'edit_blog_post':
            // Not worked
            // return state.map((blogpost) => {
            //     blogpost.id === action.payload.id ? action.payload : blogpost;
            // });
            return state.map((blogpost) => {
                if (blogpost.id === action.payload.id){
                    return action.payload;
                }else{
                    return blogpost;
                }
            })

        default:
            return state;
    }
}

const getblogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({ type: 'get_blogPosts', payload: response.data });
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        try{
            await jsonServer.post('/blogposts', { title, content });
            // dispatch({ type: 'add_blog_post', payload: {title, content} } );
            if(callback){
                callback();    
            }
            
        } catch(err){

        }
    }
}

const delBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);

        dispatch({ type: 'del_blog_post', payload: id });
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content });

        dispatch({ type: 'edit_blog_post', payload: { id, title, content } });
        if (callback){
            callback();
        }
    }
}
    
export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, delBlogPost, editBlogPost, getblogPosts },
    []
);