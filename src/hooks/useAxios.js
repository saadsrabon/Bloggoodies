import { useEffect } from "react"
import { axiosApi } from "../axios/axiosApi"
import axios from "axios"
import { useAuth } from "./useAuth"

const useAxios =()=>{
    const {user,setUser}=useAuth()
  useEffect(()=>{
    // api request take intercept kora
    axiosApi.interceptors.request.use(
        (config)=>{
            const authToken =localStorage.getItem('token')
            if(authToken){
                config.headers.Authorization =`Bearer ${authToken}`
            }
            return config
        },
        (error)=>Promise.reject(error)
    )
    // api response ta k intercept kora
    axiosApi.interceptors.response.use(
        (response)=>response,
        async(error)=>{
            const originalRequest =error.config
            if(error.response.status===401 && !originalRequest._retry){
                originalRequest._retry=true;

                try{
                      const refreshToken =localStorage.getItem("refreshToken")
                      const response=await axios.post( `http://localhost:3000/auth/refresh-token`,{refreshToken})
                      const {token}=response.data
                      console.log('new token', token)
                       if (token){
                        localStorage.setItem('token',token.accessToken)
                        setUser({...user, token:{...token}})
                       }
                       originalRequest.headers.Authorization= `Bearer ${token.accessToken}`;

                       return axios(originalRequest)

                }catch{
                    (error)
                    console.log(error)
                }
            }
        }
    )
  },[setUser, user])
    return axiosApi
}