import React from 'react'
import { useGetAuthor } from '../../hooks/useGetAuthor'
import { useAuth } from '../../hooks/useAuth'

const Favorites = () => {
    const {currentUserId}=useAuth()
    const author =useGetAuthor(currentUserId)
    console.log(author)
  return (
    <ul className="space-y-5 my-5">
        {author?.favourites?.length===0? (<h2>You do not have any favourite items</h2>):(
            
                author?.favourites?.map((item,i)=><li key={i}>
                    <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                      How to Auto Deploy a Next.js App on Ubuntu from GitHub
                    </h3>
                    <p className="text-slate-600 text-sm">
                      #tailwindcss, #server, #ubuntu
                    </p>
                  </li>)
            
        )}
    

   
  </ul>
  )
}

export default Favorites