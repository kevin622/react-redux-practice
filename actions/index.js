import * as types from './ActionTypes';

export const add = (content) => ({
    type : types.ADD,
    content
});

export const remove = () => ({
    type : types.REMOVE,
});

export const increment = (index) => ({
    type : types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type : types.DECREMENT,
    index
});