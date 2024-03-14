/* eslint-disable react/prop-types */
import { Navigate, useLocation,  } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"


const PrivateRoute = ({children}) => {
    const {token} =useAuth()

    const location = useLocation()
  
      // if(loader){
      //   return <div>Loading....</div>
      // }
        if(token){
            return children;
        }else{
            return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
        }
              
        
   
};

export default PrivateRoute;