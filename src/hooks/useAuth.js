import { useContext ,useDebugValue } from "react";
import { AuthContext } from "../context";

export const useAuth = () => {
    const {user}=useContext(AuthContext)
    useDebugValue(user,user=>user?.user?"User Login":"user not Login")
    return useContext(AuthContext)
};