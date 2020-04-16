import React, { useReducer } from 'react';
import createDataContext from '../createDataContext';    

const blogReducer = (state, action) => {
    switch(action.type){
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

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        try{
            dispatch({ type: 'add_blog_post', payload: {title, content} } );
            if(callback){
                callback();    
            }
            
        } catch(err){

        }
    }
}

const delBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'del_blog_post', payload: id });
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_blog_post', payload: { id, title, content } });
        if (callback){
            callback();
        }
    }
}
    
export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, delBlogPost, editBlogPost },
    [{id:''+1, title: 'Blog Post 1', content: 'Blog Content 1'}]
);