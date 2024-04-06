/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { BlogReducer } from "../reducers/BlogReducer";

export const BlogContext =createContext()
 const initialState = {
    blogs: [],
    loading: false,
    error: null,
  };
export const BlogProvider = ({children}) => {
    const [state, dispatch] = useReducer(BlogReducer, initialState);
    return (
        <BlogContext.Provider value={{state  ,dispatch}}>
            {children}
        </BlogContext.Provider>
    )
}