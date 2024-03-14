/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AuthContext } from "../context";
export const AuthProvider = ({ children }) => {
    const [user,setUser] = useState({});
    
    const [token,setToken]=useState(localStorage.getItem('token'))
    const [refreshToken,setRefreshToken]=useState(localStorage.getItem('refreshToken'))
    const [currentUserId,setCurrentUserId]=useState(localStorage.getItem('currentUserId'))

    const islogin =!!token
    useEffect(() => {
        const localToken = localStorage.getItem('token');
            if(localToken){
                setToken(localToken)
               
            }
            const localRefreshToken = localStorage.getItem('refreshToken');
            if(localRefreshToken){
                setRefreshToken(localRefreshToken)
            }
            
    },[])
    
      const login = (newToken,newRefreshToken,currentUserId) => {
        setToken(newToken)
        setRefreshToken(newRefreshToken)
        localStorage.setItem('token', newToken);
        localStorage.setItem('refreshToken',newRefreshToken)
        localStorage.setItem('currentUserId',currentUserId)
        setUser({...user,token:{...user.token,accessToken:newToken ,refreshToken:newRefreshToken,}})

      };
    
      const logout = () => {
        setToken("")
        setRefreshToken("")
        setCurrentUserId('')
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('currentUserId')
        setUser({})
      };
    return (
        <AuthContext.Provider value={{ user, setUser ,login,logout ,token,setToken ,islogin,refreshToken,setRefreshToken ,currentUserId}}>
            {children}
        </AuthContext.Provider>
    )
}