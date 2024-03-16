import { createContext, useReducer } from "react";
import { useProfile } from "../hooks/useProfileStore";
import { profileReducer } from "../reducers/ProfileReducer";

export const ProfileContext = createContext()
const initialState = {
    author: null,
    loading: false,
    error: null,
  };
export const ProfileConTextProvider =({children})=>{
    const [state, dispatch] = useReducer(profileReducer, initialState);
    return ( <ProfileContext.Provider value={{state,dispatch}}>
        {children}
    </ProfileContext.Provider>)
}

