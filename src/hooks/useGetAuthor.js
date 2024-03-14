import axios from "axios";
import { useEffect, useState } from "react"

export const useGetAuthor =(id)=>{

    const [author,setAuthor]=useState({})

    console.log(author)
    
useEffect(()=>{
    const fetchAuthorProfile=async(id)=>{
      try{
        const response= await axios.get(`http://localhost:3000/profile/${id}`);
        if(response){
            setAuthor(response.data)
        }

      }
      catch{
        err=> console.log(err)
      }
    }
    fetchAuthorProfile(id)
    // 
},[id])


return author;

}