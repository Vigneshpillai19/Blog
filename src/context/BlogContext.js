import React, { useReducer } from 'react';
import createDataContext from '../createDataContext';    

const blogReducer = (state, action) => {
    switch(action.type){
        case 'add_blog_post':
            return [...state, {id: Math.floor(Math.random()*99999), title: `Blog Post #${state.length + 1}`}];
        case 'del_blog_post':
            return state.filter( blogPost => blogPost.id !== action.payload );
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blog_post' } );
    }
}

const delBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'del_blog_post', payload: id });
    }
}
    
export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, delBlogPost },
    []
);